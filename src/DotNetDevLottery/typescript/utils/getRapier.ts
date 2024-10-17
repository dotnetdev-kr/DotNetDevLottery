import type * as RapierNamespace from "@dimforge/rapier2d";
export type Rapier = typeof RapierNamespace;

export {
  RapierNamespace
};

export function getRapier() {
  // eslint-disable-next-line import/no-named-as-default-member
  return /* #__PURE__ */import('@dimforge/rapier2d');
}
