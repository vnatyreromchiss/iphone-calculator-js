let a = ''; // first number
let b = ''; // second number
let sign = '' //sign of operation
let finish = false; 

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '×', '÷'];

//screen
const out = document.querySelector('.calc-screen p');

function clearAll()  {
    a = ''; //first number and result
    b = '';//second number 
    sign = '';//sign
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll

document.querySelector('.buttons').onclick = (event) => {
    //click not on the button
   if(!event.target.classList.contains('btn')) return;
   //click on the button clearAll ac
   if(event.target.classList.contains('ac')) return; 
   

   out.textContent = '';

   //get click on the button
   const key = event.target.textContent;

   //if clicked button 0-9 or . (dot)
   if(digit.includes(key)){
       if(b === '' && sign === ''){
            a += key;
            out.textContent = a; 
       }
       else if(a!== '' && b !== '' && finish) {
           b = key;
           finish = false;
           out.textContent = b;

       }
       else {
           b += key;
           out.textContent = b;
       }
       
       return;
   }

   //if clicked buttons + - / X
   if(action.includes(key)){
    sign = key;
    out.textContent = sign;
    console.log(sign);
    return;
   }

   //if clicked =
   if (key === '=') {
       if (b === '') b = a;
       switch (sign) {
            case "+":
               a = (+a) + (+b);
               break;
            case "-":
               a = a - b;
               break;
            case "×":
               a = a * b;
               break;
            case "÷":
               if (b === '0') {
                  out.textContent = 'Error';
                  a = '';
                  b = '';
                  sign = '';
                  return;
               }
               a = a / b;
               break;   
       }
       finish = true;
       out.textContent = a;
   }

}





