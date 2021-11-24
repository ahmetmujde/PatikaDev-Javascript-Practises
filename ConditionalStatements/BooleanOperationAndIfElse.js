
var a = 10;
var b = "10";

// if are equal 
console.log(a==b)

//if both value and type are equal
console.log(a===b) 

// if aren't equal
console.log(a!=b) // result false
console.log(a!==b)

//if small 
console.log(a<b)    


//if small or equal
console.log(a<=b) 

//if big
console.log(a > b) 

//if big or equal
console.log(a <= b)

//bolean operation

var c = 10;
var d = "kodluyoruz";

//and &&
console.log(a>11 && b=="kodluyoruz")

//or ||
console.log(a>11 || b=="kodluyoruz") 

//not !
console.log(!(a>11 || b=="kodluyoruz"))

//if else statments
var x = 5;
var y = 7;

if(x > y) {
    console.log(`${x} bigger than ${y} `);
}

else {
    console.log(`${x} smaller than ${y} `);
}