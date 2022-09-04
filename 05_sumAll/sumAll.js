const sumAll = function(nb1, nb2) {
//     let stockage = 0;

//     if(nb1 <= 0 || nb2 <= 0) {
//         return 'ERROR'
//     }
//     // else if(nb2.constructor === Array || nb2.constructor === String)
//     // else if(typeof(nb1) == 'string' || typeof(nb2) == 'string') {
//     //     return 'ERROR'
//     // }
//     // else if(typeof(nb1) == 'object' || typeof(nb2) == 'object' ){
//     //     return 'ERROR'
//     // } 
//     else if(typeof nb1 != 'number' || typeof nb2 != 'number') {
//         return 'ERROR'
//     }
//     else {
//        for(let i = 0; i< nb2; i++)
//         {
//             stockage += nb1
//             nb1 ++
//         }
//         if(nb2 < 2) {
//             nb1 = 123
//             nb2 = 62
//             stockage = nb1 * nb2
//         } 
//     }
//     return stockage
// };

let stockage = 0;
let bigger_value = Math.max(nb1, nb2);
let smaller_value = Math.min(nb1, nb2);

if(nb1 <= 0 || nb2 <= 0) {
    return 'ERROR'
}
else if(typeof nb1 != 'number' || typeof nb2 != 'number') {
    return 'ERROR'
}
else {
    for(let i = smaller_value; i <= bigger_value; i++) {
        stockage += i
    }
}
return stockage
};

// Do not edit below this line
module.exports = sumAll;
