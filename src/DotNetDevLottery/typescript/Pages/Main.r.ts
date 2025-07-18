export function clickElement(element: HTMLElement) {
  element?.click();
}

export function addDropEventToChangeInputFile(element: HTMLElement) {
  element.addEventListener('sp-dropzone-drop', (e) => {
    const event = e as CustomEvent<DragEvent>;
    const targetInputElement: HTMLInputElement | null = element.querySelector("input[type='file']");
    if(event.detail.dataTransfer?.files && targetInputElement) {
      targetInputElement.files = event.detail.dataTransfer.files;
      const changeEvent = new Event('change')
      targetInputElement?.dispatchEvent(changeEvent);
    }
  })
}
