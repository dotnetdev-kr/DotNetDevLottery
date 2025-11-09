/* tslint:disable */
/* eslint-disable */
export function version(): string;
export function reserve_memory(extra_bytes_count: number): void;
export enum RawFeatureType {
  Vertex = 0,
  Face = 1,
  Unknown = 2,
}
export enum RawJointAxis {
  LinX = 0,
  LinY = 1,
  AngX = 2,
}
export enum RawJointType {
  Revolute = 0,
  Fixed = 1,
  Prismatic = 2,
  Rope = 3,
  Spring = 4,
  Generic = 5,
}
export enum RawMotorModel {
  AccelerationBased = 0,
  ForceBased = 1,
}
export enum RawRigidBodyType {
  Dynamic = 0,
  Fixed = 1,
  KinematicPositionBased = 2,
  KinematicVelocityBased = 3,
}
export enum RawShapeType {
  Ball = 0,
  Cuboid = 1,
  Capsule = 2,
  Segment = 3,
  Polyline = 4,
  Triangle = 5,
  TriMesh = 6,
  HeightField = 7,
  Compound = 8,
  ConvexPolygon = 9,
  RoundCuboid = 10,
  RoundTriangle = 11,
  RoundConvexPolygon = 12,
  HalfSpace = 13,
  Voxels = 14,
}
export class RawBroadPhase {
  free(): void;
  constructor();
  castRay(narrow_phase: RawNarrowPhase, bodies: RawRigidBodySet, colliders: RawColliderSet, rayOrig: RawVector, rayDir: RawVector, maxToi: number, solid: boolean, filter_flags: number, filter_groups: number | null | undefined, filter_exclude_collider: number | null | undefined, filter_exclude_rigid_body: number | null | undefined, filter_predicate: Function): RawRayColliderHit | undefined;
  castRayAndGetNormal(narrow_phase: RawNarrowPhase, bodies: RawRigidBodySet, colliders: RawColliderSet, rayOrig: RawVector, rayDir: RawVector, maxToi: number, solid: boolean, filter_flags: number, filter_groups: number | null | undefined, filter_exclude_collider: number | null | undefined, filter_exclude_rigid_body: number | null | undefined, filter_predicate: Function): RawRayColliderIntersection | undefined;
  intersectionsWithRay(narrow_phase: RawNarrowPhase, bodies: RawRigidBodySet, colliders: RawColliderSet, rayOrig: RawVector, rayDir: RawVector, maxToi: number, solid: boolean, callback: Function, filter_flags: number, filter_groups: number | null | undefined, filter_exclude_collider: number | null | undefined, filter_exclude_rigid_body: number | null | undefined, filter_predicate: Function): void;
  intersectionWithShape(narrow_phase: RawNarrowPhase, bodies: RawRigidBodySet, colliders: RawColliderSet, shapePos: RawVector, shapeRot: RawRotation, shape: RawShape, filter_flags: number, filter_groups: number | null | undefined, filter_exclude_collider: number | null | undefined, filter_exclude_rigid_body: number | null | undefined, filter_predicate: Function): number | undefined;
  projectPoint(narrow_phase: RawNarrowPhase, bodies: RawRigidBodySet, colliders: RawColliderSet, point: RawVector, solid: boolean, filter_flags: number, filter_groups: number | null | undefined, filter_exclude_collider: number | null | undefined, filter_exclude_rigid_body: number | null | undefined, filter_predicate: Function): RawPointColliderProjection | undefined;
  projectPointAndGetFeature(narrow_phase: RawNarrowPhase, bodies: RawRigidBodySet, colliders: RawColliderSet, point: RawVector, filter_flags: number, filter_groups: number | null | undefined, filter_exclude_collider: number | null | undefined, filter_exclude_rigid_body: number | null | undefined, filter_predicate: Function): RawPointColliderProjection | undefined;
  intersectionsWithPoint(narrow_phase: RawNarrowPhase, bodies: RawRigidBodySet, colliders: RawColliderSet, point: RawVector, callback: Function, filter_flags: number, filter_groups: number | null | undefined, filter_exclude_collider: number | null | undefined, filter_exclude_rigid_body: number | null | undefined, filter_predicate: Function): void;
  castShape(narrow_phase: RawNarrowPhase, bodies: RawRigidBodySet, colliders: RawColliderSet, shapePos: RawVector, shapeRot: RawRotation, shapeVel: RawVector, shape: RawShape, target_distance: number, maxToi: number, stop_at_penetration: boolean, filter_flags: number, filter_groups: number | null | undefined, filter_exclude_collider: number | null | undefined, filter_exclude_rigid_body: number | null | undefined, filter_predicate: Function): RawColliderShapeCastHit | undefined;
  intersectionsWithShape(narrow_phase: RawNarrowPhase, bodies: RawRigidBodySet, colliders: RawColliderSet, shapePos: RawVector, shapeRot: RawRotation, shape: RawShape, callback: Function, filter_flags: number, filter_groups: number | null | undefined, filter_exclude_collider: number | null | undefined, filter_exclude_rigid_body: number | null | undefined, filter_predicate: Function): void;
  collidersWithAabbIntersectingAabb(narrow_phase: RawNarrowPhase, bodies: RawRigidBodySet, colliders: RawColliderSet, aabbCenter: RawVector, aabbHalfExtents: RawVector, callback: Function): void;
}
export class RawCCDSolver {
  free(): void;
  constructor();
}
export class RawCharacterCollision {
  free(): void;
  constructor();
  handle(): number;
  translationDeltaApplied(): RawVector;
  translationDeltaRemaining(): RawVector;
  toi(): number;
  worldWitness1(): RawVector;
  worldWitness2(): RawVector;
  worldNormal1(): RawVector;
  worldNormal2(): RawVector;
}
export class RawColliderSet {
  free(): void;
  /**
   * The world-space translation of this collider.
   */
  coTranslation(handle: number): RawVector;
  /**
   * The world-space orientation of this collider.
   */
  coRotation(handle: number): RawRotation;
  /**
   * The translation of this collider relative to its parent rigid-body.
   *
   * Returns the `None` if it doesn’t have a parent.
   */
  coTranslationWrtParent(handle: number): RawVector | undefined;
  /**
   * The orientation of this collider relative to its parent rigid-body.
   *
   * Returns the `None` if it doesn’t have a parent.
   */
  coRotationWrtParent(handle: number): RawRotation | undefined;
  /**
   * Sets the translation of this collider.
   *
   * # Parameters
   * - `x`: the world-space position of the collider along the `x` axis.
   * - `y`: the world-space position of the collider along the `y` axis.
   * - `wakeUp`: forces the collider to wake-up so it is properly affected by forces if it
   * wasn't moving before modifying its position.
   */
  coSetTranslation(handle: number, x: number, y: number): void;
  coSetTranslationWrtParent(handle: number, x: number, y: number): void;
  /**
   * Sets the rotation angle of this collider.
   *
   * # Parameters
   * - `angle`: the rotation angle, in radians.
   * - `wakeUp`: forces the collider to wake-up so it is properly affected by forces if it
   * wasn't moving before modifying its position.
   */
  coSetRotation(handle: number, angle: number): void;
  coSetRotationWrtParent(handle: number, angle: number): void;
  /**
   * Is this collider a sensor?
   */
  coIsSensor(handle: number): boolean;
  /**
   * The type of the shape of this collider.
   */
  coShapeType(handle: number): RawShapeType;
  coHalfspaceNormal(handle: number): RawVector | undefined;
  /**
   * The half-extents of this collider if it is has a cuboid shape.
   */
  coHalfExtents(handle: number): RawVector | undefined;
  /**
   * Set the half-extents of this collider if it has a cuboid shape.
   */
  coSetHalfExtents(handle: number, newHalfExtents: RawVector): void;
  /**
   * The radius of this collider if it is a ball, capsule, cylinder, or cone shape.
   */
  coRadius(handle: number): number | undefined;
  /**
   * Set the radius of this collider if it is a ball, capsule, cylinder, or cone shape.
   */
  coSetRadius(handle: number, newRadius: number): void;
  /**
   * The half height of this collider if it is a capsule, cylinder, or cone shape.
   */
  coHalfHeight(handle: number): number | undefined;
  /**
   * Set the half height of this collider if it is a capsule, cylinder, or cone shape.
   */
  coSetHalfHeight(handle: number, newHalfheight: number): void;
  /**
   * The radius of the round edges of this collider.
   */
  coRoundRadius(handle: number): number | undefined;
  /**
   * Set the radius of the round edges of this collider.
   */
  coSetRoundRadius(handle: number, newBorderRadius: number): void;
  coVoxelData(handle: number): Int32Array | undefined;
  coVoxelSize(handle: number): RawVector | undefined;
  coSetVoxel(handle: number, ix: number, iy: number, filled: boolean): void;
  coPropagateVoxelChange(handle1: number, handle2: number, ix: number, iy: number, shift_x: number, shift_y: number): void;
  coCombineVoxelStates(handle1: number, handle2: number, shift_x: number, shift_y: number): void;
  /**
   * The vertices of this triangle mesh, polyline, convex polyhedron, segment, triangle or convex polyhedron, if it is one.
   */
  coVertices(handle: number): Float32Array | undefined;
  /**
   * The indices of this triangle mesh, polyline, or convex polyhedron, if it is one.
   */
  coIndices(handle: number): Uint32Array | undefined;
  coTriMeshFlags(handle: number): number | undefined;
  /**
   * The height of this heightfield if it is one.
   */
  coHeightfieldHeights(handle: number): Float32Array | undefined;
  /**
   * The scaling factor applied of this heightfield if it is one.
   */
  coHeightfieldScale(handle: number): RawVector | undefined;
  /**
   * The unique integer identifier of the collider this collider is attached to.
   */
  coParent(handle: number): number | undefined;
  coSetEnabled(handle: number, enabled: boolean): void;
  coIsEnabled(handle: number): boolean;
  coSetContactSkin(handle: number, contact_skin: number): void;
  coContactSkin(handle: number): number;
  /**
   * The friction coefficient of this collider.
   */
  coFriction(handle: number): number;
  /**
   * The restitution coefficient of this collider.
   */
  coRestitution(handle: number): number;
  /**
   * The density of this collider.
   */
  coDensity(handle: number): number;
  /**
   * The mass of this collider.
   */
  coMass(handle: number): number;
  /**
   * The volume of this collider.
   */
  coVolume(handle: number): number;
  /**
   * The collision groups of this collider.
   */
  coCollisionGroups(handle: number): number;
  /**
   * The solver groups of this collider.
   */
  coSolverGroups(handle: number): number;
  /**
   * The physics hooks enabled for this collider.
   */
  coActiveHooks(handle: number): number;
  /**
   * The collision types enabled for this collider.
   */
  coActiveCollisionTypes(handle: number): number;
  /**
   * The events enabled for this collider.
   */
  coActiveEvents(handle: number): number;
  /**
   * The total force magnitude beyond which a contact force event can be emitted.
   */
  coContactForceEventThreshold(handle: number): number;
  coContainsPoint(handle: number, point: RawVector): boolean;
  coCastShape(handle: number, colliderVel: RawVector, shape2: RawShape, shape2Pos: RawVector, shape2Rot: RawRotation, shape2Vel: RawVector, target_distance: number, maxToi: number, stop_at_penetration: boolean): RawShapeCastHit | undefined;
  coCastCollider(handle: number, collider1Vel: RawVector, collider2handle: number, collider2Vel: RawVector, target_distance: number, max_toi: number, stop_at_penetration: boolean): RawColliderShapeCastHit | undefined;
  coIntersectsShape(handle: number, shape2: RawShape, shapePos2: RawVector, shapeRot2: RawRotation): boolean;
  coContactShape(handle: number, shape2: RawShape, shapePos2: RawVector, shapeRot2: RawRotation, prediction: number): RawShapeContact | undefined;
  coContactCollider(handle: number, collider2handle: number, prediction: number): RawShapeContact | undefined;
  coProjectPoint(handle: number, point: RawVector, solid: boolean): RawPointProjection;
  coIntersectsRay(handle: number, rayOrig: RawVector, rayDir: RawVector, maxToi: number): boolean;
  coCastRay(handle: number, rayOrig: RawVector, rayDir: RawVector, maxToi: number, solid: boolean): number;
  coCastRayAndGetNormal(handle: number, rayOrig: RawVector, rayDir: RawVector, maxToi: number, solid: boolean): RawRayIntersection | undefined;
  coSetSensor(handle: number, is_sensor: boolean): void;
  coSetRestitution(handle: number, restitution: number): void;
  coSetFriction(handle: number, friction: number): void;
  coFrictionCombineRule(handle: number): number;
  coSetFrictionCombineRule(handle: number, rule: number): void;
  coRestitutionCombineRule(handle: number): number;
  coSetRestitutionCombineRule(handle: number, rule: number): void;
  coSetCollisionGroups(handle: number, groups: number): void;
  coSetSolverGroups(handle: number, groups: number): void;
  coSetActiveHooks(handle: number, hooks: number): void;
  coSetActiveEvents(handle: number, events: number): void;
  coSetActiveCollisionTypes(handle: number, types: number): void;
  coSetShape(handle: number, shape: RawShape): void;
  coSetContactForceEventThreshold(handle: number, threshold: number): void;
  coSetDensity(handle: number, density: number): void;
  coSetMass(handle: number, mass: number): void;
  coSetMassProperties(handle: number, mass: number, centerOfMass: RawVector, principalAngularInertia: number): void;
  constructor();
  len(): number;
  contains(handle: number): boolean;
  createCollider(enabled: boolean, shape: RawShape, translation: RawVector, rotation: RawRotation, massPropsMode: number, mass: number, centerOfMass: RawVector, principalAngularInertia: number, density: number, friction: number, restitution: number, frictionCombineRule: number, restitutionCombineRule: number, isSensor: boolean, collisionGroups: number, solverGroups: number, activeCollisionTypes: number, activeHooks: number, activeEvents: number, contactForceEventThreshold: number, contactSkin: number, hasParent: boolean, parent: number, bodies: RawRigidBodySet): number | undefined;
  /**
   * Removes a collider from this set and wake-up the rigid-body it is attached to.
   */
  remove(handle: number, islands: RawIslandManager, bodies: RawRigidBodySet, wakeUp: boolean): void;
  /**
   * Checks if a collider with the given integer handle exists.
   */
  isHandleValid(handle: number): boolean;
  /**
   * Applies the given JavaScript function to the integer handle of each collider managed by this collider set.
   *
   * # Parameters
   * - `f(handle)`: the function to apply to the integer handle of each collider managed by this collider set. Called as `f(handle)`.
   */
  forEachColliderHandle(f: Function): void;
}
export class RawColliderShapeCastHit {
  private constructor();
  free(): void;
  colliderHandle(): number;
  time_of_impact(): number;
  witness1(): RawVector;
  witness2(): RawVector;
  normal1(): RawVector;
  normal2(): RawVector;
}
export class RawContactForceEvent {
  private constructor();
  free(): void;
  /**
   * The first collider involved in the contact.
   */
  collider1(): number;
  /**
   * The second collider involved in the contact.
   */
  collider2(): number;
  /**
   * The sum of all the forces between the two colliders.
   */
  total_force(): RawVector;
  /**
   * The sum of the magnitudes of each force between the two colliders.
   *
   * Note that this is **not** the same as the magnitude of `self.total_force`.
   * Here we are summing the magnitude of all the forces, instead of taking
   * the magnitude of their sum.
   */
  total_force_magnitude(): number;
  /**
   * The world-space (unit) direction of the force with strongest magnitude.
   */
  max_force_direction(): RawVector;
  /**
   * The magnitude of the largest force at a contact point of this contact pair.
   */
  max_force_magnitude(): number;
}
export class RawContactManifold {
  private constructor();
  free(): void;
  normal(): RawVector;
  local_n1(): RawVector;
  local_n2(): RawVector;
  subshape1(): number;
  subshape2(): number;
  num_contacts(): number;
  contact_local_p1(i: number): RawVector | undefined;
  contact_local_p2(i: number): RawVector | undefined;
  contact_dist(i: number): number;
  contact_fid1(i: number): number;
  contact_fid2(i: number): number;
  contact_impulse(i: number): number;
  contact_tangent_impulse(i: number): number;
  num_solver_contacts(): number;
  solver_contact_point(i: number): RawVector | undefined;
  solver_contact_dist(i: number): number;
  solver_contact_friction(i: number): number;
  solver_contact_restitution(i: number): number;
  solver_contact_tangent_velocity(i: number): RawVector;
}
export class RawContactPair {
  private constructor();
  free(): void;
  collider1(): number;
  collider2(): number;
  numContactManifolds(): number;
  contactManifold(i: number): RawContactManifold | undefined;
}
export class RawDebugRenderPipeline {
  free(): void;
  constructor();
  vertices(): Float32Array;
  colors(): Float32Array;
  render(bodies: RawRigidBodySet, colliders: RawColliderSet, impulse_joints: RawImpulseJointSet, multibody_joints: RawMultibodyJointSet, narrow_phase: RawNarrowPhase, filter_flags: number, filter_predicate: Function): void;
}
export class RawDeserializedWorld {
  private constructor();
  free(): void;
  takeGravity(): RawVector | undefined;
  takeIntegrationParameters(): RawIntegrationParameters | undefined;
  takeIslandManager(): RawIslandManager | undefined;
  takeBroadPhase(): RawBroadPhase | undefined;
  takeNarrowPhase(): RawNarrowPhase | undefined;
  takeBodies(): RawRigidBodySet | undefined;
  takeColliders(): RawColliderSet | undefined;
  takeImpulseJoints(): RawImpulseJointSet | undefined;
  takeMultibodyJoints(): RawMultibodyJointSet | undefined;
}
/**
 * A structure responsible for collecting events generated
 * by the physics engine.
 */
export class RawEventQueue {
  free(): void;
  /**
   * Creates a new event collector.
   *
   * # Parameters
   * - `autoDrain`: setting this to `true` is strongly recommended. If true, the collector will
   * be automatically drained before each `world.step(collector)`. If false, the collector will
   * keep all events in memory unless it is manually drained/cleared; this may lead to unbounded use of
   * RAM if no drain is performed.
   */
  constructor(autoDrain: boolean);
  /**
   * Applies the given javascript closure on each collision event of this collector, then clear
   * the internal collision event buffer.
   *
   * # Parameters
   * - `f(handle1, handle2, started)`:  JavaScript closure applied to each collision event. The
   * closure should take three arguments: two integers representing the handles of the colliders
   * involved in the collision, and a boolean indicating if the collision started (true) or stopped
   * (false).
   */
  drainCollisionEvents(f: Function): void;
  drainContactForceEvents(f: Function): void;
  /**
   * Removes all events contained by this collector.
   */
  clear(): void;
}
export class RawGenericJoint {
  private constructor();
  free(): void;
  static spring(rest_length: number, stiffness: number, damping: number, anchor1: RawVector, anchor2: RawVector): RawGenericJoint;
  static rope(length: number, anchor1: RawVector, anchor2: RawVector): RawGenericJoint;
  /**
   * Creates a new joint descriptor that builds a Prismatic joint.
   *
   * A prismatic joint removes all the degrees of freedom between the
   * affected bodies, except for the translation along one axis.
   *
   * Returns `None` if any of the provided axes cannot be normalized.
   */
  static prismatic(anchor1: RawVector, anchor2: RawVector, axis: RawVector, limitsEnabled: boolean, limitsMin: number, limitsMax: number): RawGenericJoint | undefined;
  /**
   * Creates a new joint descriptor that builds a Fixed joint.
   *
   * A fixed joint removes all the degrees of freedom between the affected bodies.
   */
  static fixed(anchor1: RawVector, axes1: RawRotation, anchor2: RawVector, axes2: RawRotation): RawGenericJoint;
  /**
   * Create a new joint descriptor that builds Revolute joints.
   *
   * A revolute joint removes all degrees of freedom between the affected
   * bodies except for the rotation.
   */
  static revolute(anchor1: RawVector, anchor2: RawVector): RawGenericJoint | undefined;
}
export class RawImpulseJointSet {
  free(): void;
  /**
   * The type of this joint.
   */
  jointType(handle: number): RawJointType;
  /**
   * The unique integer identifier of the first rigid-body this joint it attached to.
   */
  jointBodyHandle1(handle: number): number;
  /**
   * The unique integer identifier of the second rigid-body this joint is attached to.
   */
  jointBodyHandle2(handle: number): number;
  /**
   * The angular part of the joint’s local frame relative to the first rigid-body it is attached to.
   */
  jointFrameX1(handle: number): RawRotation;
  /**
   * The angular part of the joint’s local frame relative to the second rigid-body it is attached to.
   */
  jointFrameX2(handle: number): RawRotation;
  /**
   * The position of the first anchor of this joint.
   *
   * The first anchor gives the position of the points application point on the
   * local frame of the first rigid-body it is attached to.
   */
  jointAnchor1(handle: number): RawVector;
  /**
   * The position of the second anchor of this joint.
   *
   * The second anchor gives the position of the points application point on the
   * local frame of the second rigid-body it is attached to.
   */
  jointAnchor2(handle: number): RawVector;
  /**
   * Sets the position of the first local anchor
   */
  jointSetAnchor1(handle: number, newPos: RawVector): void;
  /**
   * Sets the position of the second local anchor
   */
  jointSetAnchor2(handle: number, newPos: RawVector): void;
  /**
   * Are contacts between the rigid-bodies attached by this joint enabled?
   */
  jointContactsEnabled(handle: number): boolean;
  /**
   * Sets whether contacts are enabled between the rigid-bodies attached by this joint.
   */
  jointSetContactsEnabled(handle: number, enabled: boolean): void;
  /**
   * Are the limits for this joint enabled?
   */
  jointLimitsEnabled(handle: number, axis: RawJointAxis): boolean;
  /**
   * Return the lower limit along the given joint axis.
   */
  jointLimitsMin(handle: number, axis: RawJointAxis): number;
  /**
   * If this is a prismatic joint, returns its upper limit.
   */
  jointLimitsMax(handle: number, axis: RawJointAxis): number;
  /**
   * Enables and sets the joint limits
   */
  jointSetLimits(handle: number, axis: RawJointAxis, min: number, max: number): void;
  jointConfigureMotorModel(handle: number, axis: RawJointAxis, model: RawMotorModel): void;
  jointConfigureMotorVelocity(handle: number, axis: RawJointAxis, targetVel: number, factor: number): void;
  jointConfigureMotorPosition(handle: number, axis: RawJointAxis, targetPos: number, stiffness: number, damping: number): void;
  jointConfigureMotor(handle: number, axis: RawJointAxis, targetPos: number, targetVel: number, stiffness: number, damping: number): void;
  constructor();
  createJoint(params: RawGenericJoint, parent1: number, parent2: number, wake_up: boolean): number;
  remove(handle: number, wakeUp: boolean): void;
  len(): number;
  contains(handle: number): boolean;
  /**
   * Applies the given JavaScript function to the integer handle of each joint managed by this physics world.
   *
   * # Parameters
   * - `f(handle)`: the function to apply to the integer handle of each joint managed by this set. Called as `f(collider)`.
   */
  forEachJointHandle(f: Function): void;
  /**
   * Applies the given JavaScript function to the integer handle of each joint attached to the given rigid-body.
   *
   * # Parameters
   * - `f(handle)`: the function to apply to the integer handle of each joint attached to the rigid-body. Called as `f(collider)`.
   */
  forEachJointAttachedToRigidBody(body: number, f: Function): void;
}
export class RawIntegrationParameters {
  free(): void;
  constructor();
  dt: number;
  readonly contact_erp: number;
  normalizedAllowedLinearError: number;
  normalizedPredictionDistance: number;
  numSolverIterations: number;
  numInternalPgsIterations: number;
  minIslandSize: number;
  maxCcdSubsteps: number;
  lengthUnit: number;
  set contact_natural_frequency(value: number);
}
export class RawIslandManager {
  free(): void;
  constructor();
  /**
   * Applies the given JavaScript function to the integer handle of each active rigid-body
   * managed by this island manager.
   *
   * After a short time of inactivity, a rigid-body is automatically deactivated ("asleep") by
   * the physics engine in order to save computational power. A sleeping rigid-body never moves
   * unless it is moved manually by the user.
   *
   * # Parameters
   * - `f(handle)`: the function to apply to the integer handle of each active rigid-body managed by this
   *   set. Called as `f(collider)`.
   */
  forEachActiveRigidBodyHandle(f: Function): void;
}
export class RawKinematicCharacterController {
  free(): void;
  constructor(offset: number);
  up(): RawVector;
  setUp(vector: RawVector): void;
  normalNudgeFactor(): number;
  setNormalNudgeFactor(value: number): void;
  offset(): number;
  setOffset(value: number): void;
  slideEnabled(): boolean;
  setSlideEnabled(enabled: boolean): void;
  autostepMaxHeight(): number | undefined;
  autostepMinWidth(): number | undefined;
  autostepIncludesDynamicBodies(): boolean | undefined;
  autostepEnabled(): boolean;
  enableAutostep(maxHeight: number, minWidth: number, includeDynamicBodies: boolean): void;
  disableAutostep(): void;
  maxSlopeClimbAngle(): number;
  setMaxSlopeClimbAngle(angle: number): void;
  minSlopeSlideAngle(): number;
  setMinSlopeSlideAngle(angle: number): void;
  snapToGroundDistance(): number | undefined;
  enableSnapToGround(distance: number): void;
  disableSnapToGround(): void;
  snapToGroundEnabled(): boolean;
  computeColliderMovement(dt: number, broad_phase: RawBroadPhase, narrow_phase: RawNarrowPhase, bodies: RawRigidBodySet, colliders: RawColliderSet, collider_handle: number, desired_translation_delta: RawVector, apply_impulses_to_dynamic_bodies: boolean, character_mass: number | null | undefined, filter_flags: number, filter_groups: number | null | undefined, filter_predicate: Function): void;
  computedMovement(): RawVector;
  computedGrounded(): boolean;
  numComputedCollisions(): number;
  computedCollision(i: number, collision: RawCharacterCollision): boolean;
}
export class RawMultibodyJointSet {
  free(): void;
  /**
   * The type of this joint.
   */
  jointType(handle: number): RawJointType;
  /**
   * The angular part of the joint’s local frame relative to the first rigid-body it is attached to.
   */
  jointFrameX1(handle: number): RawRotation;
  /**
   * The angular part of the joint’s local frame relative to the second rigid-body it is attached to.
   */
  jointFrameX2(handle: number): RawRotation;
  /**
   * The position of the first anchor of this joint.
   *
   * The first anchor gives the position of the points application point on the
   * local frame of the first rigid-body it is attached to.
   */
  jointAnchor1(handle: number): RawVector;
  /**
   * The position of the second anchor of this joint.
   *
   * The second anchor gives the position of the points application point on the
   * local frame of the second rigid-body it is attached to.
   */
  jointAnchor2(handle: number): RawVector;
  /**
   * Are contacts between the rigid-bodies attached by this joint enabled?
   */
  jointContactsEnabled(handle: number): boolean;
  /**
   * Sets whether contacts are enabled between the rigid-bodies attached by this joint.
   */
  jointSetContactsEnabled(handle: number, enabled: boolean): void;
  /**
   * Are the limits for this joint enabled?
   */
  jointLimitsEnabled(handle: number, axis: RawJointAxis): boolean;
  /**
   * Return the lower limit along the given joint axis.
   */
  jointLimitsMin(handle: number, axis: RawJointAxis): number;
  /**
   * If this is a prismatic joint, returns its upper limit.
   */
  jointLimitsMax(handle: number, axis: RawJointAxis): number;
  constructor();
  createJoint(params: RawGenericJoint, parent1: number, parent2: number, wakeUp: boolean): number;
  remove(handle: number, wakeUp: boolean): void;
  contains(handle: number): boolean;
  /**
   * Applies the given JavaScript function to the integer handle of each joint managed by this physics world.
   *
   * # Parameters
   * - `f(handle)`: the function to apply to the integer handle of each joint managed by this set. Called as `f(collider)`.
   */
  forEachJointHandle(f: Function): void;
  /**
   * Applies the given JavaScript function to the integer handle of each joint attached to the given rigid-body.
   *
   * # Parameters
   * - `f(handle)`: the function to apply to the integer handle of each joint attached to the rigid-body. Called as `f(collider)`.
   */
  forEachJointAttachedToRigidBody(body: number, f: Function): void;
}
export class RawNarrowPhase {
  free(): void;
  constructor();
  contact_pairs_with(handle1: number, f: Function): void;
  contact_pair(handle1: number, handle2: number): RawContactPair | undefined;
  intersection_pairs_with(handle1: number, f: Function): void;
  intersection_pair(handle1: number, handle2: number): boolean;
}
export class RawPhysicsPipeline {
  free(): void;
  constructor();
  set_profiler_enabled(enabled: boolean): void;
  is_profiler_enabled(): boolean;
  timing_step(): number;
  timing_collision_detection(): number;
  timing_broad_phase(): number;
  timing_narrow_phase(): number;
  timing_solver(): number;
  timing_velocity_assembly(): number;
  timing_velocity_resolution(): number;
  timing_velocity_update(): number;
  timing_velocity_writeback(): number;
  timing_ccd(): number;
  timing_ccd_toi_computation(): number;
  timing_ccd_broad_phase(): number;
  timing_ccd_narrow_phase(): number;
  timing_ccd_solver(): number;
  timing_island_construction(): number;
  timing_user_changes(): number;
  step(gravity: RawVector, integrationParameters: RawIntegrationParameters, islands: RawIslandManager, broadPhase: RawBroadPhase, narrowPhase: RawNarrowPhase, bodies: RawRigidBodySet, colliders: RawColliderSet, joints: RawImpulseJointSet, articulations: RawMultibodyJointSet, ccd_solver: RawCCDSolver): void;
  stepWithEvents(gravity: RawVector, integrationParameters: RawIntegrationParameters, islands: RawIslandManager, broadPhase: RawBroadPhase, narrowPhase: RawNarrowPhase, bodies: RawRigidBodySet, colliders: RawColliderSet, joints: RawImpulseJointSet, articulations: RawMultibodyJointSet, ccd_solver: RawCCDSolver, eventQueue: RawEventQueue, hookObject: object, hookFilterContactPair: Function, hookFilterIntersectionPair: Function): void;
}
export class RawPidController {
  free(): void;
  constructor(kp: number, ki: number, kd: number, axes_mask: number);
  set_kp(kp: number, axes: number): void;
  set_ki(ki: number, axes: number): void;
  set_kd(kd: number, axes: number): void;
  set_axes_mask(axes_mask: number): void;
  reset_integrals(): void;
  apply_linear_correction(dt: number, bodies: RawRigidBodySet, rb_handle: number, target_translation: RawVector, target_linvel: RawVector): void;
  apply_angular_correction(dt: number, bodies: RawRigidBodySet, rb_handle: number, target_rotation: number, target_angvel: number): void;
  linear_correction(dt: number, bodies: RawRigidBodySet, rb_handle: number, target_translation: RawVector, target_linvel: RawVector): RawVector;
  angular_correction(dt: number, bodies: RawRigidBodySet, rb_handle: number, target_rotation: number, target_angvel: number): number;
}
export class RawPointColliderProjection {
  private constructor();
  free(): void;
  colliderHandle(): number;
  point(): RawVector;
  isInside(): boolean;
  featureType(): RawFeatureType;
  featureId(): number | undefined;
}
export class RawPointProjection {
  private constructor();
  free(): void;
  point(): RawVector;
  isInside(): boolean;
}
export class RawRayColliderHit {
  private constructor();
  free(): void;
  colliderHandle(): number;
  timeOfImpact(): number;
}
export class RawRayColliderIntersection {
  private constructor();
  free(): void;
  colliderHandle(): number;
  normal(): RawVector;
  time_of_impact(): number;
  featureType(): RawFeatureType;
  featureId(): number | undefined;
}
export class RawRayIntersection {
  private constructor();
  free(): void;
  normal(): RawVector;
  time_of_impact(): number;
  featureType(): RawFeatureType;
  featureId(): number | undefined;
}
export class RawRigidBodySet {
  free(): void;
  /**
   * The world-space translation of this rigid-body.
   */
  rbTranslation(handle: number): RawVector;
  /**
   * The world-space orientation of this rigid-body.
   */
  rbRotation(handle: number): RawRotation;
  /**
   * Put the given rigid-body to sleep.
   */
  rbSleep(handle: number): void;
  /**
   * Is this rigid-body sleeping?
   */
  rbIsSleeping(handle: number): boolean;
  /**
   * Is the velocity of this rigid-body not zero?
   */
  rbIsMoving(handle: number): boolean;
  /**
   * The world-space predicted translation of this rigid-body.
   *
   * If this rigid-body is kinematic this value is set by the `setNextKinematicTranslation`
   * method and is used for estimating the kinematic body velocity at the next timestep.
   * For non-kinematic bodies, this value is currently unspecified.
   */
  rbNextTranslation(handle: number): RawVector;
  /**
   * The world-space predicted orientation of this rigid-body.
   *
   * If this rigid-body is kinematic this value is set by the `setNextKinematicRotation`
   * method and is used for estimating the kinematic body velocity at the next timestep.
   * For non-kinematic bodies, this value is currently unspecified.
   */
  rbNextRotation(handle: number): RawRotation;
  /**
   * Sets the translation of this rigid-body.
   *
   * # Parameters
   * - `x`: the world-space position of the rigid-body along the `x` axis.
   * - `y`: the world-space position of the rigid-body along the `y` axis.
   * - `wakeUp`: forces the rigid-body to wake-up so it is properly affected by forces if it
   * wasn't moving before modifying its position.
   */
  rbSetTranslation(handle: number, x: number, y: number, wakeUp: boolean): void;
  /**
   * Sets the rotation angle of this rigid-body.
   *
   * # Parameters
   * - `angle`: the rotation angle, in radians.
   * - `wakeUp`: forces the rigid-body to wake-up so it is properly affected by forces if it
   * wasn't moving before modifying its position.
   */
  rbSetRotation(handle: number, angle: number, wakeUp: boolean): void;
  /**
   * Sets the linear velocity of this rigid-body.
   */
  rbSetLinvel(handle: number, linvel: RawVector, wakeUp: boolean): void;
  /**
   * Sets the angular velocity of this rigid-body.
   */
  rbSetAngvel(handle: number, angvel: number, wakeUp: boolean): void;
  /**
   * If this rigid body is kinematic, sets its future translation after the next timestep integration.
   *
   * This should be used instead of `rigidBody.setTranslation` to make the dynamic object
   * interacting with this kinematic body behave as expected. Internally, Rapier will compute
   * an artificial velocity for this rigid-body from its current position and its next kinematic
   * position. This velocity will be used to compute forces on dynamic bodies interacting with
   * this body.
   *
   * # Parameters
   * - `x`: the world-space position of the rigid-body along the `x` axis.
   * - `y`: the world-space position of the rigid-body along the `y` axis.
   */
  rbSetNextKinematicTranslation(handle: number, x: number, y: number): void;
  /**
   * If this rigid body is kinematic, sets its future rotation after the next timestep integration.
   *
   * This should be used instead of `rigidBody.setRotation` to make the dynamic object
   * interacting with this kinematic body behave as expected. Internally, Rapier will compute
   * an artificial velocity for this rigid-body from its current position and its next kinematic
   * position. This velocity will be used to compute forces on dynamic bodies interacting with
   * this body.
   *
   * # Parameters
   * - `angle`: the rotation angle, in radians.
   */
  rbSetNextKinematicRotation(handle: number, angle: number): void;
  rbRecomputeMassPropertiesFromColliders(handle: number, colliders: RawColliderSet): void;
  rbSetAdditionalMass(handle: number, mass: number, wake_up: boolean): void;
  rbSetAdditionalMassProperties(handle: number, mass: number, centerOfMass: RawVector, principalAngularInertia: number, wake_up: boolean): void;
  /**
   * The linear velocity of this rigid-body.
   */
  rbLinvel(handle: number): RawVector;
  /**
   * The angular velocity of this rigid-body.
   */
  rbAngvel(handle: number): number;
  /**
   * The velocity of the given world-space point on this rigid-body.
   */
  rbVelocityAtPoint(handle: number, point: RawVector): RawVector;
  rbLockTranslations(handle: number, locked: boolean, wake_up: boolean): void;
  rbSetEnabledTranslations(handle: number, allow_x: boolean, allow_y: boolean, wake_up: boolean): void;
  rbLockRotations(handle: number, locked: boolean, wake_up: boolean): void;
  rbDominanceGroup(handle: number): number;
  rbSetDominanceGroup(handle: number, group: number): void;
  rbEnableCcd(handle: number, enabled: boolean): void;
  rbSetSoftCcdPrediction(handle: number, prediction: number): void;
  /**
   * The mass of this rigid-body.
   */
  rbMass(handle: number): number;
  /**
   * The inverse of the mass of a rigid-body.
   *
   * If this is zero, the rigid-body is assumed to have infinite mass.
   */
  rbInvMass(handle: number): number;
  /**
   * The inverse mass taking into account translation locking.
   */
  rbEffectiveInvMass(handle: number): RawVector;
  /**
   * The center of mass of a rigid-body expressed in its local-space.
   */
  rbLocalCom(handle: number): RawVector;
  /**
   * The world-space center of mass of the rigid-body.
   */
  rbWorldCom(handle: number): RawVector;
  /**
   * The inverse of the principal angular inertia of the rigid-body.
   *
   * Components set to zero are assumed to be infinite along the corresponding principal axis.
   */
  rbInvPrincipalInertia(handle: number): number;
  /**
   * The angular inertia along the principal inertia axes of the rigid-body.
   */
  rbPrincipalInertia(handle: number): number;
  /**
   * The world-space inverse angular inertia tensor of the rigid-body,
   * taking into account rotation locking.
   */
  rbEffectiveWorldInvInertia(handle: number): number;
  /**
   * The effective world-space angular inertia (that takes the potential rotation locking into account) of
   * this rigid-body.
   */
  rbEffectiveAngularInertia(handle: number): number;
  /**
   * Wakes this rigid-body up.
   *
   * A dynamic rigid-body that does not move during several consecutive frames will
   * be put to sleep by the physics engine, i.e., it will stop being simulated in order
   * to avoid useless computations.
   * This method forces a sleeping rigid-body to wake-up. This is useful, e.g., before modifying
   * the position of a dynamic body so that it is properly simulated afterwards.
   */
  rbWakeUp(handle: number): void;
  /**
   * Is Continuous Collision Detection enabled for this rigid-body?
   */
  rbIsCcdEnabled(handle: number): boolean;
  rbSoftCcdPrediction(handle: number): number;
  /**
   * The number of colliders attached to this rigid-body.
   */
  rbNumColliders(handle: number): number;
  /**
   * Retrieves the `i-th` collider attached to this rigid-body.
   *
   * # Parameters
   * - `at`: The index of the collider to retrieve. Must be a number in `[0, this.numColliders()[`.
   *         This index is **not** the same as the unique identifier of the collider.
   */
  rbCollider(handle: number, at: number): number;
  /**
   * The status of this rigid-body: fixed, dynamic, or kinematic.
   */
  rbBodyType(handle: number): RawRigidBodyType;
  /**
   * Set a new status for this rigid-body: fixed, dynamic, or kinematic.
   */
  rbSetBodyType(handle: number, status: RawRigidBodyType, wake_up: boolean): void;
  /**
   * Is this rigid-body fixed?
   */
  rbIsFixed(handle: number): boolean;
  /**
   * Is this rigid-body kinematic?
   */
  rbIsKinematic(handle: number): boolean;
  /**
   * Is this rigid-body dynamic?
   */
  rbIsDynamic(handle: number): boolean;
  /**
   * The linear damping coefficient of this rigid-body.
   */
  rbLinearDamping(handle: number): number;
  /**
   * The angular damping coefficient of this rigid-body.
   */
  rbAngularDamping(handle: number): number;
  rbSetLinearDamping(handle: number, factor: number): void;
  rbSetAngularDamping(handle: number, factor: number): void;
  rbSetEnabled(handle: number, enabled: boolean): void;
  rbIsEnabled(handle: number): boolean;
  rbGravityScale(handle: number): number;
  rbSetGravityScale(handle: number, factor: number, wakeUp: boolean): void;
  /**
   * Resets to zero all user-added forces added to this rigid-body.
   */
  rbResetForces(handle: number, wakeUp: boolean): void;
  /**
   * Resets to zero all user-added torques added to this rigid-body.
   */
  rbResetTorques(handle: number, wakeUp: boolean): void;
  /**
   * Adds a force at the center-of-mass of this rigid-body.
   *
   * # Parameters
   * - `force`: the world-space force to apply on the rigid-body.
   * - `wakeUp`: should the rigid-body be automatically woken-up?
   */
  rbAddForce(handle: number, force: RawVector, wakeUp: boolean): void;
  /**
   * Applies an impulse at the center-of-mass of this rigid-body.
   *
   * # Parameters
   * - `impulse`: the world-space impulse to apply on the rigid-body.
   * - `wakeUp`: should the rigid-body be automatically woken-up?
   */
  rbApplyImpulse(handle: number, impulse: RawVector, wakeUp: boolean): void;
  /**
   * Adds a torque at the center-of-mass of this rigid-body.
   *
   * # Parameters
   * - `torque`: the torque to apply on the rigid-body.
   * - `wakeUp`: should the rigid-body be automatically woken-up?
   */
  rbAddTorque(handle: number, torque: number, wakeUp: boolean): void;
  /**
   * Applies an impulsive torque at the center-of-mass of this rigid-body.
   *
   * # Parameters
   * - `torque impulse`: the torque impulse to apply on the rigid-body.
   * - `wakeUp`: should the rigid-body be automatically woken-up?
   */
  rbApplyTorqueImpulse(handle: number, torque_impulse: number, wakeUp: boolean): void;
  /**
   * Adds a force at the given world-space point of this rigid-body.
   *
   * # Parameters
   * - `force`: the world-space force to apply on the rigid-body.
   * - `point`: the world-space point where the impulse is to be applied on the rigid-body.
   * - `wakeUp`: should the rigid-body be automatically woken-up?
   */
  rbAddForceAtPoint(handle: number, force: RawVector, point: RawVector, wakeUp: boolean): void;
  /**
   * Applies an impulse at the given world-space point of this rigid-body.
   *
   * # Parameters
   * - `impulse`: the world-space impulse to apply on the rigid-body.
   * - `point`: the world-space point where the impulse is to be applied on the rigid-body.
   * - `wakeUp`: should the rigid-body be automatically woken-up?
   */
  rbApplyImpulseAtPoint(handle: number, impulse: RawVector, point: RawVector, wakeUp: boolean): void;
  rbAdditionalSolverIterations(handle: number): number;
  rbSetAdditionalSolverIterations(handle: number, iters: number): void;
  /**
   * An arbitrary user-defined 32-bit integer
   */
  rbUserData(handle: number): number;
  /**
   * Sets the user-defined 32-bit integer of this rigid-body.
   *
   * # Parameters
   * - `data`: an arbitrary user-defined 32-bit integer.
   */
  rbSetUserData(handle: number, data: number): void;
  /**
   * Retrieves the constant force(s) the user added to this rigid-body.
   * Returns zero if the rigid-body is not dynamic.
   */
  rbUserForce(handle: number): RawVector;
  /**
   * Retrieves the constant torque(s) the user added to this rigid-body.
   * Returns zero if the rigid-body is not dynamic.
   */
  rbUserTorque(handle: number): number;
  constructor();
  createRigidBody(enabled: boolean, translation: RawVector, rotation: RawRotation, gravityScale: number, mass: number, massOnly: boolean, centerOfMass: RawVector, linvel: RawVector, angvel: number, principalAngularInertia: number, translationEnabledX: boolean, translationEnabledY: boolean, rotationsEnabled: boolean, linearDamping: number, angularDamping: number, rb_type: RawRigidBodyType, canSleep: boolean, sleeping: boolean, softCcdPrediciton: number, ccdEnabled: boolean, dominanceGroup: number, additional_solver_iterations: number): number;
  remove(handle: number, islands: RawIslandManager, colliders: RawColliderSet, joints: RawImpulseJointSet, articulations: RawMultibodyJointSet): void;
  /**
   * The number of rigid-bodies on this set.
   */
  len(): number;
  /**
   * Checks if a rigid-body with the given integer handle exists.
   */
  contains(handle: number): boolean;
  /**
   * Applies the given JavaScript function to the integer handle of each rigid-body managed by this set.
   *
   * # Parameters
   * - `f(handle)`: the function to apply to the integer handle of each rigid-body managed by this set. Called as `f(collider)`.
   */
  forEachRigidBodyHandle(f: Function): void;
  propagateModifiedBodyPositionsToColliders(colliders: RawColliderSet): void;
}
/**
 * A rotation quaternion.
 */
export class RawRotation {
  private constructor();
  free(): void;
  /**
   * The identity rotation.
   */
  static identity(): RawRotation;
  /**
   * The rotation with thegiven angle.
   */
  static fromAngle(angle: number): RawRotation;
  /**
   * The imaginary part of this complex number.
   */
  readonly im: number;
  /**
   * The real part of this complex number.
   */
  readonly re: number;
  /**
   * The rotation angle in radians.
   */
  readonly angle: number;
}
export class RawSerializationPipeline {
  free(): void;
  constructor();
  serializeAll(gravity: RawVector, integrationParameters: RawIntegrationParameters, islands: RawIslandManager, broadPhase: RawBroadPhase, narrowPhase: RawNarrowPhase, bodies: RawRigidBodySet, colliders: RawColliderSet, impulse_joints: RawImpulseJointSet, multibody_joints: RawMultibodyJointSet): Uint8Array | undefined;
  deserializeAll(data: Uint8Array): RawDeserializedWorld | undefined;
}
export class RawShape {
  private constructor();
  free(): void;
  static cuboid(hx: number, hy: number): RawShape;
  static roundCuboid(hx: number, hy: number, borderRadius: number): RawShape;
  static ball(radius: number): RawShape;
  static halfspace(normal: RawVector): RawShape;
  static capsule(halfHeight: number, radius: number): RawShape;
  static voxels(voxel_size: RawVector, grid_coords: Int32Array): RawShape;
  static voxelsFromPoints(voxel_size: RawVector, points: Float32Array): RawShape;
  static polyline(vertices: Float32Array, indices: Uint32Array): RawShape;
  static trimesh(vertices: Float32Array, indices: Uint32Array, flags: number): RawShape | undefined;
  static heightfield(heights: Float32Array, scale: RawVector): RawShape;
  static segment(p1: RawVector, p2: RawVector): RawShape;
  static triangle(p1: RawVector, p2: RawVector, p3: RawVector): RawShape;
  static roundTriangle(p1: RawVector, p2: RawVector, p3: RawVector, borderRadius: number): RawShape;
  static convexHull(points: Float32Array): RawShape | undefined;
  static roundConvexHull(points: Float32Array, borderRadius: number): RawShape | undefined;
  static convexPolyline(vertices: Float32Array): RawShape | undefined;
  static roundConvexPolyline(vertices: Float32Array, borderRadius: number): RawShape | undefined;
  castShape(shapePos1: RawVector, shapeRot1: RawRotation, shapeVel1: RawVector, shape2: RawShape, shapePos2: RawVector, shapeRot2: RawRotation, shapeVel2: RawVector, target_distance: number, maxToi: number, stop_at_penetration: boolean): RawShapeCastHit | undefined;
  intersectsShape(shapePos1: RawVector, shapeRot1: RawRotation, shape2: RawShape, shapePos2: RawVector, shapeRot2: RawRotation): boolean;
  contactShape(shapePos1: RawVector, shapeRot1: RawRotation, shape2: RawShape, shapePos2: RawVector, shapeRot2: RawRotation, prediction: number): RawShapeContact | undefined;
  containsPoint(shapePos: RawVector, shapeRot: RawRotation, point: RawVector): boolean;
  projectPoint(shapePos: RawVector, shapeRot: RawRotation, point: RawVector, solid: boolean): RawPointProjection;
  intersectsRay(shapePos: RawVector, shapeRot: RawRotation, rayOrig: RawVector, rayDir: RawVector, maxToi: number): boolean;
  castRay(shapePos: RawVector, shapeRot: RawRotation, rayOrig: RawVector, rayDir: RawVector, maxToi: number, solid: boolean): number;
  castRayAndGetNormal(shapePos: RawVector, shapeRot: RawRotation, rayOrig: RawVector, rayDir: RawVector, maxToi: number, solid: boolean): RawRayIntersection | undefined;
}
export class RawShapeCastHit {
  private constructor();
  free(): void;
  time_of_impact(): number;
  witness1(): RawVector;
  witness2(): RawVector;
  normal1(): RawVector;
  normal2(): RawVector;
}
export class RawShapeContact {
  private constructor();
  free(): void;
  distance(): number;
  point1(): RawVector;
  point2(): RawVector;
  normal1(): RawVector;
  normal2(): RawVector;
}
/**
 * A vector.
 */
export class RawVector {
  free(): void;
  /**
   * Creates a new vector filled with zeros.
   */
  static zero(): RawVector;
  /**
   * Creates a new 2D vector from its two components.
   *
   * # Parameters
   * - `x`: the `x` component of this 2D vector.
   * - `y`: the `y` component of this 2D vector.
   */
  constructor(x: number, y: number);
  /**
   * Create a new 2D vector from this vector with its components rearranged as `{x, y}`.
   */
  xy(): RawVector;
  /**
   * Create a new 2D vector from this vector with its components rearranged as `{y, x}`.
   */
  yx(): RawVector;
  /**
   * The `x` component of this vector.
   */
  x: number;
  /**
   * The `y` component of this vector.
   */
  y: number;
}
