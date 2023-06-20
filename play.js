const html = document.getElementById("phrase")
console.log('before:',html.innerText) 
let message =  "goodbye my lover"

html.innerText = message;

console.log('after:',
html.innerText)
html.innerHTML =`<p>${message}</p>` 

html.style.color = 'red' 

// square boxes

// let red = document.getElementById('red')
// let yellow = document.getElementById('yellow')  
// let green = document.getElementById('blue')
  
// red.onclick = () => console.log('red')
// yellow.onclick = () => console.log('yellow')
// blue.onclick = () => console.log('blue')

const squares = document.querySelectorAll ('.colorSquare');
// console.log(squares)

//console.log(squares[0].value)

//FOR EACH
const timeClicked = {'red':0, 'yellow':0, 'blue': 0}
squares.forEach(square =>{
    square.onclick = ()=>{
         
        timeClicked[square.value]+=1 
        square.innerText =  timeClicked[square.value]
    }
})
  
function clearScore(){
     timeClicked.red = 0
     timeClicked.yellow= 0
     timeClicked.blue = 0
     squares.forEach(square =>{
        square.innerText = []
     })
        
}
const clearGame = document.getElementById("clear-Game")
clearGame.onclick = () => clearScore();


// let weather;
// if(weather === raining){
//     console.log("use your umbrella")
// }else{
//     console.log("wear your sun-glasses")
// }

// function greeting(name){
//     console.log('hi ' + name + ' welcome '+ 'back')
// }

// greeting("amm")
// 

// function add( a, b){
//     return (a + b) 
// }
// console.log(add(1,1))

// function subtract( a, b){
//     return (a - b)
  
// }
// console.log(subtract(4,2))

// function multiply( a, b){
//     return (a * b)
  
// }
// console.log(multiply(2,1))

// function divide( a, b){
//     return (a - b)
  
// }
// console.log(divide(4,2))

// 2
// 2
// 2
// 2

// const person = {
//     name: 'damilola',
//     Adress: 'wrong-town'
// }
// console.log(person);

// person.phone = '11-113-3455'
// console.log(person)

// const person ={
//     name: 'oluwadamilola',
//     address: 'bugggy jungle',
//     netIncome: '111,100000',
// }
// console.log(person)

// function indroducer(){
//     const person ={
//         name: 'oluwadamilola',
//         address: 'bugggy jungle',
//         netIncome: '111,100000',
//     }
//     return()
// }
// 


// let person = {
//     name:'dammy',
//     shirt: 'white',
//     asset: '100000',
//     liability: '50000'
// }

// const networth = (name,shirt,asset, liability) =>{
//     person = {
//         name:'name',
//         shirt: 'shirt',
//         asset: '100000',
//         liability: '50000',
//         networth: function(){
//             return this.asset - this.liability
//         }
//     }
//     const personet = `my name is ${name}, the color of my shirt is ${shirt}
//     and my networth is ${person.networth()}`
//     return personet
// }
// console.log(networth('damilola','white'))

// const human = (name,shirt) =>{
//     person = {
//         name:'name',
//         shirt: 'shirt'
//     }
//     const id =`my name is ${name}, and the color of my shirt is ${shirt}`
//     return id
// }
// console.log(human('damilola','white'))

//for loop
// let result = []
// const numbers = [1,2,3,4,5,6,7]
// for(const number of numbers ) {
//     result.push(number * 2)
// }
// console.log(result)

// const double = (numbers) =>{
// let result =[]

//     for(const number of numbers ) {
//         result.push(number * 2)
//     }
// return result
// }
// console.log(double([1,2,3,4,5,6]))
// person = {
//     brass:"4",
//     agent: "opay"
// }
// const human = (  name, agent) =>{
//     person = {
//        name :"name",
//         agent: "agent"
//     }
// const id = `my name is  ${ name} and i have an ${agent} agent`
//     return id 
// }
// // console.log(human("dharmy","opay"))

// const letterCounter = (phrase) =>{
     
//     let result = 0;

//     for(letter in phrase){
//        console.log(Number(letter) + 1)
//        result = Number(letter) + 1
//     }
//      return{result: result}
// }
// const phrase = prompt('write your phrase')
// console.log(letterCounter(phrase)) 

// const sumArray = (numbers) => {
//     let  result = 0
//     // For loop
//     for(const number of numbers){
//         console.log(number)
//         result = result + number
//     }
//     return { result }
    
// }
// const nums =[1,2,3,4,5]
// // console.log(sumArray(nums))

// const max = (numbers) =>{
//     let result = numbers[0]

//     for(const number of numbers){
//         if(number > result){
//             result = number
//         }
//     }

//     return {result}
// }
// console.log(max([1,2,34,40,134,1,2,34,4,5]))

// const letterFrequency = (phrase) =>{
//     console.log(phrase)
//     let frequency = {}
//     for(const letter of phrase){
//         if(letter in frequency){
//             frequency[letter] ++
//         } else{
//             frequency[letter] = 1
//         }
//     }
//     return frequency
// }
// console.log(letterFrequency('haha'))

// const wordfrequency = (phrase)=>{
//     let frequency ={}
//    const words = phrase.split(' ')  
//     for(const word of words){
//         console.log(word)
//         if(word in frequency){
//             frequency[word]++
//         }else{
//             frequency[word] = 1
//         }
//     }
//     console.log(words)
// }

// const wordFrequency = (phrase)=>{
//     const words = phrase.split(' ')
//     return letterFrequency(words)
// }
   

// const userInput = prompt('write your sentence')
// console.log(wordFrequency(userInput))


// Array methods
// Map
    // const doubletap = (numbers)=>{
    //     return numbers.map(number => number * 2)
    // }

//Filter
    // const Filter = (numbers, greaterThan) =>{
    // let result = []
    // for(const number of numbers){
    //     if(number > greaterThan){
    //         result.push(number)
    //     }
    // }
    // return result
    // }

    // const nums = [1,2,3,4,5,6,7,7]
    // console.log(nums.filter(num => num > 3))

    const actors = [
        {name: 'patrick', netWorth:100000000},
        {name: 'spongebob}', netWorth:200000},
        {name: 'sqidward', netWorth:11111000000}
    ]
    console.log(actors.reduce((prev,curr)=>prev  +
    curr.netWorth, 0
))
    //  let result = actors.filter(actor => actor.networth > 1000000)
    //  console.log(result)
    //  let names = result.map(actor => actor.name).join(' ,')

    // Play.innerHTML = '<h1>names</h1>'

    // const nums = [1,3,4,7]
    // let result = nums.reduce((prev, curr)=> prev + curr)
    
    // console.log(result)