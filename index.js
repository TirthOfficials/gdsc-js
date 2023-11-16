function greet(){
    var name = document.getElementById("name").value;

    document.getElementById("pname").textContent = "Hello " + name;
}

function add(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;

    a = parseInt(a);
    b = parseInt(b);

    document.getElementById("result").textContent = "Result: " + (a + b);
}

function subtract(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;

    a = parseInt(a);
    b = parseInt(b);

    document.getElementById("result").textContent = "Result: " + (a - b);
}

function multiply(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;

    a = parseInt(a);
    b = parseInt(b);

    document.getElementById("result").textContent = "Result: " + (a * b);
}

function divide(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;

    a = parseInt(a);
    b = parseInt(b);

    if(b === 0){
        alert("Error. Cannot divide by zero.");
        document.getElementById("result").textContent = "Error. Cannot Divide by zero.";
        return;
    }

    let result = a / b;

    document.getElementById("result").textContent = "Result: " + (result);
}
console.log("Hello");
function fizzBuzz(){
    let number = document.getElementById("num").value;

    number = parseInt(number);

    if((number % 3 === 0) && (number % 5 === 0)){
        document.getElementById("fizzorbuzz").textContent = "FizzBuzz";
    }else if(number % 3 === 0){
        document.getElementById("fizzorbuzz").textContent = "Fizz";
    }else if(number % 5 === 0){
        document.getElementById("fizzorbuzz").textContent = "Buzz";
    }else{
        document.getElementById("fizzorbuzz").textContent = "Not fizz or buzz :(";
    }
}