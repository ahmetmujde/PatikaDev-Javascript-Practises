//reach first or last item in list and add item in list

//select firs item 
let firstChild  = document.querySelector("ul#list>li:first-child").innerHTML
console.log(firstChild)

//select last item 
let lastChild = document.querySelector("ul#list>li:last-child").innerHTML
console.log(lastChild)


 let ulDOM = document.querySelector("ul#list")

 let lastliDOM = document.createElement('li')

 // add the last child
 lastliDOM.innerHTML = "I created my new item and this is last value"
 ulDOM.append(lastliDOM)


 // add the first child
 let firstliDOM = document.createElement('li')
 firstliDOM.innerHTML = "I created my new item and this is first value"
 ulDOM.prepend(firstliDOM)

 console.log('ul#list')