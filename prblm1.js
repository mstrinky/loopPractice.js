for (i=1;i<=100;i++){
    //  console.log(i);
    if( i%3===0 && i%5===0){
        console.log('FIZZBUZZ');
    }
    else if(i%5===0){
        console.log('BUZZ');
    }
    else if(i%3===0){
        console.log('FIZZ');
    }
    else{
        console.log(i);
    }
}