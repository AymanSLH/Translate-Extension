function OpenNewTab(info , tab) {
  // create new tab and go to googel translate
  chrome.tabs.create({
    url : "https://translate.google.com/#view=home&op=translate&sl=en&tl=ar&text=" + info.selectionText ; 
  });
}


chrome.contextMenus.create({
  title : "Arabic translate of: %s " ,
  contexts : ["selection"],
  onclick : OpenNewTab
});
