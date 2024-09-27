/* 
 * task07 - Function that takes a weight input from the user and provides a recommendation 
 * based on the weight value:
 *   - If the weight is less than 4 kg, the recommendation is "It's time for a snack".
 *   - If the weight is between 4 kg and 5.5 kg (inclusive), the recommendation is "Weight is normal".
 *   - If the weight is greater than 5.5 kg, the recommendation is "It's time for training".
 */
function task07() {
  const weight = prompt('Weight:');
  let recommendation = null;

  // Convert weight input to a number.
  const wgh = Number(weight);

  // Determine the recommendation based on weight value.
  if (wgh < 4) {
      recommendation = 'It\'s time for a snack';
  } else if (wgh >= 4 && wgh <= 5.5) {
      recommendation = 'Weight is normal';
  } else {
      recommendation = 'It\'s time for training';
  }

  // Log the recommendation to the console.
  console.log(recommendation);
}
