export function DecodeHtmlEntities(text: string) {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
}
