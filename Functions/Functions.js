//function definition 
function printHello(){
    console.log("hello")
}

//calling functions to run
printHello()


//function with parameters definition and return value
function printWithParameters(userName){
    return userName
}

printWithParameters("ahmet"); //but it cannot be seen in console

//Functions That Return Value

function addition(numberOne,  numberTwo){
    return(numberOne + numberTwo);
}

console.log(addition(2,3)) //there we go , we can see in the console


//Function Declaration
function giveMessage() {
    alert( 'Hello everyone' );
}
giveMessage()


//recursion function

function pow(x,y){
    console.log("x = %d  y = %d ",x,y )
    if(y == 1){
        return x;
    } else {
        return x * pow(x, y - 1)
    }
}

console.log(pow(2,3))

// default parameters assignment to functions

function greetings (firstName="", lastName=""){
    console.log(`Welcome ${firstName} ${lastName}`)
}

greetings(); // only welcome appears on console
greetings("parameter"); // welcome and parameter appears on console
greetings("parameter","parameters") //welcome, parameter  and  parameters appears on console



function Question(hobby) {
    switch (hobby) {
      case "car":
        return function (name) {
          console.log(name + " do you have a car ?");
        };
        break;
  
      case "book":
        return function (name) {
          console.log(name + " what is your favorite author?");
        };
        break;
  
      case "software":
        return function (name, type) {
          console.log(name + " are you interested in " + type + "?");
        };
        break;
  
      default:
        return function (name) {
          console.log(name + "  how are you ?");
        };
        break;
    }
  }
  
  var softwareQuestion = Question("software");
  softwareQuestion("Cemre","nodejs");