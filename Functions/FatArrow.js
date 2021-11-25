// classic function definition
function hello(firsName){
    console.log("Hello ", firsName)
}

hello("My kind is classic function definition");

//Fat Arrow

//classic fat arrow function definition
const helloFuncV1 = (firsName) => {console.log(`Hello ${firsName}`)}
helloFuncV1("Classic fat arrow (v1)")

// bold arrow function definition with a parameter and without curly braces
const helloFuncV2 = firsName => console.log(`Hello ${firsName} (v2)`)
helloFuncV2("First Name")

//bold arrow function definition with multiple parameter and without curly braces
const helloFuncV3 = (firsName, lastName) => console.log(`Hello ${firsName}, ${lastName} (v3)`)
helloFuncV3("First Name","Last Name")


//bold arrow function definition with multiple parameter and curly braces
const helloFuncV4 = (firsName, lastName) => {
    let result = `Hi ${firsName}, ${lastName} (v4)`
    console.log(result)
    return result
}

helloFuncV4("First Name","Last Name")