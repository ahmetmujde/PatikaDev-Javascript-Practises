//function called typeof is return to type from came variable
console.log("abc   --> ", typeof "abc")
//expected result ---> string

console.log("a     --> ", typeof 'a')
//expected result ---> char

console.log("99    --> ", typeof 99)
//expected result ---> number

console.log("99.9  --> ", typeof 99.9)
//expected result ---> number

console.log("true  --> ", typeof true)
//expected result ---> boolean

console.log("false --> ", typeof false)
//expected result ---> boolean

console.log("null  --> ", typeof null)
//expected result ---> object

// other funcitions isInteger(), isFinite() and isNaN()


//change variable type
console.log(String(123)) //123(number) ---> result 123 is string
console.log(Number("123")) //123(string) --->  result 123 is number

//convert string value to int and float value
let number1 = "11"
number1 = parseInt(number1)
console.log("number1: ", number1, typeof(number1))

let number2 = "11px"
number2 = parseInt(number2)
console.log("number2: ", number2, typeof(number2))

let number3 = "11"
number3 = Number(number3)  //there are must be number
console.log("number3: ", number3, typeof(number3))

let number4 = "11.1" 
number4 = Number(number4) //there are must be number
console.log("number4: ", number4, typeof(number4))

let number5 = "11.5"
number5 = parseFloat(number5)  
console.log("number5: ", number5, typeof(number5))

//convert int and float value to string value
let number6 = 55;
number6 = number6.toString()
console.log(number6, typeof(number6))

let number7 = 55.5;
number7 = number7.toString()
console.log(number7, typeof(number7))

