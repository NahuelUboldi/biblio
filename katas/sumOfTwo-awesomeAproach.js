// Binary search approach
function solutionBinary(a, b, v) {
    'use strict';
    
    // It will be faster to iterate through the smaller array
    if (a.length > b.length) {
        const temp = a;
        a = b;
        b = temp;
    }
    
    // Sort the b array so that we can perform a binary search on it
    b.sort((x, y) => x - y);
    
    // For each number in a
    for (let i = 0; i < a.length; i++) {
        const desired = v - a[i];
        
        // Perform a binary search for the desired value on b
        let size = b.length,
            n = -Infinity,
            j = 0;
        while (size > 1) {
            size = Math.ceil(size / 2);
            j += n < desired ? size : -size;
            n = b[j];
            if (n == desired) return true;
        }
    }
    return false;
}

// Two pointers approach
function solutionPointers(a, b, v) {
    'use strict';
    const length = a.length;
    
    // Sort a and b so that we can iterate through them in order
    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);
    
    let i = 0,
        j = b.length - 1,
        x = a[i],
        y = b[j];
    while (i < length && j >= 0) {
        if (x + y < v) x = a[++i];
        else if (x + y > v) y = b[--j];
        else return true;
    }
    return false;
}

// Timer
function solution(a, b, v) {
    var result;
    console.time('Binary Search');
    result = solutionBinary(a, b, v);
    console.timeEnd('Binary Search');
    console.time('Two Pointers');
    result = solutionPointers(a, b, v);
    console.timeEnd('Two Pointers');
    return result;
}
const res = solution([1, 2, 3], [10, 20, 30, 40],42)
console.log(res)
/*
 * The two-pointer solution is faster for most cases.
 */
