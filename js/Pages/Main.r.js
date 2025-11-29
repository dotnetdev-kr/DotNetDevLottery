// typescript/Pages/Main.r.ts
function clickElement(element) {
  element?.click();
}
function addDropEventToChangeInputFile(element) {
  element.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
  element.addEventListener("dragenter", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
  element.addEventListener("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const targetInputElement = element.querySelector("input[type='file']");
    if (e.dataTransfer?.files && targetInputElement) {
      const dt = new DataTransfer();
      Array.from(e.dataTransfer.files).forEach((file) => {
        dt.items.add(file);
      });
      targetInputElement.files = dt.files;
      const changeEvent = new Event("change", { bubbles: true });
      targetInputElement.dispatchEvent(changeEvent);
    }
  });
}
export {
  addDropEventToChangeInputFile,
  clickElement
};
