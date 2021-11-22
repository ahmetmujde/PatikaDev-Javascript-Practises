//string functions : 

//length  
var userName = 'mr.ahmet'
console.log(`length of ahmet word = ${userName.length}`)

//indexof 
console.log(`indexof returns the variable index = ${userName.indexOf('mr')}`)

//search function like to indexof
console.log(`search returns the variable index = ${userName.indexOf('mr')}`)

//slice 
//This method returns new String object containing
//the substring of the given string from specified startIndex to endIndex.
console.log(`slice returns the variable x to y = ${userName.slice(0,2)}`)

//This method returns new String object containing
//the substring of the given string from specified startIndex (inclusive)
console.log(`slice returns the variable x to y = ${userName.slice(0)}`)


//Replace
//search and change text  in variable
console.log(userName.replace('mr','MR'))
console.log(userName)

// toUpperCase() method returns the string in uppercase letter
console.log(userName.toUpperCase())

// toLowerCase() method returns the string in lowercase letter
console.log(userName.toLowerCase())

//add text to string value

let drinkName = 'Coca Cola'
let drinkKind = 'zero'

console.log(drinkName.concat(' ',drinkKind))


//Finding Characters by Index Number
console.log(drinkName.charAt(0))
console.log(drinkName[0])


//Converting Text to Array
let softwareName = 'Java,JavaScript'
let softwareNames = softwareName.split(',')
console.log(softwareName)
console.log(softwareNames)

let software = " javaSript "
console.log(software)
console.log(software.trim())

// The substr() Method
//The difference is that the second parameter specifies the length of the extracted part.

let str = "Apple, Orange, Strawberry"
let part = str.substr(7, 6)
console.log("Substr ---> ", part)

//The substring() Method
//substring() is similar to slice(). The difference is that substring() cannot accept negative indexes.

let part2 = str.substring(0, 5)
console.log("substring ---> ", part2)
