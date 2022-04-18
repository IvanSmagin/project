// var div = document.getElementById('playground')
// var p = document.getElementsByClassName('text')
// var h1 = document.getElementsByTagName('h1')
// console.log(div)
// console.log(p)
// console.log(h1)


var a = document.querySelector('a')
var oldHref = a.getAttribute('href')

a.setAttribute('href', 'https://ya.ru')
a.textContent = 'Yandex'


var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')

box1.classList.add('red')

var hasClass = box2.classList.contains('blue')

console.log(hasClass)

if (hasClass) {
    box2.classList.remove('blue')
} else {
    box2.classList.add('blue')
}