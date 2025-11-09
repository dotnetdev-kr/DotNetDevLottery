import { RotationOps, VectorOps } from "../math";
import { CoefficientCombineRule, } from "../dynamics";
import { ActiveHooks, ActiveEvents } from "../pipeline";
import { Shape, Cuboid, Ball, Capsule, Voxels, TriMesh, Polyline, Heightfield, Segment, Triangle, RoundTriangle, RoundCuboid, HalfSpace, 
// #if DIM2
ConvexPolygon, RoundConvexPolygon,
// #endif
 } from "./shape";
import { RayIntersection } from "./ray";
import { PointProjection } from "./point";
import { ColliderShapeCastHit, ShapeCastHit } from "./toi";
import { ShapeContact } from "./contact";
/**
 * Flags affecting whether collision-detection happens between two colliders
 * depending on the type of rigid-bodies they are attached to.
 */
export var ActiveCollisionTypes;
(function (ActiveCollisionTypes) {
    /**
     * Enable collision-detection between a collider attached to a dynamic body
     * and another collider attached to a dynamic body.
     */
    ActiveCollisionTypes[ActiveCollisionTypes["DYNAMIC_DYNAMIC"] = 1] = "DYNAMIC_DYNAMIC";
    /**
     * Enable collision-detection between a collider attached to a dynamic body
     * and another collider attached to a kinematic body.
     */
    ActiveCollisionTypes[ActiveCollisionTypes["DYNAMIC_KINEMATIC"] = 12] = "DYNAMIC_KINEMATIC";
    /**
     * Enable collision-detection between a collider attached to a dynamic body
     * and another collider attached to a fixed body (or not attached to any body).
     */
    ActiveCollisionTypes[ActiveCollisionTypes["DYNAMIC_FIXED"] = 2] = "DYNAMIC_FIXED";
    /**
     * Enable collision-detection between a collider attached to a kinematic body
     * and another collider attached to a kinematic body.
     */
    ActiveCollisionTypes[ActiveCollisionTypes["KINEMATIC_KINEMATIC"] = 52224] = "KINEMATIC_KINEMATIC";
    /**
     * Enable collision-detection between a collider attached to a kinematic body
     * and another collider attached to a fixed body (or not attached to any body).
     */
    ActiveCollisionTypes[ActiveCollisionTypes["KINEMATIC_FIXED"] = 8704] = "KINEMATIC_FIXED";
    /**
     * Enable collision-detection between a collider attached to a fixed body (or
     * not attached to any body) and another collider attached to a fixed body (or
     * not attached to any body).
     */
    ActiveCollisionTypes[ActiveCollisionTypes["FIXED_FIXED"] = 32] = "FIXED_FIXED";
    /**
     * The default active collision types, enabling collisions between a dynamic body
     * and another body of any type, but not enabling collisions between two non-dynamic bodies.
     */
    ActiveCollisionTypes[ActiveCollisionTypes["DEFAULT"] = 15] = "DEFAULT";
    /**
     * Enable collisions between any kind of rigid-bodies (including between two non-dynamic bodies).
     */
    ActiveCollisionTypes[ActiveCollisionTypes["ALL"] = 60943] = "ALL";
})(ActiveCollisionTypes || (ActiveCollisionTypes = {}));
/**
 * A geometric entity that can be attached to a body so it can be affected
 * by contacts and proximity queries.
 */
export class Collider {
    constructor(colliderSet, handle, parent, shape) {
        this.colliderSet = colliderSet;
        this.handle = handle;
        this._parent = parent;
        this._shape = shape;
    }
    /** @internal */
    finalizeDeserialization(bodies) {
        if (this.handle != null) {
            this._parent = bodies.get(this.colliderSet.raw.coParent(this.handle));
        }
    }
    ensureShapeIsCached() {
        if (!this._shape)
            this._shape = Shape.fromRaw(this.colliderSet.raw, this.handle);
    }
    /**
     * The shape of this collider.
     */
    get shape() {
        this.ensureShapeIsCached();
        return this._shape;
    }
    /**
     * Set the internal cached JS shape to null.
     *
     * This can be useful if you want to free some memory (assuming you are not
     * holding any other references to the shape object), or in order to force
     * the recalculation of the JS shape (the next time the `shape` getter is
     * accessed) from the WASM source of truth.
     */
    clearShapeCache() {
        this._shape = null;
    }
    /**
     * Checks if this collider is still valid (i.e. that it has
     * not been deleted from the collider set yet).
     */
    isValid() {
        return this.colliderSet.raw.contains(this.handle);
    }
    /**
     * The world-space translation of this collider.
     */
    translation() {
        return VectorOps.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
    }
    /**
     * The translation of this collider relative to its parent rigid-body.
     *
     * Returns `null` if the collider doesn’t have a parent rigid-body.
     */
    translationWrtParent() {
        return VectorOps.fromRaw(this.colliderSet.raw.coTranslationWrtParent(this.handle));
    }
    /**
     * The world-space orientation of this collider.
     */
    rotation() {
        return RotationOps.fromRaw(this.colliderSet.raw.coRotation(this.handle));
    }
    /**
     * The orientation of this collider relative to its parent rigid-body.
     *
     * Returns `null` if the collider doesn’t have a parent rigid-body.
     */
    rotationWrtParent() {
        return RotationOps.fromRaw(this.colliderSet.raw.coRotationWrtParent(this.handle));
    }
    /**
     * Is this collider a sensor?
     */
    isSensor() {
        return this.colliderSet.raw.coIsSensor(this.handle);
    }
    /**
     * Sets whether this collider is a sensor.
     * @param isSensor - If `true`, the collider will be a sensor.
     */
    setSensor(isSensor) {
        this.colliderSet.raw.coSetSensor(this.handle, isSensor);
    }
    /**
     * Sets the new shape of the collider.
     * @param shape - The collider’s new shape.
     */
    setShape(shape) {
        let rawShape = shape.intoRaw();
        this.colliderSet.raw.coSetShape(this.handle, rawShape);
        rawShape.free();
        this._shape = shape;
    }
    /**
     * Sets whether this collider is enabled or not.
     *
     * @param enabled - Set to `false` to disable this collider (its parent rigid-body won’t be disabled automatically by this).
     */
    setEnabled(enabled) {
        this.colliderSet.raw.coSetEnabled(this.handle, enabled);
    }
    /**
     * Is this collider enabled?
     */
    isEnabled() {
        return this.colliderSet.raw.coIsEnabled(this.handle);
    }
    /**
     * Sets the restitution coefficient of the collider to be created.
     *
     * @param restitution - The restitution coefficient in `[0, 1]`. A value of 0 (the default) means no bouncing behavior
     *                   while 1 means perfect bouncing (though energy may still be lost due to numerical errors of the
     *                   constraints solver).
     */
    setRestitution(restitution) {
        this.colliderSet.raw.coSetRestitution(this.handle, restitution);
    }
    /**
     * Sets the friction coefficient of the collider to be created.
     *
     * @param friction - The friction coefficient. Must be greater or equal to 0. This is generally smaller than 1. The
     *                   higher the coefficient, the stronger friction forces will be for contacts with the collider
     *                   being built.
     */
    setFriction(friction) {
        this.colliderSet.raw.coSetFriction(this.handle, friction);
    }
    /**
     * Gets the rule used to combine the friction coefficients of two colliders
     * colliders involved in a contact.
     */
    frictionCombineRule() {
        return this.colliderSet.raw.coFrictionCombineRule(this.handle);
    }
    /**
     * Sets the rule used to combine the friction coefficients of two colliders
     * colliders involved in a contact.
     *
     * @param rule − The combine rule to apply.
     */
    setFrictionCombineRule(rule) {
        this.colliderSet.raw.coSetFrictionCombineRule(this.handle, rule);
    }
    /**
     * Gets the rule used to combine the restitution coefficients of two colliders
     * colliders involved in a contact.
     */
    restitutionCombineRule() {
        return this.colliderSet.raw.coRestitutionCombineRule(this.handle);
    }
    /**
     * Sets the rule used to combine the restitution coefficients of two colliders
     * colliders involved in a contact.
     *
     * @param rule − The combine rule to apply.
     */
    setRestitutionCombineRule(rule) {
        this.colliderSet.raw.coSetRestitutionCombineRule(this.handle, rule);
    }
    /**
     * Sets the collision groups used by this collider.
     *
     * Two colliders will interact iff. their collision groups are compatible.
     * See the documentation of `InteractionGroups` for details on teh used bit pattern.
     *
     * @param groups - The collision groups used for the collider being built.
     */
    setCollisionGroups(groups) {
        this.colliderSet.raw.coSetCollisionGroups(this.handle, groups);
    }
    /**
     * Sets the solver groups used by this collider.
     *
     * Forces between two colliders in contact will be computed iff their solver
     * groups are compatible.
     * See the documentation of `InteractionGroups` for details on the used bit pattern.
     *
     * @param groups - The solver groups used for the collider being built.
     */
    setSolverGroups(groups) {
        this.colliderSet.raw.coSetSolverGroups(this.handle, groups);
    }
    /**
     * Sets the contact skin for this collider.
     *
     * See the documentation of `ColliderDesc.setContactSkin` for additional details.
     */
    contactSkin() {
        return this.colliderSet.raw.coContactSkin(this.handle);
    }
    /**
     * Sets the contact skin for this collider.
     *
     * See the documentation of `ColliderDesc.setContactSkin` for additional details.
     *
     * @param thickness - The contact skin thickness.
     */
    setContactSkin(thickness) {
        return this.colliderSet.raw.coSetContactSkin(this.handle, thickness);
    }
    /**
     * Get the physics hooks active for this collider.
     */
    activeHooks() {
        return this.colliderSet.raw.coActiveHooks(this.handle);
    }
    /**
     * Set the physics hooks active for this collider.
     *
     * Use this to enable custom filtering rules for contact/intersecstion pairs involving this collider.
     *
     * @param activeHooks - The hooks active for contact/intersection pairs involving this collider.
     */
    setActiveHooks(activeHooks) {
        this.colliderSet.raw.coSetActiveHooks(this.handle, activeHooks);
    }
    /**
     * The events active for this collider.
     */
    activeEvents() {
        return this.colliderSet.raw.coActiveEvents(this.handle);
    }
    /**
     * Set the events active for this collider.
     *
     * Use this to enable contact and/or intersection event reporting for this collider.
     *
     * @param activeEvents - The events active for contact/intersection pairs involving this collider.
     */
    setActiveEvents(activeEvents) {
        this.colliderSet.raw.coSetActiveEvents(this.handle, activeEvents);
    }
    /**
     * Gets the collision types active for this collider.
     */
    activeCollisionTypes() {
        return this.colliderSet.raw.coActiveCollisionTypes(this.handle);
    }
    /**
     * Sets the total force magnitude beyond which a contact force event can be emitted.
     *
     * @param threshold - The new force threshold.
     */
    setContactForceEventThreshold(threshold) {
        return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle, threshold);
    }
    /**
     * The total force magnitude beyond which a contact force event can be emitted.
     */
    contactForceEventThreshold() {
        return this.colliderSet.raw.coContactForceEventThreshold(this.handle);
    }
    /**
     * Set the collision types active for this collider.
     *
     * @param activeCollisionTypes - The hooks active for contact/intersection pairs involving this collider.
     */
    setActiveCollisionTypes(activeCollisionTypes) {
        this.colliderSet.raw.coSetActiveCollisionTypes(this.handle, activeCollisionTypes);
    }
    /**
     * Sets the uniform density of this collider.
     *
     * This will override any previous mass-properties set by `this.setDensity`,
     * `this.setMass`, `this.setMassProperties`, `ColliderDesc.density`,
     * `ColliderDesc.mass`, or `ColliderDesc.massProperties` for this collider.
     *
     * The mass and angular inertia of this collider will be computed automatically based on its
     * shape.
     */
    setDensity(density) {
        this.colliderSet.raw.coSetDensity(this.handle, density);
    }
    /**
     * Sets the mass of this collider.
     *
     * This will override any previous mass-properties set by `this.setDensity`,
     * `this.setMass`, `this.setMassProperties`, `ColliderDesc.density`,
     * `ColliderDesc.mass`, or `ColliderDesc.massProperties` for this collider.
     *
     * The angular inertia of this collider will be computed automatically based on its shape
     * and this mass value.
     */
    setMass(mass) {
        this.colliderSet.raw.coSetMass(this.handle, mass);
    }
    // #if DIM2
    /**
     * Sets the mass of this collider.
     *
     * This will override any previous mass-properties set by `this.setDensity`,
     * `this.setMass`, `this.setMassProperties`, `ColliderDesc.density`,
     * `ColliderDesc.mass`, or `ColliderDesc.massProperties` for this collider.
     */
    setMassProperties(mass, centerOfMass, principalAngularInertia) {
        let rawCom = VectorOps.intoRaw(centerOfMass);
        this.colliderSet.raw.coSetMassProperties(this.handle, mass, rawCom, principalAngularInertia);
        rawCom.free();
    }
    // #endif
    /**
     * Sets the translation of this collider.
     *
     * @param tra - The world-space position of the collider.
     */
    setTranslation(tra) {
        // #if DIM2
        this.colliderSet.raw.coSetTranslation(this.handle, tra.x, tra.y);
        // #endif
    }
    /**
     * Sets the translation of this collider relative to its parent rigid-body.
     *
     * Does nothing if this collider isn't attached to a rigid-body.
     *
     * @param tra - The new translation of the collider relative to its parent.
     */
    setTranslationWrtParent(tra) {
        // #if DIM2
        this.colliderSet.raw.coSetTranslationWrtParent(this.handle, tra.x, tra.y);
        // #endif
    }
    // #if DIM2
    /**
     * Sets the rotation angle of this collider.
     *
     * @param angle - The rotation angle, in radians.
     */
    setRotation(angle) {
        this.colliderSet.raw.coSetRotation(this.handle, angle);
    }
    /**
     * Sets the rotation angle of this collider relative to its parent rigid-body.
     *
     * Does nothing if this collider isn't attached to a rigid-body.
     *
     * @param angle - The rotation angle, in radians.
     */
    setRotationWrtParent(angle) {
        this.colliderSet.raw.coSetRotationWrtParent(this.handle, angle);
    }
    // #endif
    /**
     * The type of the shape of this collider.
     */
    shapeType() {
        return this.colliderSet.raw.coShapeType(this.handle);
    }
    /**
     * The half-extents of this collider if it is a cuboid shape.
     */
    halfExtents() {
        return VectorOps.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
    }
    /**
     * Sets the half-extents of this collider if it is a cuboid shape.
     *
     * @param newHalfExtents - desired half extents.
     */
    setHalfExtents(newHalfExtents) {
        const rawPoint = VectorOps.intoRaw(newHalfExtents);
        this.colliderSet.raw.coSetHalfExtents(this.handle, rawPoint);
    }
    /**
     * The radius of this collider if it is a ball, cylinder, capsule, or cone shape.
     */
    radius() {
        return this.colliderSet.raw.coRadius(this.handle);
    }
    /**
     * Sets the radius of this collider if it is a ball, cylinder, capsule, or cone shape.
     *
     * @param newRadius - desired radius.
     */
    setRadius(newRadius) {
        this.colliderSet.raw.coSetRadius(this.handle, newRadius);
    }
    /**
     * The radius of the round edges of this collider if it is a round cylinder.
     */
    roundRadius() {
        return this.colliderSet.raw.coRoundRadius(this.handle);
    }
    /**
     * Sets the radius of the round edges of this collider if it has round edges.
     *
     * @param newBorderRadius - desired round edge radius.
     */
    setRoundRadius(newBorderRadius) {
        this.colliderSet.raw.coSetRoundRadius(this.handle, newBorderRadius);
    }
    /**
     * The half height of this collider if it is a cylinder, capsule, or cone shape.
     */
    halfHeight() {
        return this.colliderSet.raw.coHalfHeight(this.handle);
    }
    /**
     * Sets the half height of this collider if it is a cylinder, capsule, or cone shape.
     *
     * @param newHalfheight - desired half height.
     */
    setHalfHeight(newHalfheight) {
        this.colliderSet.raw.coSetHalfHeight(this.handle, newHalfheight);
    }
    /**
     * If this collider has a Voxels shape, this will mark the voxel at the
     * given grid coordinates as filled or empty (depending on the `filled`
     * argument).
     *
     * Each input value is assumed to be an integer.
     *
     * The operation is O(1), unless the provided coordinates are out of the
     * bounds of the currently allocated internal grid in which case the grid
     * will be grown automatically.
     */
    setVoxel(ix, iy, filled) {
        this.colliderSet.raw.coSetVoxel(this.handle, ix, iy, filled);
        // We modified the shape, invalidate it to keep our cache
        // up-to-date the next time the user requests the shape data.
        // PERF: this isn’t ideal for performances as this adds a
        //       hidden, non-constant, cost.
        this._shape = null;
    }
    /**
     * If this and `voxels2` are voxel colliders, and a voxel from `this` was
     * modified with `setVoxel`, this will ensure that a
     * moving object transitioning across the boundaries of these colliders
     * won’t suffer from the "internal edges" artifact.
     *
     * The indices `ix, iy, iz` indicate the integer coordinates of the voxel in
     * the local coordinate frame of `this`.
     *
     * If the voxels in `voxels2` live in a different coordinate space from `this`,
     * then the `shift_*` argument indicate the distance, in voxel units, between
     * the origin of `this` to the origin of `voxels2`.
     *
     * This method is intended to be called between `this` and all the other
     * voxels colliders with a domain intersecting `this` or sharing a domain
     * boundary. This is an incremental maintenance of the effect of
     * `combineVoxelStates`.
     */
    propagateVoxelChange(voxels2, ix, iy, shift_x, shift_y) {
        this.colliderSet.raw.coPropagateVoxelChange(this.handle, voxels2.handle, ix, iy, shift_x, shift_y);
        // We modified the shape, invalidate it to keep our cache
        // up-to-date the next time the user requests the shape data.
        // PERF: this isn’t ideal for performances as this adds a
        //       hidden, non-constant, cost.
        this._shape = null;
    }
    /**
     * If this and `voxels2` are voxel colliders, this will ensure that a
     * moving object transitioning across the boundaries of these colliders
     * won’t suffer from the "internal edges" artifact.
     *
     * If the voxels in `voxels2` live in a different coordinate space from `this`,
     * then the `shift_*` argument indicate the distance, in voxel units, between
     * the origin of `this` to the origin of `voxels2`.
     *
     * This method is intended to be called once between all pairs of voxels
     * colliders with intersecting domains or shared boundaries.
     *
     * If either voxels collider is then modified with `setVoxel`, the
     * `propagateVoxelChange` method must be called to maintain the coupling
     * between the voxels shapes after the modification.
     */
    combineVoxelStates(voxels2, shift_x, shift_y) {
        this.colliderSet.raw.coCombineVoxelStates(this.handle, voxels2.handle, shift_x, shift_y);
        // We modified the shape, invalidate it to keep our cache
        // up-to-date the next time the user requests the shape data.
        // PERF: this isn’t ideal for performances as this adds a
        //       hidden, non-constant, cost.
        this._shape = null;
    }
    /**
     * If this collider has a triangle mesh, polyline, convex polygon, or convex polyhedron shape,
     * this returns the vertex buffer of said shape.
     */
    vertices() {
        return this.colliderSet.raw.coVertices(this.handle);
    }
    /**
     * If this collider has a triangle mesh, polyline, or convex polyhedron shape,
     * this returns the index buffer of said shape.
     */
    indices() {
        return this.colliderSet.raw.coIndices(this.handle);
    }
    /**
     * If this collider has a heightfield shape, this returns the heights buffer of
     * the heightfield.
     * In 3D, the returned height matrix is provided in column-major order.
     */
    heightfieldHeights() {
        return this.colliderSet.raw.coHeightfieldHeights(this.handle);
    }
    /**
     * If this collider has a heightfield shape, this returns the scale
     * applied to it.
     */
    heightfieldScale() {
        let scale = this.colliderSet.raw.coHeightfieldScale(this.handle);
        return VectorOps.fromRaw(scale);
    }
    /**
     * The rigid-body this collider is attached to.
     */
    parent() {
        return this._parent;
    }
    /**
     * The friction coefficient of this collider.
     */
    friction() {
        return this.colliderSet.raw.coFriction(this.handle);
    }
    /**
     * The restitution coefficient of this collider.
     */
    restitution() {
        return this.colliderSet.raw.coRestitution(this.handle);
    }
    /**
     * The density of this collider.
     */
    density() {
        return this.colliderSet.raw.coDensity(this.handle);
    }
    /**
     * The mass of this collider.
     */
    mass() {
        return this.colliderSet.raw.coMass(this.handle);
    }
    /**
     * The volume of this collider.
     */
    volume() {
        return this.colliderSet.raw.coVolume(this.handle);
    }
    /**
     * The collision groups of this collider.
     */
    collisionGroups() {
        return this.colliderSet.raw.coCollisionGroups(this.handle);
    }
    /**
     * The solver groups of this collider.
     */
    solverGroups() {
        return this.colliderSet.raw.coSolverGroups(this.handle);
    }
    /**
     * Tests if this collider contains a point.
     *
     * @param point - The point to test.
     */
    containsPoint(point) {
        let rawPoint = VectorOps.intoRaw(point);
        let result = this.colliderSet.raw.coContainsPoint(this.handle, rawPoint);
        rawPoint.free();
        return result;
    }
    /**
     * Find the projection of a point on this collider.
     *
     * @param point - The point to project.
     * @param solid - If this is set to `true` then the collider shapes are considered to
     *   be plain (if the point is located inside of a plain shape, its projection is the point
     *   itself). If it is set to `false` the collider shapes are considered to be hollow
     *   (if the point is located inside of an hollow shape, it is projected on the shape's
     *   boundary).
     */
    projectPoint(point, solid) {
        let rawPoint = VectorOps.intoRaw(point);
        let result = PointProjection.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, rawPoint, solid));
        rawPoint.free();
        return result;
    }
    /**
     * Tests if this collider intersects the given ray.
     *
     * @param ray - The ray to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
     */
    intersectsRay(ray, maxToi) {
        let rawOrig = VectorOps.intoRaw(ray.origin);
        let rawDir = VectorOps.intoRaw(ray.dir);
        let result = this.colliderSet.raw.coIntersectsRay(this.handle, rawOrig, rawDir, maxToi);
        rawOrig.free();
        rawDir.free();
        return result;
    }
    /*
     * Computes the smallest time between this and the given shape under translational movement are separated by a distance smaller or equal to distance.
     *
     * @param collider1Vel - The constant velocity of the current shape to cast (i.e. the cast direction).
     * @param shape2 - The shape to cast against.
     * @param shape2Pos - The position of the second shape.
     * @param shape2Rot - The rotation of the second shape.
     * @param shape2Vel - The constant velocity of the second shape.
     * @param targetDistance − If the shape moves closer to this distance from a collider, a hit
     *                         will be returned.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the distance traveled by the shape to `collider1Vel.norm() * maxToi`.
     * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
     *   the shape is penetrating another shape at its starting point **and** its trajectory is such
     *   that it’s on a path to exit that penetration state.
     */
    castShape(collider1Vel, shape2, shape2Pos, shape2Rot, shape2Vel, targetDistance, maxToi, stopAtPenetration) {
        let rawCollider1Vel = VectorOps.intoRaw(collider1Vel);
        let rawShape2Pos = VectorOps.intoRaw(shape2Pos);
        let rawShape2Rot = RotationOps.intoRaw(shape2Rot);
        let rawShape2Vel = VectorOps.intoRaw(shape2Vel);
        let rawShape2 = shape2.intoRaw();
        let result = ShapeCastHit.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, rawCollider1Vel, rawShape2, rawShape2Pos, rawShape2Rot, rawShape2Vel, targetDistance, maxToi, stopAtPenetration));
        rawCollider1Vel.free();
        rawShape2Pos.free();
        rawShape2Rot.free();
        rawShape2Vel.free();
        rawShape2.free();
        return result;
    }
    /*
     * Computes the smallest time between this and the given collider under translational movement are separated by a distance smaller or equal to distance.
     *
     * @param collider1Vel - The constant velocity of the current collider to cast (i.e. the cast direction).
     * @param collider2 - The collider to cast against.
     * @param collider2Vel - The constant velocity of the second collider.
     * @param targetDistance − If the shape moves closer to this distance from a collider, a hit
     *                         will be returned.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the distance traveled by the shape to `shapeVel.norm() * maxToi`.
     * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
     *   the shape is penetrating another shape at its starting point **and** its trajectory is such
     *   that it’s on a path to exit that penetration state.
     */
    castCollider(collider1Vel, collider2, collider2Vel, targetDistance, maxToi, stopAtPenetration) {
        let rawCollider1Vel = VectorOps.intoRaw(collider1Vel);
        let rawCollider2Vel = VectorOps.intoRaw(collider2Vel);
        let result = ColliderShapeCastHit.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, rawCollider1Vel, collider2.handle, rawCollider2Vel, targetDistance, maxToi, stopAtPenetration));
        rawCollider1Vel.free();
        rawCollider2Vel.free();
        return result;
    }
    intersectsShape(shape2, shapePos2, shapeRot2) {
        let rawPos2 = VectorOps.intoRaw(shapePos2);
        let rawRot2 = RotationOps.intoRaw(shapeRot2);
        let rawShape2 = shape2.intoRaw();
        let result = this.colliderSet.raw.coIntersectsShape(this.handle, rawShape2, rawPos2, rawRot2);
        rawPos2.free();
        rawRot2.free();
        rawShape2.free();
        return result;
    }
    /**
     * Computes one pair of contact points between the shape owned by this collider and the given shape.
     *
     * @param shape2 - The second shape.
     * @param shape2Pos - The initial position of the second shape.
     * @param shape2Rot - The rotation of the second shape.
     * @param prediction - The prediction value, if the shapes are separated by a distance greater than this value, test will fail.
     * @returns `null` if the shapes are separated by a distance greater than prediction, otherwise contact details. The result is given in world-space.
     */
    contactShape(shape2, shape2Pos, shape2Rot, prediction) {
        let rawPos2 = VectorOps.intoRaw(shape2Pos);
        let rawRot2 = RotationOps.intoRaw(shape2Rot);
        let rawShape2 = shape2.intoRaw();
        let result = ShapeContact.fromRaw(this.colliderSet.raw.coContactShape(this.handle, rawShape2, rawPos2, rawRot2, prediction));
        rawPos2.free();
        rawRot2.free();
        rawShape2.free();
        return result;
    }
    /**
     * Computes one pair of contact points between the collider and the given collider.
     *
     * @param collider2 - The second collider.
     * @param prediction - The prediction value, if the shapes are separated by a distance greater than this value, test will fail.
     * @returns `null` if the shapes are separated by a distance greater than prediction, otherwise contact details. The result is given in world-space.
     */
    contactCollider(collider2, prediction) {
        let result = ShapeContact.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, collider2.handle, prediction));
        return result;
    }
    /**
     * Find the closest intersection between a ray and this collider.
     *
     * This also computes the normal at the hit point.
     * @param ray - The ray to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
     *   whereas `false` implies that all shapes are hollow for this ray-cast.
     * @returns The time-of-impact between this collider and the ray, or `-1` if there is no intersection.
     */
    castRay(ray, maxToi, solid) {
        let rawOrig = VectorOps.intoRaw(ray.origin);
        let rawDir = VectorOps.intoRaw(ray.dir);
        let result = this.colliderSet.raw.coCastRay(this.handle, rawOrig, rawDir, maxToi, solid);
        rawOrig.free();
        rawDir.free();
        return result;
    }
    /**
     * Find the closest intersection between a ray and this collider.
     *
     * This also computes the normal at the hit point.
     * @param ray - The ray to cast.
     * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
     *   limits the length of the ray to `ray.dir.norm() * maxToi`.
     * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
     *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
     *   whereas `false` implies that all shapes are hollow for this ray-cast.
     */
    castRayAndGetNormal(ray, maxToi, solid) {
        let rawOrig = VectorOps.intoRaw(ray.origin);
        let rawDir = VectorOps.intoRaw(ray.dir);
        let result = RayIntersection.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, rawOrig, rawDir, maxToi, solid));
        rawOrig.free();
        rawDir.free();
        return result;
    }
}
export var MassPropsMode;
(function (MassPropsMode) {
    MassPropsMode[MassPropsMode["Density"] = 0] = "Density";
    MassPropsMode[MassPropsMode["Mass"] = 1] = "Mass";
    MassPropsMode[MassPropsMode["MassProps"] = 2] = "MassProps";
})(MassPropsMode || (MassPropsMode = {}));
export class ColliderDesc {
    /**
     * Initializes a collider descriptor from the collision shape.
     *
     * @param shape - The shape of the collider being built.
     */
    constructor(shape) {
        this.enabled = true;
        this.shape = shape;
        this.massPropsMode = MassPropsMode.Density;
        this.density = 1.0;
        this.friction = 0.5;
        this.restitution = 0.0;
        this.rotation = RotationOps.identity();
        this.translation = VectorOps.zeros();
        this.isSensor = false;
        this.collisionGroups = 4294967295;
        this.solverGroups = 4294967295;
        this.frictionCombineRule = CoefficientCombineRule.Average;
        this.restitutionCombineRule = CoefficientCombineRule.Average;
        this.activeCollisionTypes = ActiveCollisionTypes.DEFAULT;
        this.activeEvents = ActiveEvents.NONE;
        this.activeHooks = ActiveHooks.NONE;
        this.mass = 0.0;
        this.centerOfMass = VectorOps.zeros();
        this.contactForceEventThreshold = 0.0;
        this.contactSkin = 0.0;
        // #if DIM2
        this.principalAngularInertia = 0.0;
        this.rotationsEnabled = true;
        // #endif
    }
    /**
     * Create a new collider descriptor with a ball shape.
     *
     * @param radius - The radius of the ball.
     */
    static ball(radius) {
        const shape = new Ball(radius);
        return new ColliderDesc(shape);
    }
    /**
     * Create a new collider descriptor with a capsule shape.
     *
     * @param halfHeight - The half-height of the capsule, along the `y` axis.
     * @param radius - The radius of the capsule basis.
     */
    static capsule(halfHeight, radius) {
        const shape = new Capsule(halfHeight, radius);
        return new ColliderDesc(shape);
    }
    /**
     * Creates a new segment shape.
     *
     * @param a - The first point of the segment.
     * @param b - The second point of the segment.
     */
    static segment(a, b) {
        const shape = new Segment(a, b);
        return new ColliderDesc(shape);
    }
    /**
     * Creates a new triangle shape.
     *
     * @param a - The first point of the triangle.
     * @param b - The second point of the triangle.
     * @param c - The third point of the triangle.
     */
    static triangle(a, b, c) {
        const shape = new Triangle(a, b, c);
        return new ColliderDesc(shape);
    }
    /**
     * Creates a new triangle shape with round corners.
     *
     * @param a - The first point of the triangle.
     * @param b - The second point of the triangle.
     * @param c - The third point of the triangle.
     * @param borderRadius - The radius of the borders of this triangle. In 3D,
     *   this is also equal to half the thickness of the triangle.
     */
    static roundTriangle(a, b, c, borderRadius) {
        const shape = new RoundTriangle(a, b, c, borderRadius);
        return new ColliderDesc(shape);
    }
    /**
     * Creates a new collider descriptor with a polyline shape.
     *
     * @param vertices - The coordinates of the polyline's vertices.
     * @param indices - The indices of the polyline's segments. If this is `undefined` or `null`,
     *    the vertices are assumed to describe a line strip.
     */
    static polyline(vertices, indices) {
        const shape = new Polyline(vertices, indices);
        return new ColliderDesc(shape);
    }
    /**
     * Creates a new collider descriptor with a shape made of voxels.
     *
     * @param data - Defines the set of voxels. If this is a `Int32Array` then
     *               each voxel is defined from its (signed) grid coordinates,
     *               with 3 (resp 2) contiguous integers per voxel in 3D (resp 2D).
     *               If this is a `Float32Array`, each voxel will be such that
     *               they contain at least one point from this array (where each
     *               point is defined from 3 (resp 2) contiguous numbers per point
     *               in 3D (resp 2D).
     * @param voxelSize - The size of each voxel.
     */
    static voxels(voxels, voxelSize) {
        const shape = new Voxels(voxels, voxelSize);
        return new ColliderDesc(shape);
    }
    /**
     * Creates a new collider descriptor with a triangle mesh shape.
     *
     * @param vertices - The coordinates of the triangle mesh's vertices.
     * @param indices - The indices of the triangle mesh's triangles.
     */
    static trimesh(vertices, indices, flags) {
        const shape = new TriMesh(vertices, indices, flags);
        return new ColliderDesc(shape);
    }
    // #if DIM2
    /**
     * Creates a new collider descriptor with a rectangular shape.
     *
     * @param hx - The half-width of the rectangle along its local `x` axis.
     * @param hy - The half-width of the rectangle along its local `y` axis.
     */
    static cuboid(hx, hy) {
        const shape = new Cuboid(hx, hy);
        return new ColliderDesc(shape);
    }
    /**
     * Creates a new collider descriptor with a rectangular shape with round borders.
     *
     * @param hx - The half-width of the rectangle along its local `x` axis.
     * @param hy - The half-width of the rectangle along its local `y` axis.
     * @param borderRadius - The radius of the cuboid's borders.
     */
    static roundCuboid(hx, hy, borderRadius) {
        const shape = new RoundCuboid(hx, hy, borderRadius);
        return new ColliderDesc(shape);
    }
    /**
     * Creates a new collider description with a halfspace (infinite plane) shape.
     *
     * @param normal - The outward normal of the plane.
     */
    static halfspace(normal) {
        const shape = new HalfSpace(normal);
        return new ColliderDesc(shape);
    }
    /**
     * Creates a new collider descriptor with a heightfield shape.
     *
     * @param heights - The heights of the heightfield, along its local `y` axis.
     * @param scale - The scale factor applied to the heightfield.
     */
    static heightfield(heights, scale) {
        const shape = new Heightfield(heights, scale);
        return new ColliderDesc(shape);
    }
    /**
     * Computes the convex-hull of the given points and use the resulting
     * convex polygon as the shape for this new collider descriptor.
     *
     * @param points - The point that will be used to compute the convex-hull.
     */
    static convexHull(points) {
        const shape = new ConvexPolygon(points, false);
        return new ColliderDesc(shape);
    }
    /**
     * Creates a new collider descriptor that uses the given set of points assumed
     * to form a convex polyline (no convex-hull computation will be done).
     *
     * @param vertices - The vertices of the convex polyline.
     */
    static convexPolyline(vertices) {
        const shape = new ConvexPolygon(vertices, true);
        return new ColliderDesc(shape);
    }
    /**
     * Computes the convex-hull of the given points and use the resulting
     * convex polygon as the shape for this new collider descriptor. A
     * border is added to that convex polygon to give it round corners.
     *
     * @param points - The point that will be used to compute the convex-hull.
     * @param borderRadius - The radius of the round border added to the convex polygon.
     */
    static roundConvexHull(points, borderRadius) {
        const shape = new RoundConvexPolygon(points, borderRadius, false);
        return new ColliderDesc(shape);
    }
    /**
     * Creates a new collider descriptor that uses the given set of points assumed
     * to form a round convex polyline (no convex-hull computation will be done).
     *
     * @param vertices - The vertices of the convex polyline.
     * @param borderRadius - The radius of the round border added to the convex polyline.
     */
    static roundConvexPolyline(vertices, borderRadius) {
        const shape = new RoundConvexPolygon(vertices, borderRadius, true);
        return new ColliderDesc(shape);
    }
    // #endif
    // #if DIM2
    /**
     * Sets the position of the collider to be created relative to the rigid-body it is attached to.
     */
    setTranslation(x, y) {
        if (typeof x != "number" || typeof y != "number")
            throw TypeError("The translation components must be numbers.");
        this.translation = { x: x, y: y };
        return this;
    }
    // #endif
    /**
     * Sets the rotation of the collider to be created relative to the rigid-body it is attached to.
     *
     * @param rot - The rotation of the collider to be created relative to the rigid-body it is attached to.
     */
    setRotation(rot) {
        // #if DIM2
        this.rotation = rot;
        // #endif
        return this;
    }
    /**
     * Sets whether or not the collider being created is a sensor.
     *
     * A sensor collider does not take part of the physics simulation, but generates
     * proximity events.
     *
     * @param sensor - Set to `true` of the collider built is to be a sensor.
     */
    setSensor(sensor) {
        this.isSensor = sensor;
        return this;
    }
    /**
     * Sets whether the created collider will be enabled or disabled.
     * @param enabled − If set to `false` the collider will be disabled at creation.
     */
    setEnabled(enabled) {
        this.enabled = enabled;
        return this;
    }
    /**
     * Sets the contact skin of the collider.
     *
     * The contact skin acts as if the collider was enlarged with a skin of width `skin_thickness`
     * around it, keeping objects further apart when colliding.
     *
     * A non-zero contact skin can increase performance, and in some cases, stability. However
     * it creates a small gap between colliding object (equal to the sum of their skin). If the
     * skin is sufficiently small, this might not be visually significant or can be hidden by the
     * rendering assets.
     */
    setContactSkin(thickness) {
        this.contactSkin = thickness;
        return this;
    }
    /**
     * Sets the density of the collider being built.
     *
     * The mass and angular inertia tensor will be computed automatically based on this density and the collider’s shape.
     *
     * @param density - The density to set, must be greater or equal to 0. A density of 0 means that this collider
     *                  will not affect the mass or angular inertia of the rigid-body it is attached to.
     */
    setDensity(density) {
        this.massPropsMode = MassPropsMode.Density;
        this.density = density;
        return this;
    }
    /**
     * Sets the mass of the collider being built.
     *
     * The angular inertia tensor will be computed automatically based on this mass and the collider’s shape.
     *
     * @param mass - The mass to set, must be greater or equal to 0.
     */
    setMass(mass) {
        this.massPropsMode = MassPropsMode.Mass;
        this.mass = mass;
        return this;
    }
    // #if DIM2
    /**
     * Sets the mass properties of the collider being built.
     *
     * This replaces the mass-properties automatically computed from the collider's density and shape.
     * These mass-properties will be added to the mass-properties of the rigid-body this collider will be attached to.
     *
     * @param mass − The mass of the collider to create.
     * @param centerOfMass − The center-of-mass of the collider to create.
     * @param principalAngularInertia − The principal angular inertia of the collider to create.
     */
    setMassProperties(mass, centerOfMass, principalAngularInertia) {
        this.massPropsMode = MassPropsMode.MassProps;
        this.mass = mass;
        VectorOps.copy(this.centerOfMass, centerOfMass);
        this.principalAngularInertia = principalAngularInertia;
        return this;
    }
    // #endif
    /**
     * Sets the restitution coefficient of the collider to be created.
     *
     * @param restitution - The restitution coefficient in `[0, 1]`. A value of 0 (the default) means no bouncing behavior
     *                   while 1 means perfect bouncing (though energy may still be lost due to numerical errors of the
     *                   constraints solver).
     */
    setRestitution(restitution) {
        this.restitution = restitution;
        return this;
    }
    /**
     * Sets the friction coefficient of the collider to be created.
     *
     * @param friction - The friction coefficient. Must be greater or equal to 0. This is generally smaller than 1. The
     *                   higher the coefficient, the stronger friction forces will be for contacts with the collider
     *                   being built.
     */
    setFriction(friction) {
        this.friction = friction;
        return this;
    }
    /**
     * Sets the rule used to combine the friction coefficients of two colliders
     * colliders involved in a contact.
     *
     * @param rule − The combine rule to apply.
     */
    setFrictionCombineRule(rule) {
        this.frictionCombineRule = rule;
        return this;
    }
    /**
     * Sets the rule used to combine the restitution coefficients of two colliders
     * colliders involved in a contact.
     *
     * @param rule − The combine rule to apply.
     */
    setRestitutionCombineRule(rule) {
        this.restitutionCombineRule = rule;
        return this;
    }
    /**
     * Sets the collision groups used by this collider.
     *
     * Two colliders will interact iff. their collision groups are compatible.
     * See the documentation of `InteractionGroups` for details on teh used bit pattern.
     *
     * @param groups - The collision groups used for the collider being built.
     */
    setCollisionGroups(groups) {
        this.collisionGroups = groups;
        return this;
    }
    /**
     * Sets the solver groups used by this collider.
     *
     * Forces between two colliders in contact will be computed iff their solver
     * groups are compatible.
     * See the documentation of `InteractionGroups` for details on the used bit pattern.
     *
     * @param groups - The solver groups used for the collider being built.
     */
    setSolverGroups(groups) {
        this.solverGroups = groups;
        return this;
    }
    /**
     * Set the physics hooks active for this collider.
     *
     * Use this to enable custom filtering rules for contact/intersecstion pairs involving this collider.
     *
     * @param activeHooks - The hooks active for contact/intersection pairs involving this collider.
     */
    setActiveHooks(activeHooks) {
        this.activeHooks = activeHooks;
        return this;
    }
    /**
     * Set the events active for this collider.
     *
     * Use this to enable contact and/or intersection event reporting for this collider.
     *
     * @param activeEvents - The events active for contact/intersection pairs involving this collider.
     */
    setActiveEvents(activeEvents) {
        this.activeEvents = activeEvents;
        return this;
    }
    /**
     * Set the collision types active for this collider.
     *
     * @param activeCollisionTypes - The hooks active for contact/intersection pairs involving this collider.
     */
    setActiveCollisionTypes(activeCollisionTypes) {
        this.activeCollisionTypes = activeCollisionTypes;
        return this;
    }
    /**
     * Sets the total force magnitude beyond which a contact force event can be emitted.
     *
     * @param threshold - The force threshold to set.
     */
    setContactForceEventThreshold(threshold) {
        this.contactForceEventThreshold = threshold;
        return this;
    }
}
//# sourceMappingURL=collider.js.map