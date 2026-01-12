var img = document.querySelector('img')
var i = document.querySelector('i')

img.addEventListener('dblclick', () => {
    i.style.opacity = '1'
    i.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)'
   
    
    setTimeout(() => {
        i.style.transform = 'translate(-50%, -700%) scale(1) rotate(60deg)'
    }, 600)

    setTimeout(() => {
        i.style.opacity = '0'
    }, 1000)

    setTimeout(() => {
        i.style.transform = 'translate(-50%, -50%) scale(0) rotate(-60deg)'
    }, 1200)
})