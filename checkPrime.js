// var n = 18;
// // num % 2 == 0;
// for(i = 2; i < n-1; i++){
//     console.log(i, n % i);
//     if(n % i == 0){
//         console.log('Not a prime number')
//         break;
//     }
// }

// var n = 77;
// // num % 2 == 0;
// for(i = 2; i < n-1; i++){
//     console.log(i, n % i);
//     if(n % i == 0){
//         console.log('Not a prime number')
//         break;
//     }
// }

var n = 79;
// num % 2 == 0;
for(i = 2; i < n; i++){
    // console.log(i, n % i);
    if(n % i == 0){
        console.log('Not a prime number')
        break;
    }
}
console.log('Your number is a prime number')