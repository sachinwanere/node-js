// When we declare variables outside the functions then the  scope of  variables are valid for all functions called as global scope 
let num1=5;
let num2=8;
let total;
function mult(){
    let total=num1*num2;
    console.log('mult :: ' +total)
}
function add(){
    let total=num1+num2;
    console.log('addition ::' +total)
}
function sub(){
    let total=num1-num2;
    console.log('sub:: ' +total)
}
function div(){
    let total=num1/num2;
    console.log('Division ::' +total )
}
div();
mult();
add();
sub();