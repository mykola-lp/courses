/* 
 * task05 - Function that takes two numbers from the user and performs different actions
 * based on their values: 
 *   - If the first number is greater, it displays their sum.
 *   - If the numbers are equal, it alerts that the numbers are the same.
 *   - If the first number is less, it displays a poetic message.
 */
function task05() {
  const numOne = prompt('Enter first number:')
      , numTwo = prompt('Enter second number:');

  // Compare the two numbers and perform actions based on their values.
  if (numOne > numTwo) {
    alert(Number(numOne) + Number(numTwo));
  } else if (numOne === numTwo) {
    alert('The numbers are the same.');
  } else {
    alert(
      'Oh, the winds are mute, the tides do not carry '
      + 'Good tidings to us from Ukraine! '
      + 'Do the Cossacks meet, the Turk plan to harry? '
      + 'For news we are waiting in vain.'
      ); // Display a poetic message if the first number is less.
  }
};
