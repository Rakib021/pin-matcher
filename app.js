function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];

    if (pin.length === 4) {
        return pin;
    }
    else {

        return getPin();
    }
}
//clickable generate pin button
function generatePin() {
    const pinInput = document.getElementById("pin");
    pinInput.value = getPin();

}

//display generated pin
// const pinInput = document.getElementById("pin");   //catch input value
// pinInput.value = getPin();   //cz amdr shb kaaj function a hocche tai getInput value function soman



//handle calculator button event
const buttonContainer = document.getElementById("digits-container");
buttonContainer.addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        //handle backspace
        //handle clear
        if (digit === 'C') {
            const typedInput = document.getElementById("typed-pin");
            typedInput.value = '';

        }

    }
    else {
        const typedInput = document.getElementById("typed-pin");
        typedInput.value = typedInput.value + digit;
    }

})

//verify Pin

function verifyPin() {
    const pin = document.getElementById("pin").value;
    const typedPin = document.getElementById("typed-pin").value;

    if (pin === typedPin) {
        // const correct = document.getElementById("correct");
        // correct.style.display = 'block';
        // const inCorrect = document.getElementById("inCorrect");
        // inCorrect.style.display = 'none';
        displayMatchResult('block','none');

    }
    else {
        // const correct = document.getElementById("correct");
        // correct.style.display = 'none';
        // const inCorrect = document.getElementById("inCorrect");
        // inCorrect.style.display = 'block';
       displayMatchResult('none', 'block');

    }



}
function displayMatchResult(correctStatus, inCorrectStatus) {
    const correct = document.getElementById("correct");
    correct.style.display = correctStatus;
    const inCorrect = document.getElementById("inCorrect");

    inCorrect.style.display = inCorrectStatus;

}