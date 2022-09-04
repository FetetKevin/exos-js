const getTheTitles = function(books) {

    // let keys = ['title'],
    // result = [];

    // for (let i = 0; i < books.length; i ++) {
    // // Get the current object to be processed
    //     let currentObject = books[i];
    //     for (let j = 0; j < keys.length; j ++) {
    //         // Get the current key to be picked from the object
    //         let currentKey = keys[j];
    //         // Get the value corresponding to the key from the object and
    //         // push it to the array
    //         result.push(currentObject[currentKey]);
    //     }
    // }
    // return result

    let arr = [];
    for(let i = 0; i < books.length; i++) {
        arr.push(books[i].title)
    }
    return arr;
}
// Do not edit below this line
module.exports = getTheTitles;
