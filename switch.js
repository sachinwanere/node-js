let a='B';
switch(a)
{
    case 'A' : 
    console.log('You Selected A')
    let b=1;
    switch(b)
    {
        case 1:
            console.log('You Selected 1')
            break
        case 2:    
            console.log('You Selected 2')
            break
    }
    break
     
    case 'B':
        console.log('You Selected B')
        let c=4;
        switch(c){
            case 3:
                console.log('You Selected 2')
                break
            case 4:    
            console.log('You Selected 3')
            break
        }
        break
}