for (i=1;i<=100;i++){
    //  console.log(i);
    if( i%3===0 && i%5===0){
        console.log(i + " " + "FIZZBUZZ");
    }
    else if(i%5===0){
        console.log(i + " " + 'BUZZ');
    }
    else if(i%3===0){
        console.log( i + " " + 'FIZZ');
    }
    else{
        console.log(i);
    }
}