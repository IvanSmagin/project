// document.querySelector('#loc').addEventListener('click', function () {
//
//     var value = document.querySelector('input').value
//
//     localStorage.setItem('headerText', value)
// })
//
// document.addEventListener('DOMContentLoaded', function () {
//
//     var text = localStorage.getItem('headerText')
//
//     if (text && text.trim()){
//         document.querySelector('h1').textContent = text
//     }
//
// })
console.log('Hello world')

let alert = document.querySelector('#alert')

alert.addEventListener('mouseenter', function (){
    this.style.color = 'red'
    this.style.backgroundColor = 'black'
})

alert.addEventListener('mouseleave', function (){
    this.style.color = 'black'
    this.style.backgroundColor = 'transparent'
})


let incr = 10,
    decr = 10;

incr++
decr--

console.log(incr)
console.log(decr)
