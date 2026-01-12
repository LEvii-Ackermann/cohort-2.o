
var inside = document.querySelector('.inside')
var btn = document.querySelector('.btn')
var para = document.querySelector('.para')

btn.addEventListener('click', () => {
    btn.style.pointerEvents = 'none'

    let num = 0;
    var stt = setInterval(() => {
        num++
        
        para.innerHTML = num + '%';
        inside.style.width = num + '%'
        
    }, 50)

    setTimeout(() => {
        clearInterval(stt)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = '0.5'
    }, 5000)
})``