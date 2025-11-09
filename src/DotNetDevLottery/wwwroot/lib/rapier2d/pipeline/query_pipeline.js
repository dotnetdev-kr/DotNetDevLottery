// NOTE: must match the bits in the QueryFilterFlags on the Rust side.
/**
 * Flags for excluding whole sets of colliders from a scene query.
 */
export var QueryFilterFlags;
(function (QueryFilterFlags) {
    /**
     * Exclude from the query any collider attached to a fixed rigid-body and colliders with no rigid-body attached.
     */
    QueryFilterFlags[QueryFilterFlags["EXCLUDE_FIXED"] = 1] = "EXCLUDE_FIXED";
    /**
     * Exclude from the query any collider attached to a dynamic rigid-body.
     */
    QueryFilterFlags[QueryFilterFlags["EXCLUDE_KINEMATIC"] = 2] = "EXCLUDE_KINEMATIC";
    /**
     * Exclude from the query any collider attached to a kinematic rigid-body.
     */
    QueryFilterFlags[QueryFilterFlags["EXCLUDE_DYNAMIC"] = 4] = "EXCLUDE_DYNAMIC";
    /**
     * Exclude from the query any collider that is a sensor.
     */
    QueryFilterFlags[QueryFilterFlags["EXCLUDE_SENSORS"] = 8] = "EXCLUDE_SENSORS";
    /**
     * Exclude from the query any collider that is not a sensor.
     */
    QueryFilterFlags[QueryFilterFlags["EXCLUDE_SOLIDS"] = 16] = "EXCLUDE_SOLIDS";
    /**
     * Excludes all colliders not attached to a dynamic rigid-body.
     */
    QueryFilterFlags[QueryFilterFlags["ONLY_DYNAMIC"] = 3] = "ONLY_DYNAMIC";
    /**
     * Excludes all colliders not attached to a kinematic rigid-body.
     */
    QueryFilterFlags[QueryFilterFlags["ONLY_KINEMATIC"] = 5] = "ONLY_KINEMATIC";
    /**
     * Exclude all colliders attached to a non-fixed rigid-body
     * (this will not exclude colliders not attached to any rigid-body).
     */
    QueryFilterFlags[QueryFilterFlags["ONLY_FIXED"] = 6] = "ONLY_FIXED";
})(QueryFilterFlags || (QueryFilterFlags = {}));
//# sourceMappingURL=query_pipeline.js.map