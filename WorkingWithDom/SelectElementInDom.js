
//select with getElementsByTagName
/*
let h1 = document.getElementsByTagName("h1")
console.log(h1)
*/

//select with getElementById(
let title = document.getElementById("title")
console.log(title.innerHTML)

//change and added value in innerHTML
title.innerHTML = "World is changed"
console.log(title.innerHTML)

title.innerHTML = "Hello World, "
title.innerHTML += "World is changed"
console.log(title.innerHTML)

//link operation
/*
let link  = document.querySelector("ul#list>li>a#kodluyoruzlink")
link.innerHTML = "patika.dev"
*/

let link  = document.querySelector("#kodluyoruzlink")
link.innerHTML = "patika.dev"
link.style.color = "red"
link.classList.add("ptn")

