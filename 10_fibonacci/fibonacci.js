const fibonacci = function(n) {
    n = parseFloat(n);
    if(n < 0) {
        return "OOPS"
    }
    else{
        const result = [0, 1];

        for (let i = 2; i <= n; i++) {
            const a = result[(i - 1)];
            const b = result[(i - 2)];
            result.push(a + b);
        }
        console.log("Result Array: " + result);
        return result[n];
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
