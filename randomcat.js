const btn = document.querySelector('.button');
const newImg = document.querySelector('img');
btn.addEventListener('click', () => {
    let i = Math.floor((Math.random() * 9) + 1);
    let j = Math.floor((Math.random() * 9) + 1);
    newImg.src = `https://source.unsplash.com/random/58${i}x42${j}/?cat`
})
btn.addEventListener('click', () => {
    let r = Math.floor((Math.random() * 255) + 100);
    let g = Math.floor((Math.random() * 255) + 100);
    let b = Math.floor((Math.random() * 255) + 100);
    document.body.style.backgroundColor= `rgb(${r},${g},${b})`
})
