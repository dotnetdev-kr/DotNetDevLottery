import { RawPidController } from "../raw";
import { VectorOps } from "../math";
// TODO: unify with the JointAxesMask
/**
 * An enum representing the possible joint axes controlled by a PidController.
 * They can be ORed together, like:
 * PidAxesMask.LinX || PidAxesMask.LinY
 * to get a pid controller that only constraints the translational X and Y axes.
 *
 * Possible axes are:
 *
 * - `X`: X translation axis
 * - `Y`: Y translation axis
 * - `Z`: Z translation axis
 * - `AngX`: X angular rotation axis (3D only)
 * - `AngY`: Y angular rotation axis (3D only)
 * - `AngZ`: Z angular rotation axis
 */
export var PidAxesMask;
(function (PidAxesMask) {
    PidAxesMask[PidAxesMask["None"] = 0] = "None";
    PidAxesMask[PidAxesMask["LinX"] = 1] = "LinX";
    PidAxesMask[PidAxesMask["LinY"] = 2] = "LinY";
    PidAxesMask[PidAxesMask["LinZ"] = 4] = "LinZ";
    PidAxesMask[PidAxesMask["AngZ"] = 32] = "AngZ";
    // #if DIM2
    PidAxesMask[PidAxesMask["AllLin"] = 3] = "AllLin";
    PidAxesMask[PidAxesMask["AllAng"] = 32] = "AllAng";
    // #endif
    PidAxesMask[PidAxesMask["All"] = 35] = "All";
})(PidAxesMask || (PidAxesMask = {}));
/**
 * A controller for controlling dynamic bodies using the
 * Proportional-Integral-Derivative correction model.
 */
export class PidController {
    constructor(params, bodies, kp, ki, kd, axes) {
        this.params = params;
        this.bodies = bodies;
        this.raw = new RawPidController(kp, ki, kd, axes);
    }
    /** @internal */
    free() {
        if (!!this.raw) {
            this.raw.free();
        }
        this.raw = undefined;
    }
    setKp(kp, axes) {
        this.raw.set_kp(kp, axes);
    }
    setKi(ki, axes) {
        this.raw.set_kp(ki, axes);
    }
    setKd(kd, axes) {
        this.raw.set_kp(kd, axes);
    }
    setAxes(axes) {
        this.raw.set_axes_mask(axes);
    }
    resetIntegrals() {
        this.raw.reset_integrals();
    }
    applyLinearCorrection(body, targetPosition, targetLinvel) {
        let rawPos = VectorOps.intoRaw(targetPosition);
        let rawVel = VectorOps.intoRaw(targetLinvel);
        this.raw.apply_linear_correction(this.params.dt, this.bodies.raw, body.handle, rawPos, rawVel);
        rawPos.free();
        rawVel.free();
    }
    // #if DIM2
    applyAngularCorrection(body, targetRotation, targetAngVel) {
        this.raw.apply_angular_correction(this.params.dt, this.bodies.raw, body.handle, targetRotation, targetAngVel);
    }
    // #endif
    linearCorrection(body, targetPosition, targetLinvel) {
        let rawPos = VectorOps.intoRaw(targetPosition);
        let rawVel = VectorOps.intoRaw(targetLinvel);
        let correction = this.raw.linear_correction(this.params.dt, this.bodies.raw, body.handle, rawPos, rawVel);
        rawPos.free();
        rawVel.free();
        return VectorOps.fromRaw(correction);
    }
    // #if DIM2
    angularCorrection(body, targetRotation, targetAngVel) {
        return this.raw.angular_correction(this.params.dt, this.bodies.raw, body.handle, targetRotation, targetAngVel);
    }
}
//# sourceMappingURL=pid_controller.js.map