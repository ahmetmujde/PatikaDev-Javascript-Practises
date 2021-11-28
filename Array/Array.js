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


let newArray = [10, 20, 30, 40]
console.log("first statment:",newArray)

// add value to end of array
newArray.push(50)

// add value to first of array
newArray.unshift(0)
console.log("final state of array after adding values:",newArray)

//subtraction value to last of array
let lastItemArray = newArray.pop()
console.log("last item: ", lastItemArray)

//subtraction value to first of array
let firstItemArray = newArray.shift()
console.log("first item: ", firstItemArray)

console.log("final state of array after subtraction values:",newArray)

//change value in array
newArray[0] = 5;
newArray[newArray.length - 1] = 75

console.log(newArray)
