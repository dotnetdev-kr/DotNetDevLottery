import { RawJointAxis, RawJointType, } from "../raw";
export class MultibodyJoint {
    constructor(rawSet, handle) {
        this.rawSet = rawSet;
        this.handle = handle;
    }
    static newTyped(rawSet, handle) {
        switch (rawSet.jointType(handle)) {
            case RawJointType.Revolute:
                return new RevoluteMultibodyJoint(rawSet, handle);
            case RawJointType.Prismatic:
                return new PrismaticMultibodyJoint(rawSet, handle);
            case RawJointType.Fixed:
                return new FixedMultibodyJoint(rawSet, handle);
            default:
                return new MultibodyJoint(rawSet, handle);
        }
    }
    /**
     * Checks if this joint is still valid (i.e. that it has
     * not been deleted from the joint set yet).
     */
    isValid() {
        return this.rawSet.contains(this.handle);
    }
    // /**
    //  * The unique integer identifier of the first rigid-body this joint it attached to.
    //  */
    // public bodyHandle1(): RigidBodyHandle {
    //     return this.rawSet.jointBodyHandle1(this.handle);
    // }
    //
    // /**
    //  * The unique integer identifier of the second rigid-body this joint is attached to.
    //  */
    // public bodyHandle2(): RigidBodyHandle {
    //     return this.rawSet.jointBodyHandle2(this.handle);
    // }
    //
    // /**
    //  * The type of this joint given as a string.
    //  */
    // public type(): JointType {
    //     return this.rawSet.jointType(this.handle);
    // }
    //
    //
    //
    // /**
    //  * The position of the first anchor of this joint.
    //  *
    //  * The first anchor gives the position of the points application point on the
    //  * local frame of the first rigid-body it is attached to.
    //  */
    // public anchor1(): Vector {
    //     return VectorOps.fromRaw(this.rawSet.jointAnchor1(this.handle));
    // }
    //
    // /**
    //  * The position of the second anchor of this joint.
    //  *
    //  * The second anchor gives the position of the points application point on the
    //  * local frame of the second rigid-body it is attached to.
    //  */
    // public anchor2(): Vector {
    //     return VectorOps.fromRaw(this.rawSet.jointAnchor2(this.handle));
    // }
    /**
     * Controls whether contacts are computed between colliders attached
     * to the rigid-bodies linked by this joint.
     */
    setContactsEnabled(enabled) {
        this.rawSet.jointSetContactsEnabled(this.handle, enabled);
    }
    /**
     * Indicates if contacts are enabled between colliders attached
     * to the rigid-bodies linked by this joint.
     */
    contactsEnabled() {
        return this.rawSet.jointContactsEnabled(this.handle);
    }
}
export class UnitMultibodyJoint extends MultibodyJoint {
}
export class FixedMultibodyJoint extends MultibodyJoint {
}
export class PrismaticMultibodyJoint extends UnitMultibodyJoint {
    rawAxis() {
        return RawJointAxis.LinX;
    }
}
export class RevoluteMultibodyJoint extends UnitMultibodyJoint {
    rawAxis() {
        return RawJointAxis.AngX;
    }
}
//# sourceMappingURL=multibody_joint.js.map