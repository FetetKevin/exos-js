const palindromes = function (string) {
    string = string.toLowerCase().replace(/[\W_]/g, '');
    let rev_str = string.split('').reverse().join('');

    if(string === rev_str){
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
