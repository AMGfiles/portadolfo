
function oper(op) {    
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let result;
    
    switch(op) {
        case 1:  
        result = num1 + num2; 
        break;
        case 2:
        result = num1 - num2; 
        break;
        case 3:
        result = num1 * num2; 
        break;
        case 4: 
        result = num1 / num2; 
        break;
    }
    
    document.getElementById('res').innerHTML = 'El resultado es: ' + result;
}
    