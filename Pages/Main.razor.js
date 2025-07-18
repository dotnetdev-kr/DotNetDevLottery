// typescript/Pages/Main.razor.ts
function clickElement(element) {
  element?.click();
}
function addDropEventToChangeInputFile(element) {
  element.addEventListener("sp-dropzone-drop", (e) => {
    const event = e;
    const targetInputElement = element.querySelector("input[type='file']");
    if (event.detail.dataTransfer?.files && targetInputElement) {
      targetInputElement.files = event.detail.dataTransfer.files;
      const changeEvent = new Event("change");
      targetInputElement?.dispatchEvent(changeEvent);
    }
  });
}
export {
  addDropEventToChangeInputFile,
  clickElement
};
