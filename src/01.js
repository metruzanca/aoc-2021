function day1Part1(input) {
    return input.split('\n').reduce((acc, curr) => {
        if (acc.prev < +curr) {
            acc.count += 1
            acc.prev = +curr;
        } else {
            acc.prev = +curr;
        }
        return acc
    }, {count: 0})
}

if(window) day1Part1(document.querySelector('pre').innerText.trim())


function day1Part2(input) {
    const arr = input.split('\n');

    function windowSum(index, arr) {   
        if (!arr[index + 2]) {
            return null;
        }
        return +arr[index] + +arr[index + 1] + +arr[index + 2];
    }
    
    let count = 0;
    let prev = windowSum(0, arr);
    
    for (let i = 1; i < arr.length; i++ ) {
        const next = windowSum(i, arr);
        if(next === null) {
            return count;
        }
        
        if (prev < next) {
            count += 1;   
        }
        prev = next
    }
}

if(window) day1Part2(document.querySelector('pre').innerText.trim())