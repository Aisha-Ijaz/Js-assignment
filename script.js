function task1(){
    var num1 = prompt("Enter a number: ");
    var num2 = prompt ("Enter a second number: ");

    var sum = Number(num1) + Number(num2);
    alert("The sum of two number is: "+ sum);
}

function task2(){
    var num1 = prompt("Enter first number: ");
    var num2 = prompt("Enter second number: ");
    var num3 = prompt("Enter third number: ");

    var addNumbers = Number(num1) + Number(num2) + Number(num3);
    alert("The sum of three number is: "+ addNumbers);
}

function task3(){
    var num1 = prompt("Enter first number: ");
    var num2 = prompt("Enter a second number: ");

    var sum = Number(num1) + Number(num2);
    alert("Sum is: "+ sum);
}

function task4(){
    var num1 = prompt("Enter a number: ");
    var num2 = prompt("Enter a second number: ");

    // calculations
    var sum = Number(num1) + Number(num2);
    var difference = Number(num1) - Number(num2);
    var product = Number(num1) * Number(num2);
    var quotient = Number(num1) / Number(num2);

    // Display Results
    alert("Sum: "+ sum + 
        "\nDifference: "+ difference + 
        "\nProduct: "+ product+ 
        "\nQuotient: " + quotient);
}

function task5(){
    var name = prompt("Enter your name: ");
    var num1 = prompt("Enter a first number: ");
    var num2 = prompt("Enter a second number: ");

    var sum = Number(num1) + Number(num2);

    alert("Hello "+ name +", The sum of "+ num1 + " and "+ num2 + " is " + sum + "."); 
}

function task6(){
    var num1 = prompt("Enter the first number: ");
    var num2 = prompt("Enter a second number: ");

    // convert to integers
    var int1 = parseInt(num1);
    var int2 = parseInt(num2);

    // add
    var sum = int1 + int2;

    // display in alert
    alert("The sum is: " + sum)
}

function task7(){
    var num1 = prompt("Enter the first number:");
    var num2 = prompt("Enter the second number:");

    // Convert input to integers
    var int1 = parseInt(num1);
    var int2 = parseInt(num2);

    // Check if both are numbers
if (isNaN(int1) || isNaN(int2)) {
        alert("Error: Please enter valid numbers!");
    } else {
        var sum = int1 + int2;
        alert("The sum is: " + sum);
    }
}

function task8(){
    var num = prompt("Enter a number: ");

    // convert to number and add 10
    var result = Number(num) + 10;

    // Display the result
    alert("The result after adding 10 is: "+ result);    
}

function task9(){
    var num1 = prompt("Enter a first number: ");
    var num2 = prompt("Enter a second number: ");

    var sum = Number(num1) + Number(num2);

    if (sum % 2 == 0){
    alert("The sum is even.");
    } else {
    alert("The sum is odd.");
    }
}

function task10(){
    var num1 = prompt("Enter a first number: ");
    var num2 = prompt("Enter a second number: ");
    var operator = prompt("Enter an operator (+, -, *, /): ");

    if (operator === "+"){
        result = Number(num1) + Number(num2);
    } else if(operator === "-"){
        result = Number(num1) - Number(num2);
    } else if(operator === "*"){
        result = Number(num1) * Number(num2);
    } else if(operator ==="/"){
        result = (Number(num1) / Number(num2)).toFixed(2);
    } else{
        result = "Invalid operator!";
    }

    alert(num1 + " " + operator + " " + num2 + " is equal to " + result);
}
