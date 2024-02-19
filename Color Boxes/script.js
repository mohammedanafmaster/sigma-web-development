let container = document.querySelectorAll('.box');
let r1 = Math.floor(Math.random()*255), g1 = Math.floor(Math.random()*255), b1 = Math.floor(Math.random()*255)
let r2 = Math.floor(Math.random()*255), g2 = Math.floor(Math.random()*255), b2 = Math.floor(Math.random()*255)

container.forEach(box => {
    box.style.color = `rgb(${r1}, ${g1}, ${b1})`
    box.style.backgroundColor = `rgb(${r2}, ${g2}, ${b2})`;
})