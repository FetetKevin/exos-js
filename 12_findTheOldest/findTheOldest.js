const findTheOldest = function(arr) {

    let ages = [];
    let age = 0;
    for(data in arr) {
        if(!arr[data].yearOfDeath) {
            let date = new Date().getFullYear();
            age = date - arr[data].yearOfBirth;
        }else{
            age = arr[data].yearOfDeath - arr[data].yearOfBirth;
        }      
        ages.push(age);
    }

    let oldest = 0;
    let index = 0; 
    for( let i = 0; i < ages.length; i++) {
        if(oldest < ages[i]){
            oldest = ages[i];
            index = i; 
        }
    }
    
    return arr[index];
};

// Do not edit below this line
module.exports = findTheOldest;
