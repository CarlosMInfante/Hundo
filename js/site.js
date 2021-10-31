//Get the values from the interface
//Start or controller function
function getValues(params) {
    //get values from the page
    // "let" is a block scoped keyword here because inside the function.
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //we call generateNumbers
    let numbers = generateNumbers(startValue, endValue);

    //we call displayNumbers
 
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
function displayNumbers(params) {
    
}