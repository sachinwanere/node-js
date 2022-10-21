// When we declare the variable inside any particular function then this variable is only valid for that particular function.
function addition(){
    let num1=50;
    let num2=120;
    let total=num1+num2;
    console.log('Addition :: ' +total )
}
// let num1=20;
// let num2=20;
// let total;
// function mul(){
    // let total=num1*num2;
    // console.log('Mul :: ' +total )
// }
addition();
// mul();