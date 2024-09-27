/* 
 * task04 - Function that modifies an array of names in two ways: 
 *   1. It changes the original array.
 *   2. It creates a new array without modifying the original.
 */
function task04() {
  const names = ['Сашко', 'Петрик', 'Оксана'];
  console.log("Original array: " + names);

  // Modify the original array.
  names[0] = 'Оксана';
  names[1] = 'Олег';
  console.log("Changing the original array: " + names);        // ['Оксана', 'Олег', 'Сашко']

  // Create a new array without changing the original.
  const originalNames = ['Сашко', 'Петрик', 'Оксана'];
  const newNames = ['Оксана', 'Олег', originalNames[0]];
  console.log("WITHOUT changing the original array: " + newNames); // ['Оксана', 'Олег', 'Сашко']
}
