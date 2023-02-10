var div = document.querySelectorAll('div')
for (var i = 0; i < div.length; i++){
    if (!div[i].style.backgroundImage.includes('catapi')){
        div[i].style.backgroundImage = 'url('+cats[Math.floor((Math.random() * 1400))]+')'
    }
}

var imgs = document.querySelectorAll('img')
imgs.forEach(img => {
  let catImage = cats[Math.floor((Math.random() * 1400))]
  img.src = catImage;
  img.srcSet = catImage;
})
