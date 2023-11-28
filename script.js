const title = prompt('Как называется ваш проект', 'Карлькулятор верстки')
const screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные')
const screenPrice = prompt('Сколько будет стоить данная работа?', 1000)
let rollback = 10
let fullPrice = 600000
const adaptive = confirm('Нужен ли адаптив на сайте?', true) 

const service1 = prompt('Какой дополнительный тип услуги нужен?', 'SEO')
const servicePrice1 = prompt('Сколько это будет стоить?', 2000)
const service2 = prompt('Какой дополнительный тип услуги нужен?', 'SMM')
const servicePrice2 = prompt('Сколько это будет стоить?', 3000)

fullPrice = parseInt(screenPrice) + parseInt(servicePrice1) + parseInt(servicePrice2)

const servicePercentPrice = fullPrice - (fullPrice * (rollback/100))

console.log(`Стоимость верстки экранов ${screenPrice} рублей`)
console.log(`Стоимость разработки сайта ${fullPrice} рублей`)
console.log('Откат: ' + fullPrice * (rollback/100))
console.log('Итоговую стоимость за вычетом отката посреднику : ' + Math.ceil(servicePercentPrice))

if (fullPrice > 30000) {
    rollback = 10
    console.log('Ваша скидка - ' + rollback + '%')
} else if ((fullPrice >= 15000) && (fullPrice <= 30000)) {
    rollback = 5
    console.log('Ваша скидка - ' + rollback + '%')
} else if ((fullPrice > 0) && (fullPrice < 15000)) {
    rollback = 0
    console.log('Ваша скидка - ' + rollback + '%')
} else if(fullPrice <= 0) {
    console.log('Что-то пошло не так')
}



// console.log(typeof(title))
// console.log(typeof(fullPrice))
// console.log(typeof(adaptive))
// console.log(screens.length)

// const screensArray = screens.toLowerCase().split(', ')
// console.log(screensArray)

