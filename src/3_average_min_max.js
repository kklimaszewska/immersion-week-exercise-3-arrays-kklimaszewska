

function averageMinMax(numbers) {
  let min = numbers[0];
  let max = numbers[0];
  let suma = 0;
  for (let i=0; i<numbers.length; i++) {
    if (numbers[i] < min) {min = numbers[i]};
    if (numbers[i] > max) {max = numbers[i]};
    suma += numbers[i];
  }
  let average = Math.floor(suma/numbers.length);
  console.log(`Min: ${min} Max: ${max} Average: ${average}`);
  return (`Min: ${min} Max: ${max} Average: ${average}`);
}

module.exports = averageMinMax;
/**Weryfikacja */
function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(averageMinMax([-42, 0, 42]), 'Min: -42 Max: 42 Average: 0');
verify(averageMinMax([30, 20, 100]), 'Min: 20 Max: 100 Average: 50');
verify(averageMinMax([-23, -4, -12]), 'Min: -23 Max: -4 Average: -13');