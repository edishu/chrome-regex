const searchInput = document.getElementById("search");

searchInput.addEventListener("change", (e) => {
  console.log("[Popup]", e.target.value);
});
