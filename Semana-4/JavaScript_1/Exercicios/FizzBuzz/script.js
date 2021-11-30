let res = fizzBuzz(20);

console.log(res)

function fizzBuzz(ent){
    if(typeof ent !== 'number'){
        return 'Não é um número';

    }
    if((ent % 3 === 0) && (ent % 5 === 0)){
        return "FizzBuzz"

    }
    if((ent % 3 === 0)){
        return "Fizz"
    }
    if((ent % 5 === 0)){
        return "Buzz"

    }
    return ent

}

