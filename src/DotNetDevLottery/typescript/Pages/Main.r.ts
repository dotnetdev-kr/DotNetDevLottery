export function clickElement(element: HTMLElement) {
  element?.click();
}

export function addDropEventToChangeInputFile(element: HTMLElement) {
  // Prevent default drag behaviors
  element.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
  });

  element.addEventListener('dragenter', (e) => {
    e.preventDefault();
    e.stopPropagation();
  });

  // Handle drop event
  element.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const targetInputElement: HTMLInputElement | null = element.querySelector("input[type='file']");
    if(e.dataTransfer?.files && targetInputElement) {
      const dt = new DataTransfer();
      Array.from(e.dataTransfer.files).forEach(file => {
        dt.items.add(file);
      });
      targetInputElement.files = dt.files;
      const changeEvent = new Event('change', { bubbles: true })
      targetInputElement.dispatchEvent(changeEvent);
    }
  });
}
