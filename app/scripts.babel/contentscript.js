'use strict'; 

chrome.storage.sync.get('kitty', function(data) {
  if(data.kitty && data.kitty !== 'false'){
    var imgs = document.querySelectorAll('img');

    for (var i = 0; i < imgs.length; i++) {
      if (!imgs[i].src.includes('tumblr_')) {
        imgs[i].src = cats[Math.floor(Math.random() * 1500)];
      }
    }
    
    window.onscroll = function () {
      var images = document.getElementsByTagName('img');
    
      for (var i = 0; i < images.length; i++) {
        if (!images[i].src.includes('tumblr_')) {
          images[i].src = cats[Math.floor(Math.random() * 1500)];
        }
      }
    
      var source = document.getElementsByTagName('source');
    
      for (var i = 0; i < source.length; i++) {
        if (!source[i].srcset.includes('tumblr_')) {
          source[i].srcset = cats[Math.floor(Math.random() * 1500)];
        }
      }
    
      var lazy = document.getElementsByClassName('lazyloaded');
    
      for (var i = 0; i < lazy.length; i++) {
        if (!lazy[i].src.includes('tumblr_')) {
          lazy[i].src = cats[Math.floor(Math.random() * 1500)];
        }
      }
    };
  }
})