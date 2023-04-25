// const A = [-1, 1, 1, 1, 3, 6, 2, 4, 5, 7, 8, 9, 10, 12];

// // function positives(num) {
// //     return num > 0;
// // }
// // let posOnlyArray = A.filter(positives);
// // //console.log(posOnlyArray);

// // let sortedArray = posOnlyArray.sort(function(a, b){return a - b});
// // //console.log(sortedArray);

// // let uniqueArray = [...new Set(sortedArray)];
// // //console.log(uniqueArray);

// // let count = 1;

// // for (var i = 0; i !==count; i++) {
// //     while (uniqueArray[i] === count) {
// //         count++;
// //     };
// //         return count;
// // }
// //The above did not quite work but my thinking was clearer; the below works.

// function solution(A) {
//     function positives(value) {
//         for (let i = 0; i < A.length; i++) {
//             return value > 0;
//         }
//     }
//     console.log(A.filter(positives)); 
//      let count = 1;
    
//     while(A.indexOf(count) !== -1) {
//         count++;
//     };
//     return count;

// }
// console.log("The smallest missing integer is " + solution(A) + ".");   
const array1 = ["Cardiology", "Orthopaedics", "Neurology", "Cardiology", "Orthopaedics", "Cardiology"];
function solution(A) {
    
    let string1 = array1.toString();
    console.log(string1);
    // Implement your solution here
    /*
    Not sure what the question is asking.
    From the examples:
    Example A: Cardiology appears the most, and it's 3 times.
    So result is 3.
    Example B: all appear twice so result is 2.
    Example C: all appear once, so result is 1.
    So we want to count the iterations of each individual string.
    Then return the highest number of those.
    Start by converting array to string, then
    performing a global search for each one.
    */
}
solution();

