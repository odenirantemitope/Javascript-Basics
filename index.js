//JAVASCRIPT FUNCTION

// function greet(name){
//     console.log("Good morning " + name)
// }

// greet("Temitope")

// //A function that calculate the area of a rectangle

// function calculateArea(width,height){
//     return width * height
// }
// console.log(calculateArea(5,10))


// function areaTriangle(base,height){
//     return 1/2 * base * height
// }
// console.log(areaTriangle(3,9))

// //ARROW FUNCTION
// const sum = (a,b) => {
//     return a+b
// }
// console.log(sum(45,50))

//A function that calculate simple interest

//Temitope deposited $250 in asavings account offering an interest rate of 7.5%. If he keeps the money in the account for 5years how much will he earn?
function simpleInterest(principal,rate,time){
    return 1/100 * principal * rate * time
}
//console.log(simpleInterest(250,75,5))

function sumArray(...numbers){
    return numbers.reduce((total,num) => total + num, 0)
}
//console.log(sumArray(1,2,3,4,5))

//JAVASCRIPT VARIABLE

//Global, Local, Blocks

//Global: variable can be accessed through the entire program

//let age =28
function declareAge(){
    console.log(age)
}
    //declareAge()

function declareName(){
    let name="Tope"
    console.log(name)
}
   // declareName()

//JAVASCRIPT CLOSURE
//It is a function that remembers its scope even after the outer function has been executed

// function newAccess(){
//     let sentence = "I an a variable of type string"

//     const innerfunc = () => {
//         console.log(sentence)
//     }
//     return innerfunc
// }
//     newAccess()()
//     const inner = newAccess()
//     inner()

    //Counter function
    function counter(){
        let count = 0;
        return function increament(){
            count++
            return count
        }
    }

    // const myCounter = counter()
    // console.log(myCounter())
    // console.log(myCounter())
    // console.log(myCounter())
    // console.log(myCounter())
    // console.log(myCounter())
    // console.log(myCounter())
    // console.log(myCounter())
    // console.log(myCounter())
     
// for(let i = 0; i <= 8; i++){
//     setTimeout(()=> console.log(i),1*9000)
// }

//ARRAY
//An array is a collection of items stored in memory location

// let fruits = ["oranges","banana","cherry"]
// let myInfo = [21, "22, Qwl NY", "male", true]

// fruits[1] = "mango"

// fruits.push("apple", "berry", "pineapple")  //add additional items to the array
// //console.log(fruits)


// fruits.unshift("watermelon")  //adds an element from the beginning
// fruits.shift()  //deletes the first element from an array
// fruits.pop()    //delete the last element from the array
// console.log(fruits.length)


// const myName = "Temitope"
// const fullStatement = `I am ${myName}, and i love ${fruits[1]}`

// //console.log(fullStatement)

// //OBJECT
// //Object is a collecion of key-value pairs

// const person = {
//     name: "Tope",
//     age: 20,
//     isEmployed: true,
// }

// function determineStatus(value){
//     if(value){
//         return "Employed"
//     }else{
//         return "Unemployed"
//     }
// }
// console.log(`His name is ${person.name} and he is ${person.age} years old. Also he is ${determineStatus{person.isEmployed}}`)

let myVar = "3"
myVar = 3.579
//console.log(typeof myVar)

//CONDITIONAL STATEMENTS

//if statement
//if else statement
//if-else ladder
//switch statements

// let age = 18

// if(age >= 18){
//     console.log("You are old enough to enter this site !!!")
// }
// else{
//     console.log("You must be 18+ to enter this site")
// }

// let time = 02

// if(time < 12){
//     console.log("Good morning")
// }
// else{
//     console.log("Good afternoon")
// }

// let age = 25
// let hasLicense = true

// if(age >= 16){
//     console.log("You are old enough to drive")

//     if(hasLicense){
//         console.log("You have a license")
//     }
//     else{
//         console.log("You do not have your license yet")
//     }
// }
// else{
//     console.log("You must be 16+ to have a license")
// }

//LOOP

//for loop

for(i = 0; i < 5; i++){
    //console.log(i)
}

    //console.log("Happy New Year")

//while loop

let username = ""

while(username === ""){
    username = window.prompt(`Enter your name`)
}
//console.log(`Hello ${username}`)