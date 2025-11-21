export function applyCustomElements(customElementsObj: Record<string, CustomElementConstructor>) {
  Object.entries(customElementsObj).forEach(([tag, element]) => {
    if (!window.customElements.get(tag)) {
      try {
        window.customElements.define(tag, element);
      } catch (error) {
        // Constructor already registered with different tag name - ignore
        console.warn(`Failed to register ${tag}:`, error);
      }
    }
  })
}
