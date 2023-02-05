const searchInput = document.getElementById("search");

searchInput.addEventListener("change", (e) => {
  (async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
    });
    console.log(e.target.value);
    const response = await chrome.tabs.sendMessage(tab.id, {
      message: e.target.value,
    });
    // do something with response here, not outside the function
    console.log("[Popup]", response);
  })();
});
