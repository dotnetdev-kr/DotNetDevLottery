import { RawVector, RawRotation } from "./raw";
/**
 * A 2D vector.
 */
export class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
export class VectorOps {
    static new(x, y) {
        return new Vector2(x, y);
    }
    static zeros() {
        return VectorOps.new(0.0, 0.0);
    }
    // FIXME: type ram: RawVector?
    static fromRaw(raw) {
        if (!raw)
            return null;
        let res = VectorOps.new(raw.x, raw.y);
        raw.free();
        return res;
    }
    static intoRaw(v) {
        return new RawVector(v.x, v.y);
    }
    static copy(out, input) {
        out.x = input.x;
        out.y = input.y;
    }
}
export class RotationOps {
    static identity() {
        return 0.0;
    }
    static fromRaw(raw) {
        if (!raw)
            return null;
        let res = raw.angle;
        raw.free();
        return res;
    }
    static intoRaw(angle) {
        return RawRotation.fromAngle(angle);
    }
}
// #endif
//# sourceMappingURL=math.js.map