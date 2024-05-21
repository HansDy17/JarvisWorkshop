displayElement = document.querySelector('#display');

num1 = '';
num2 = '';
result = '';

function calculate (num1, num2, op) {
    switch(op){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case 'x':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return
    }
}


function insertVal(num) {
    if(displayElement.value === '0'){
        displayElement.value = num;
    }
    else{
        displayElement.value += num;
    }    
}

function clearDisplay(){
    displayElement.value = '0';
}