function getValue(){
    //get user values from the page

    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //NOTE I DID NOT YET INIT AN ARRAY HERE

    //parse for numbers

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    // check if the numbers are integers

    if ((Number.isInteger(fizzValue)) && (Number.isInteger(buzzValue))){

        //call fizzbuzz
        let fbArray = fizzBuzz(fizzValue, buzzValue);

        //call display data and write the data to the screen
        displayData(fbArray);

    } else {
        alert("Input an integer!")
    }

 
}

function fizzBuzz(fizzValue, buzzValue){

    let returnArray = [];

    //loop from 1-100
    //check divisibility and push to array accordingly

    for (let i = 1; i <= 100; i++) {

        if(i % fizzValue == 0 && i % buzzValue == 0) {
            returnArray.push('FizzBuzz');
        } else if (i % fizzValue == 0){
            returnArray.push('Fizz')
        } else if (i % buzzValue == 0){
            returnArray.push('Buzz')
        } else {
            returnArray.push(i);
        }
    }

    return returnArray;
}

    //loop over array and create a table row for each item

function displayData(fbArray){

    // add all the rows to the talbe 

    let tableBody = document.getElementById("results");

    //get the template row

    let templateRow = document.getElementById("fbTemplate");

    //clear table
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index += 5) {

        let tableRow = document.importNode(templateRow.content, true);

        // grab <td> (each colllum in row) and make it into an array
        let rowCols = Array.from(tableRow.querySelectorAll("td"));

        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];

        rowCols[1].classList.add(fbArray[index+1]);
        rowCols[1].textContent = fbArray[index+1];

        rowCols[2].classList.add(fbArray[index+2]);
        rowCols[2].textContent = fbArray[index+2];

        rowCols[3].classList.add(fbArray[index+3]);
        rowCols[3].textContent = fbArray[index+3];

        rowColsgit[4].classList.add(fbArray[index+4]);
        rowCols[4].textContent = fbArray[index+4];

        tableBody.appendChild(tableRow);

    }
}

