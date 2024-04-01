let links = ["img/1.jpg", "img/2.jpg", "img/3.jpg"]

let slider = document.getElementById('slider')
const image = document.getElementById('image')
let controlLeft = document.getElementById('left')
let controlRight = document.getElementById('right')

let i = 0

image.src = links[i]


controlLeft.addEventListener('click', (e) => {
    e.preventDefault();
    image.src = links[i]
    i--
    if (i < 0) {
        i = links.length - 1
    }
})
controlRight.addEventListener('click', (e) => {
    e.preventDefault();
    image.src = links[i]
    i++
    if (i >= links.length) {
        i = 0
    }
})