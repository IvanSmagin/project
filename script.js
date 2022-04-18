//var message = 'Hello world!'

// let obj = {a: 1}
// var isNull = null
// var undef = undefined
//


// if(4){
//     console.log('Значение true')
// }else {
//     console.log('Нет')
// }
//
// var personAge = 16
// var massage
//
// if(personAge < 18){
//     massage = 'Малой'
// } else {
//     massage = 'Нет'
// }
//
// console.log(massage)

// var carColor = 'blue'
//
// switch (carColor){
//     case 'green':
//         console.log('Зеленая')
//         break
//     case 'red':
//         console.log('Красная')
//         break
//     case 'blue':
//         console.log('Голубая')
//         break
//     default:
//         console.log('Черная')
// }


// var carName = 'Ford'
// var carYear = 2010
// var personYear = 1990
//
// function calculateAge(year) {
//     var currenYear = 2018
//     var result = currenYear - year
//     return result
// }
//
//
// function checkAge(year) {
//     if (calculateAge(year) < 10) {
//         console.log('Меньше 10')
//     } else {
//         console.log('Больше 10')
//     }
// }
//
// checkAge(carYear)
// checkAge(personYear)



// var cars = [
//     'ford',
//     'mazda',
//     'kia',
//     'bmw'
// ]
//
// console.log(cars)
// console.log(cars[1])
// console.log(cars.length)
// // добавит в конец
// cars.push('audi')
// console.log(cars)
// // удаляет и возвращает последний элемент
// var audi = cars.pop()
// console.log(cars, audi)
// // удалять и возвращать первый элемент
// var ford = cars.shift()
// console.log(cars, ford)
// // добавить в начало
// cars.unshift('audi')
// console.log(cars)
//
// console.log(cars.indexOf('mazda'))




//
// var person = {
//     name:'Василий',
//     year:'1993',
//     family:['Елена', 'Игорь'],
//     car:{
//         year:2010,
//         model:'ford'
//     },
//     calculate: function (){
//         var age = 2018 - this.year // = person.year
//             console.log(age)
//     }
// }
// console.log(person)
// console.log(person.name)
// console.log(person["year"])
// console.log(person["car"].year)
//
// person.calculate()


var numbers = [1, 2, 3, 4, 5]

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}