// add value to  local storage
let nameValue = "Kodluyoruz"
localStorage.setItem("exampleName",nameValue)
// wrong case using
/*
let userStatus = {userName: 'kodluyoruz', isActive: true}
localStorage.setItem('user', userStatus)
*/

// add object value to local storage
let userStatus = {userName: 'kodluyoruz.com', isActive: true}
localStorage.setItem('user', JSON.stringify(userStatus))


//get object value  from local storage
let userInfo = localStorage.getItem('kodluyoruz.com')
userInfo = JSON.parse(userInfo)
console.log(userInfo);

//remove item
localStorage.setItem('number',10) 
localStorage.removeItem('number');

// add list to local storage
let listItems = [1,2,3,userStatus]

//wrong code statment
//localStorage.setItem("list",listItems)

localStorage.setItem("list",JSON.stringify(listItems))


//wrong code statment
console.log(localStorage.getItem("list"))
//true code
console.log(JSON.parse(localStorage.getItem("list")))


