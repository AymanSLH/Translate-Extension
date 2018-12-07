function OpenNewTab(info , tab) {
  
}


chrome.contextMenus.create({
  title : "Arabic translate of: %s " ,
  contexts : ["selection"],
  onclick : OpenNewTab ,
});
