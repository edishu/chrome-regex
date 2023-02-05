// recursivly search for terminal leaf elementson document
// depth first search
// replace text with mark element imputed
// ?? what about inline elements are the childere?
// ?? on next search what will happen to mark element?

chrome.runtime.onMessage.addListener(function (request, _, sendResponse) {
  const h1 = document.querySelector("h1");
  const re = new RegExp(`(${request.message})`, "g");
  const newContent = h1.textContent.replaceAll(re, `<mark>$1</mark>`);
  console.log(h1.childElementCount);
  h1.innerHTML = newContent;
  sendResponse({ message: `response from content script ${request.message}` });
});

const getDisplayType = (element) => {
  const cStyle = element.currentStyle || window.getComputedStyle(element, "");
  return cStyle.display;
};

// 1. Do depth first seach to find all leaf elements of document
// 1.1 An element is leaf element if it does not has any children...
// 1.1 or all of the children are inline elements. Use getDisplayType https://stackoverflow.com/questions/2880957/detect-inline-block-type-of-a-dom-element

// Elements not eligible to searching
const excludedElements = new Set(["announcement-banner", "script"]);
const getLeafs = (node, visitedSet) => {
  // DFS to get Leaf elements
  if (visitedSet === undefined) {
    visitedSet = new Set();
  }
};
(() => {
  // Main html node
  const htmlNode = document.querySelector("html");
  const body = htmlNode.querySelector("body");

  const leafNodes = getLeafs(body);
})();

// 2. Use mark element to higlight text
// 3. Add case sensitive option
// 4. Add regex option
// 5. Dispaly number of results found on popup
// 6. Modifiy selection for currently selected
// 6.1 Add navigation to select others
