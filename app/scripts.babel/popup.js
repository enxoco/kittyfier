
    var disableButton = document.getElementById("disableButton");
    var br1 = document.getElementById("br1");
    var br2 = document.getElementById("br2");
    var disableButton = document.getElementById("disableButton");

    chrome.storage.sync.get('kitty', function(data){
      console.log(data.kitty)
      if (typeof data.kitty === 'undefined') {
        chrome.storage.sync.set({'kitty': 'false'})
        disableButton.innerText = 'Enable'
      } else {
        if (data.kitty === false){
          disableButton.innerText = 'Enable'
        } else {
          disableButton.innerText = 'Disable'
        }
      }
    })

disableButton.addEventListener('click', function(){

  chrome.storage.sync.get('kitty', function(data) {

      var enabled = (data.kitty) ? !data.kitty : 'false'
      chrome.storage.sync.set({'kitty': enabled})
    
    disableButton.innerText = (enabled) ? 'Disable' : 'Enable'
  });
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
});
})



