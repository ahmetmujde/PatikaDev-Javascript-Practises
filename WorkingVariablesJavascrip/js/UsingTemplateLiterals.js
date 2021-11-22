//using old string version
let oldString = "Turkey's town names: \nIstanbul \nIzmir \nAnkara"
console.log(oldString)

//using new string versiyon 
let newString = `Turkey's town names: 
Istanbul
Izmir
Ankara`
console.log(newString)

let userName = "ahmet"
let userMail = "example@mail"

//Interpolasyon
//using old string version
console.log("User Name: " + userName + " User Mail: "+ userMail);

//using new string version
console.log(`User Name: ${userName}  User Mail: ${userMail}`);


//math process
let a = 99;
let b = 9999;
console.log(`${a} times ${b} equals to = ${a * b}`)

//HTML Templates

const studentName = `Ahmet`
const studentNo = `0123`
const department = `Engineer`

// old version
const oldPerson =  "<p>" + studentName + "</p>" +
                "<p>" + studentNo + "</p>"+
                "<p>" + department + "</p>"

document.body.innerHTML = oldPerson;

// new version
const newPerson =   `<p>${studentName}</p> `+
                    `<p>${studentNo}</p> `+
                    `<p>${department}</p> `

document.body.innerHTML = newPerson


// extra example
const bookName = `The Tempest`
const writer = `Shakespeare`
const date = `1619`

 const bookTable = `
    <table border>
        <tbody>
            <tr>
                <td>Book</td>
                <td>${bookName}</td>
            </tr>
            <tr>
                <td>Writer</td>
                <td>${writer}</td>
            </tr>
            <tr>
                 <td> Date </td>
                 <td> ${date}</td>
            </tr>
        </tbody>
    </table>
    
 `

 document.body.innerHTML = bookTable