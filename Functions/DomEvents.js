 let myStar = document.querySelector("#mystar")
 myStar.addEventListener("mouseover", domClick)
 
 function domClick(){
    this.style.color == "black" ? this.style.color = "red" : this.style.color = "black"
}



let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counter = counterDOM.innerHTML;

increaseDOM.addEventListener("click",clickEvent)
decreaseDOM.addEventListener("click",clickEvent)


function clickEvent(){
    this.id == "increase"  ? counter += 1 : counter -= 1
    counterDOM.innerHTML = counter
}
