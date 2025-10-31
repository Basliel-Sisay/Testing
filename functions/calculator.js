function calc(a,b, operator){
    // a function that takes two numbers and an operator
    if(operator === '+'){
        //used number () because javaScript to change string addition into number addition
        return Number(a)+ Number(b);
    }
    else if(operator === '-'){
        return a-b;
    }
    else if(operator === '/'){
        if( b===0){
            //throw an error b aka the denominator is 0 because numbers can't be divided by zero
            throw new Error('Error you can not divide a number with zero');
        }
        //if not zero divide the numbers
        return a/b;
    }
    // if it is either * or x entered treat both signs as multiplication sign
    else if( operator === '*' || operator === 'x'){ 
        return a*b;
    }
    //if the operator is beside these four throw error 
    else{
        throw new Error('you have entered invalid operator');
    }
}
module.exports= calc;