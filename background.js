chrome.action.onClicked.addListener(function (tab) {
    //fired when the user clicks on the ext's icon
    console.log("Extension icon clicked");    
    sendMessage();
});
function sendMessage() {
  console.log("Sending message");
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {action: "pageToSpeech"}, function(response) {});
  });
}