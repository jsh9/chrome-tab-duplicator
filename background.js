function duplicateTab(tab) {
  chrome.tabs.duplicate(tab.id);
}


chrome.action.onClicked.addListener((tab) => {
  duplicateTab(tab);
});
