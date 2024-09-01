function isEven(n){
    n = Math.abs(n)
    return (n == 0) ? true : (n == 1) ? false : isEven(n-2);
}

function iterativeIsEven(n){
    n = Math.abs(n)
    while (n > 1){
        n -= 2
    }
    return (n == 0);
}

function isOdd(n){
    n = Math.abs(n)
    return (n == 0) ? false : (n == 1) ? true : isOdd(n-2);
}


console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))
console.log(isEven(-2))

console.log(iterativeIsEven(50))
console.log(iterativeIsEven(75))
console.log(iterativeIsEven(-1))
console.log(iterativeIsEven(-2))

console.log(isOdd(50))
console.log(isOdd(75))
console.log(isOdd(-1))
console.log(isOdd(-2))
