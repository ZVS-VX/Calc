const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');
const b9 = document.getElementById('b9');
const b0 = document.getElementById('b0');
const bp = document.getElementById('bp');
const bm = document.getElementById('bm');
const bz = document.getElementById('bz');
const bd = document.getElementById('bd');
const br = document.getElementById('br');
const bc = document.getElementById('bc');
const display = document.getElementById('display');
let firstNum = 0;
let firstStr = '';
let secondNum = 0;
let secondStr = '';
let optionStr = '';
let isSecond = false;

function d0() {
    optionStr = '';
    firstNum = 0;
    firstStr = '';
    secondNum = 0;
    secondStr = '';
    isSecond = false;
    display.value = "Error: You can't divide by zero!";
}

function calc(f, o, s) {
    switch (o) {
        case '+':
            return f + s;
        break;
    
        case '-':
            return f - s;
        break;

        case '/':
            return f / s;
        break;

        case '*':
            return f * s;
        break;

        case '':
            return f;
        break;
    }
}

b1.addEventListener('click', function() {
    if (isSecond) {
    secondStr = secondStr + '1';
    secondNum = Number(secondStr);
    display.value = firstStr + optionStr + secondStr;
    } else {
    firstStr = firstStr + '1';
    firstNum = Number(firstStr);
    display.value = firstStr;
    }
});

b2.addEventListener('click', function() {
    if (isSecond) {
    secondStr = secondStr + '2';
    secondNum = Number(secondStr);
    display.value = firstStr + optionStr + secondStr;
    } else {
    firstStr = firstStr + '2';
    firstNum = Number(firstStr);
    display.value = firstStr;
    }
});

b3.addEventListener('click', function() {
    if (isSecond) {
    secondStr = secondStr + '3';
    secondNum = Number(secondStr);
    display.value = firstStr + optionStr + secondStr;
    } else {
    firstStr = firstStr + '3';
    firstNum = Number(firstStr);
    display.value = firstStr;
    }
});

b4.addEventListener('click', function() {
    if (isSecond) {
    secondStr = secondStr + '4';
    secondNum = Number(secondStr);
    display.value = firstStr + optionStr + secondStr;
    } else {
    firstStr = firstStr + '4';
    firstNum = Number(firstStr);
    display.value = firstStr;
    }
});

b5.addEventListener('click', function() {
    if (isSecond) {
    secondStr = secondStr + '5';
    secondNum = Number(secondStr);
    display.value = firstStr + optionStr + secondStr;
    } else {
    firstStr = firstStr + '5';
    firstNum = Number(firstStr);
    display.value = firstStr;
    }
});

b6.addEventListener('click', function() {
    if (isSecond) {
    secondStr = secondStr + '6';
    secondNum = Number(secondStr);
    display.value = firstStr + optionStr + secondStr;
    } else {
    firstStr = firstStr + '6';
    firstNum = Number(firstStr);
    display.value = firstStr;
    }
});

b7.addEventListener('click', function() {
    if (isSecond) {
    secondStr = secondStr + '7';
    secondNum = Number(secondStr);
    display.value = firstStr + optionStr + secondStr;
    } else {
    firstStr = firstStr + '7';
    firstNum = Number(firstStr);
    display.value = firstStr;
    }
});

b8.addEventListener('click', function() {
    if (isSecond) {
    secondStr = secondStr + '8';
    secondNum = Number(secondStr);
    display.value = firstStr + optionStr + secondStr;
    } else {
    firstStr = firstStr + '8';
    firstNum = Number(firstStr);
    display.value = firstStr;
    }
});

b9.addEventListener('click', function() {
    if (isSecond) {
    secondStr = secondStr + '9';
    secondNum = Number(secondStr);
    display.value = firstStr + optionStr + secondStr;
    } else {
    firstStr = firstStr + '9';
    firstNum = Number(firstStr);
    display.value = firstStr;
    }
});

b0.addEventListener('click', function() {
    if (isSecond) {
    secondStr = secondStr + '0';
    secondNum = Number(secondStr);
    display.value = firstStr + optionStr + secondStr;
    } else {
    firstStr = firstStr + '0';
    firstNum = Number(firstStr);
    display.value = firstStr;
    }
});

bp.addEventListener('click', function() {
    if (isSecond) {
    firstStr = calc(firstNum, optionStr, secondNum);
    optionStr = '+';
    secondStr = '';
    secondNum = 0;
    firstNum = Number(firstStr);
    display.value = firstStr + optionStr;
    } else {
    optionStr = '+';
    display.value = firstStr + optionStr;
    isSecond = true;
    }
});

bm.addEventListener('click', function() {
    if (isSecond) {
    firstStr = calc(firstNum, optionStr, secondNum);
    optionStr = '-';
    secondStr = '';
    secondNum = 0;
    firstNum = Number(firstStr);
    display.value = firstStr + optionStr;
    } else {
    optionStr = '-';
    display.value = firstStr + optionStr;
    isSecond = true;
    }
});

bz.addEventListener('click', function() {
    if (isSecond) {
    firstStr = calc(firstNum, optionStr, secondNum);
    optionStr = '*';
    secondStr = '';
    secondNum = 0;
    firstNum = Number(firstStr);
    display.value = firstStr + optionStr;
    } else {
    optionStr = '*';
    display.value = firstStr + optionStr;
    isSecond = true;
    }
});

bd.addEventListener('click', function() {
    if (isSecond) {

    firstStr = calc(firstNum, optionStr, secondNum);
    optionStr = '/';
    secondStr = '';
    secondNum = 0;
    firstNum = Number(firstStr);
    display.value = firstStr + optionStr;
    } else {
    optionStr = '/';
    display.value = firstStr + optionStr;
    isSecond = true;
    }
});

bc.addEventListener('click', function() {
    optionStr = '';
    firstNum = 0;
    firstStr = '';
    secondNum = 0;
    secondStr = '';
    isSecond = false;
    display.value = '';
});

br.addEventListener('click', function() {

    if (secondNum == 0 && optionStr == '/') {
        d0()
    } else {
        display.value = calc(firstNum, optionStr, secondNum);
    }

});

