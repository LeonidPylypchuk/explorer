let btn = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let body = document.body

btn.addEventListener('click', function() {
    menu.classList.toggle('open')
    body.classList.toggle('overflow')
})
 