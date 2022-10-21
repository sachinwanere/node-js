let num=50;
let isPrime;
for( let i=2;i<=num;i++){
    for( let j=2;j<i;j++){
        isPrime='Yes';
        if(i%j==0){
            isPrime='No';
            break;
        }
        
    }if(isPrime=='Yes'){
        console.log(i)
    }
    
}     





