// let screen= document.getElementById('screen');
// buttons = document.querySelectorAll('button');
// let screenValue ='';
// for(item of buttons){
//     item.addEventListener('click', (e)=>{
//     buttonText = e.target.innerText;
//     console.log('button text is', buttonText);
//     if(buttonText=='x'){
//         buttonText ='*';
//     }
// else if (buttonText =='=');


// })
// }

let value1 = '';
let value2 = '';


let operationType = '';
let screen = document.getElementById('screen');

const calcButton = (buttonValue) => {
    console.log("this is button value", buttonValue);

    if (operationType == '') {
        value1 += buttonValue;
        screen.value = value1;
    } else {
        value2 += buttonValue;
        screen.value = value2;
    }


}

const operation = (opType) => {
    operationType = opType;
}

const addition = (val1, val2,) => {
    return Number(val1) + Number(val2);
}

const substraction = (val1, val2,) => {
    return val1 - val2;
}

const devision = (val1, val2) => {
    return val1 / val2;
}

const multiply = (val1, val2) => {
    return val1 * val2;
}

const calculate = () => {
    if (operationType == '+') {
        screen.value = addition(value1, value2);
    }

    if (operationType == '-') {
        screen.value = substraction(value1, value2);
    }

    if (operationType == 'devide') {
        screen.value = devision(value1, value2);
    }

    if (operationType == '*') {
        screen.value = multiply(value1, value2);
    }
}

const clearAll = () => {
    value1 = '';
    value2 = '';
    operationType = '';
    screen.value = '';
}
