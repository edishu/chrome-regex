chrome.runtime.onMessage.addListener(function (request, _, sendResponse) {
  const article = document.querySelector("article");
  const re = new RegExp(request.message, "g");
  const matches = article.textContent.matchAll(re);
  console.log([...matches]);
  sendResponse({ message: `response from content script ${request.message}` });
});
