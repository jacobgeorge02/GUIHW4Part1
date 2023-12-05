function processForm() {
    // Getting the values from user
    var firstNumber = parseInt(document.getElementById('firstNumber').value);
    var secondNumber = parseInt(document.getElementById('secondNumber').value);
    var thirdNumber = parseInt(document.getElementById('thirdNumber').value);
    var fourthNumber = parseInt(document.getElementById('fourthNumber').value);

    // Clear previous table content
    var tbody = document.querySelector('#multiplicationTable tbody');
    tbody.innerHTML = '';

    var errorMessage = document.getElementById('error-message');
    errorMessage.textContent = ''; // Clear any previous messages

    let headerRow = tbody.insertRow();
    headerRow.insertCell().textContent = '  '; // this is the top-left-most data cell, used for formating
    
    for (let x = firstNumber; x <= secondNumber; x++) { // this for loop creates the top row of values
        headerRow.insertCell().textContent = x;
        for (let y = thirdNumber; y <= fourthNumber; y++) { // this for loop creates the values going down
        let row = tbody.insertRow();
        row.insertCell().textContent = y;
            for (let z = firstNumber; z <= secondNumber; z++) { // this for loop multiple each value of X and Y as they increment and insert them in the correct spot
               row.insertCell().textContent = z * y;
            }
        }
    }
}

$(document).ready(function() {
    $('#buttonForm').validate({ // getting the id from the form tag in the html code
        rules: { // establishing the rules for each of the four inputs, requiring a integer input between the range of -50 and 50
            firstNumber: {
                required: true,
                integer: true,
                range: [-50, 50]
            },
            secondNumber: {
                required: true,
                integer: true,
                range: [-50, 50]
            },
            thirdNumber: {
                required: true,
                integer: true,
                range: [-50, 50]
            },
            fourthNumber: {
                required: true,
                integer: true,
                range: [-50, 50]
            }
        },
        messages: { // establishing the messages for each of the four inputs, which should trigger if incorrect inputs are given
            firstNumber: {
                required: "First number is required.",
                integer: "Please enter a number",
                range: "First number must be between -50 and 50."
            },
            secondNumber: {
                required: "Second number is required.",
                integer: "Please enter a number",
                range: "Second number must be between -50 and 50."
            },
            thirdNumber: {
                required: "Third number is required.",
                integer: "Please enter a number",
                range: "Third number must be between -50 and 50."
            },
            fourthNumber: {
                required: "Fourth number is required.",
                integer: "Please enter a number",
                range: "Fourth number must be between -50 and 50."
            },
        },
        submitHandler: function(form) { // the handler will call the processForm function after all inputs are recieved, running the logic and creating the table
            processForm();
        }
    });
});