/* 
 * task06 - Function that outputs numbers from an array 
 * that start with the digits 1, 2 or 5.
 */
function task06() {
  let arr = [10, 20, 30, 50, 235, 3000];

  for (let i = 0; i < arr.length; i++) {
    // Convert the number to a string for character access
    let num = String(arr[i])
      , char = num[0];

    // Check if the number starts with 1, 2, or 5
    if (char == 1 || char == 2 || char == 5) {
      console.log(num);
    }
  }
};
