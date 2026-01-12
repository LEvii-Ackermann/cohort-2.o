var main = document.querySelector('main')
var btn = document.querySelector('button')

const arr = ['Virat Kohli is King', 'MS is Captain Cool', 'Rohit is Hitman', 'Dhawan is Gabbar', 'Hardik is Clutch', 'ABD is Mr. 360', 'Gayle is Boss', 'Raina is Mr.IPL']

btn.addEventListener('click', () => {
    var h1 = document.createElement('h1')
    var index = Math.floor(Math.random()*arr.length)
    h1.innerHTML = arr[index]

    
    var x  = Math.floor(Math.random()*100)
    var y  = Math.floor(Math.random()*100)
    var r  = Math.floor(Math.random()*360)
    var scl = Math.floor(Math.random()*3)

    h1.style.color = 'white'
    h1.style.position = 'absolute'
    h1.style.top = x + '%'
    h1.style.left = y + '%'
    h1.style.transform = `rotate(${r}deg)`
    h1.style.scale = scl

    main.appendChild(h1)

    console.log(h1)
})
