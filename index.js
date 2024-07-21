// Code your solutions in this file

// for (let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }


function writeCards (stringNames, eventName ){


    let messages = [];

    for (let i=0; i<stringNames.length; i++){
        messages.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return messages
}

const result = writeCards(["Guadalupe", "Ollie", "Aki"],"surprise");

console.log(result);


function countDown(startingNumber) {
    // Check if startingNumber is valid and is a number
    if (typeof startingNumber !== 'number' || isNaN(startingNumber)) {
        console.log("Please provide a valid number to start the countdown.");
        return;
    }

    // Start the countdown from startingNumber down to 0
    for (let i = startingNumber; i >= 0; i--) {
        console.log(i);
    }
}







// let stringNames = ["Guadalupe", "Ollie", "Aki"];

// function countDown(stringNames) {
//     for (let i = stringNames.length; i >= 0; i--) {
//         return i;
// //     }
// }




// let resultSecond = countDown(stringNames)