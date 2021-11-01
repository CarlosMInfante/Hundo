//Get the values from the interface
//Start or controller function
function getValues(params) {
    //get values from the page
    // "let" is a block scoped keyword here because inside the function.
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    let numbers = [];

    //parse into intergets
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

        if(Number.isInteger(startValue)  && Number.isInteger(endValue)){
            //we call generateNumbers
            let numbers = generateNumbers(startValue, endValue);
            //we call displayNumbers
            displayNumbers(numbers);

        } else {
            alert("You must enter numbers")
        }
    }

//Generate numbers from startValue to the endValue
//Logic function(s)
function generateNumbers(sValue, eValue) {
    
    let numbers =[];

    //I want to get all numbers from start to end

    for (let index = sValue; index <= eValue; index++){
        //This will execute in a loop until index = eValue
        numbers.push(index);
    }

    return numbers; 

}

//Displace the numbers and mark the even numbers bold.
//Display or view functions.
function displayNumbers(numbers) {

    let templateRows="";

    for (let index = 0; index < numbers.length; index++){
        
        let className= "even";
        let number = numbers[index];

        if(number % 2 == 0){
            className = "even";
        }else{
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;

    }    

    document.getElementById("results").innerHTML = templateRows;

}