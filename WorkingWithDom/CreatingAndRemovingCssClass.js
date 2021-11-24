let greeting = document.querySelector("#greeting")

//add class
greeting.classList.add("text-primary")
greeting.classList.add("title")

//add mulptiple class
greeting.classList.add("first", "second", "third")

// remove class
greeting.classList.remove('title')

//remove multiple class
greeting.classList.remove("first", "second")


console.log(greeting.classList)

let div = document.querySelector("#greeting")
console.log(div.classList.item(0))

let length  =div.classList.length
console.log(length)

for (let index = 0; index < length; index++) {
  console.log(div.classList.item(index))  
}