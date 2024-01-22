let inputData;

const dataInput = document.querySelector('[data-input]');
const btnInput = document.querySelector('[btn-input]');

btnInput.addEventListener('click', () => {
    inputData = dataInput.value;

    console.log(inputData);
})


const dataOutput = document.querySelector('[data-output]');
const dataErr = document.querySelector('[data-err]');
const dataSuccess = document.querySelector('[data-success]');
const btnOutput = document.querySelector('[btn-output]');

btnOutput.addEventListener('click', () => {
    let outputData = dataOutput.value;
    console.log(outputData);

    if (inputData === outputData) {
        dataErr.classList.add('para-1');
        dataSuccess.classList.remove('para-2');
    } else {
        dataErr.classList.remove('para-1');
        dataSuccess.classList.add('para-2');
    }
})