Array.prototype.myEach = function(givenFunction){ //scope of givenFunction
    for(let i=0; i < this.length; i++){
        givenFunction(this[i]);
    }
}
// chainable? TA
let array = [1,2,3];

// array.myEach( (el) => { el + 1});

// console.log(array);

Array.prototype.myMap = function(givenFunction){
    const arrayMap = [];
    for(let i=0; i < this.length; i++){
        arrayMap.push(givenFunction(this[i]));
    }
    return arrayMap;
}

// let newArr = array.myMap( (el) => (el + 2) );

// (el) => (el + 2) 

// function(el) {
//     return el + 2;
// }

console.log(newArr);
// [1,2,3,4] 1 + 2 = 3 3 + 3 = 6 6 + 4 = 10
Array.prototype.myReduce = function(givenFunction, initialValue){
    let newArray = this;
    if (initialValue === undefined){
        initialValue = this[0]; //scope of init ???
        newArray = this.slice(1);
    }
    let acc = initialValue;
    for (let i = 0; i < newArray.length; i++) {
        acc = givenFunction(newArray[i], acc);
    }

    return acc;
}

let sum = array.myReduce(function(acc, el) {
    return acc + el;
});

console.log(sum);