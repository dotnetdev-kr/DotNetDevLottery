export function applyCustomElements(customElementsObj: Record<string, CustomElementConstructor>) {
  Object.entries(customElementsObj).forEach(([tag, element]) => {
    if(!window.customElements.get(tag)) {
      window.customElements.define(tag, element);
    }
  })
}
