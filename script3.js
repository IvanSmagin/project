// var button = document.querySelector('button')
// var h1 = document.querySelector('h1')
// var input = document.querySelector('input')
//
//
// function buttonHandler(){
//     console.log('clicked')
//     h1.textContent = input.value
// }
//
//
// h1.addEventListener('mouseenter', function (){
//     this.style.color = 'red'
//     this.style.backgroundColor = 'black'
// })
//
// h1.addEventListener('mouseleave', function (){
//     this.style.color = 'black'
//     this.style.backgroundColor = 'transparent'
// })
//
// button.addEventListener('click', buttonHandler)


// var divs = document.querySelectorAll('div')
// var link = document.querySelector('a')
//
// for(var i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click', function (event){
//         event.stopPropagation()
//         console.log(this.getAttribute('id'))
//     })
// }
//
// link.addEventListener('click', handLink)
//
// function handLink (event) {
//     event.preventDefault()
//     var div = divs[0]
//
//     if (div.style.display == 'none') {
//         div.style.display = 'flex'
//     } else {
//         div.style.display = 'none'
//     }
//     console.log(div.style.display)
// }

// var p = document.querySelectorAll('p')
//
// for (var i = 0; i < p.length; i++) {
//     p[i].addEventListener('click', function (event){
//         event.target.style.color = 'blue'
//     })
// }

// document.getElementById('wrap').addEventListener('click', function (event){
//     var taName = event.target.tagName.toLowerCase()
//
//     if (taName ==='p') {
//         event.target.style.color = 'blue'
//     }
//
//     if (event.target.classList.contains('color') ){
//         event.target.style.color = 'red'
//     }
// })
//
//
// document.querySelector('#alert').addEventListener('click', function (event){
//     alert('Вы успешно кликнули')
// })
//
// document.querySelector('#confirm').addEventListener('click', function (event){
//     var desicion = confirm('Вы хотите нажать?')
//     if (desicion) {
//         alert('Вы успешно кликнули')
//     }
// })
//
// document.querySelector('#prompt').addEventListener('click', function (event){
//      var age = prompt('Введите свой возраст', 18)
//
//     if (age >= 18) {
//         alert('Вы можете пройти')
//     } else {
//         alert('Не можете')
//     }
// })


var str = '1,2,3,4,5,6,7,8'

var array = str.split(',')

// console.log(array.join(';'))
// console.log(array.reverse())

array.splice(3, 0, '11')

var newArray = array.concat([1, 2])

//console.log(newArray)

var objArr = [
    {name: 'Max', age: 27},
    {name: 'Elena', age: 18},
    {name: 'Igor', age: 20},
]

var foundPerson = objArr.find(function (person){
    return person.age === 20
})

var lodArray = [1,2,3,4,5,6,7,8,9].filter(function (i){
    return i % 2 === 0
})


var numArray = array.map(function (i) {
    return i * 2
})

console.log(numArray)