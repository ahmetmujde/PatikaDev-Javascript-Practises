let domain = "kodluyoruz"
let isActive  = false;
let items = [17, 23, 45, isActive, domain]
console.log(items)

let emptyArray = [] // this is empty array

//get learn arrray length
let arrayLength = items.length

// get first value from array
let firstItem = items[0]

// get last value from array
let lastItem = items[items.length - 1]

console.log(`first value: ${firstItem} \nlast value:  ${lastItem}`)


//showing the array at h2 inner html  
items.forEach((item) => {
    document.querySelector('#info').innerHTML += (item +'<br>')
});

//which statment is true ---->

console.log(Array.isArray(items))
console.log("[]   ->", Array.isArray([]))
console.log("15   ->", Array.isArray(15))
console.log("true ->", Array.isArray(true))



//showing the array at console  
let arr = [1,2,3,"dört","beş"];
arr.forEach((item, index) => {
  console.log(item, index);
});


