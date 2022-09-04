const caesar = function(text, int) {
    let code;
    let arr_code = [];
    let arr_final = [];
    if(text.length == 1) {
        code = text.codePointAt(0);
        code += int;
        return String.fromCharCode(code);
    }
    else {
        for( let i = 0; i< text.length; i++) {
            arr_code.push(text.codePointAt(i)) 
        }
        for(let el in arr_code) {
            arr_final.push(String.fromCharCode(arr_code[el] + int));
        }
        return arr_final.join('');
    }

};

// Do not edit below this line
module.exports = caesar;
