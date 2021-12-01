import {getInputs} from 'lib/getInput'

async function main() {
    console.log(await getInputs(1))
}

main();




/*
// My browser console solution

document.querySelector('pre').textContent.trim().split('\n').reduce((acc, curr) => {
    if (acc.prev < +curr) {
        console.log(`%c${curr}`, 'color:lime');
        acc.count += 1
        acc.prev = +curr;
    } else {
        console.log(`%c${curr}`, 'color:red')
        acc.prev = +curr;
    }
    acc.total += 1
    return acc
}, {total: 0, count: 0})

*/


/*
My browser console one-liner cuz why not 

document.querySelector('pre').textContent.trim().split('\n').reduce((acc, curr) => acc.prev < +curr ? {prev: +curr, count: acc.count + 1} : {prev: +curr, count: acc.count}, {total: 0, count: 0})

*/

// Problem 2

/*

(() => {
console.clear();
const arr = document.querySelector('pre').textContent.trim().split('\n');


function getWindowSum(index, arr) {   
    // if the sliding window can't be made, we're done here
    if (arr[index + 2] === undefined) {
        return null;
    }

    const values = [+arr[index], +arr[index + 1], +arr[index + 2]];
    
    return {sum: values.reduce((p, n) => p + n), index, values};
}

function compare(prev, next) {
    if (prev.sum < next.sum) {
        console.group('%cIncrement', 'color:lime');
        console.log(1, prev.values, prev.sum);
        console.log(2, next.values, next.sum);
        console.groupEnd();
        return true;
    }
    
    console.group('%cDecrement', 'color:red');
    console.log(1, prev.values, prev.sum);
    console.log(2, next.values, next.sum);
    console.groupEnd();
    return false;
}

let count = 0;
// Yay, unlike leetcode theres no weird edge cases, so we can just do this.
let prev = getWindowSum(0, arr);
let next;

for (let i = 1; i < arr.length; i++ ) {
    // if i is index of second to last (5588), we're done
    next = getWindowSum(i, arr);
    if(next === null) {
        return count;
    }
    
    if (compare(prev, next)) {
        count += 1;   
    }
    prev = next
    
}

})()

*/

/*
// Same as above but slimmed down to the necessary parts

(() => {
const arr = document.querySelector('pre').textContent.trim().split('\n');

function windowSum(index, arr) {   
    if (!arr[index + 2]) {
        return null;
    }
    return +arr[index] + +arr[index + 1] + +arr[index + 2];
}

let count = 0;
// Yay, unlike leetcode theres no weird edge cases, so we can just do this.
let prev = windowSum(0, arr);

for (let i = 1; i < arr.length; i++ ) {
    // if i is index of second to last (5588), we're done
    const next = windowSum(i, arr);
    if(next === null) {
        return count;
    }
    
    if (prev < next) {
        count += 1;   
    }
    prev = next
}

})()

*/