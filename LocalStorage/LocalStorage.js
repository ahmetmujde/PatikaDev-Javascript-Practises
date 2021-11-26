
// add value to  local storage
let user = "Kodluyoruz"
localStorage.setItem("userInfo",user)

/*
// wrong case using
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