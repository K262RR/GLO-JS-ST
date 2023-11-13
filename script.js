const title = 'Карлькулятор верстки'
const screens = 'Простые, Сложные, Интерактивные'
const screenPrice = 100
const rollback = 10
const fullPrice = 600000
const adaptive = true


console.log(typeof(title))
console.log(typeof(fullPrice))
console.log(typeof(adaptive))
console.log(screens.length)
console.log(`Стоимость верстки экранов ${screenPrice} рублей`)
console.log(`Стоимость разработки сайта ${fullPrice} рублей`)

const screensArray = screens.toLowerCase().split(', ')
console.log(screensArray)

console.log(fullPrice * (rollback/100))