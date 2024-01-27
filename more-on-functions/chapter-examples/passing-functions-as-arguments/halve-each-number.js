let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()

function divideHalf (numb) {
    return numb / 2;
}

let halved = nums.map(divideHalf);

console.log(halved);

////////////////The block of code below does the same as above except we juse anonymous functionin the map method argument
let secHalved = nums.map(function(numb) {
    return numb /2;
})

console.log(secHalved);
