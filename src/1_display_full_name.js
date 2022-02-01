// module.exports = function displayFullName() {
//   // TODO Implement me.
// };

function displayFullName(fullName) {
  // TODO Implement me.
  let allNames = fullName.split(' ');
  let lastName = allNames[allNames.length - 1];
  let firstNames = allNames.slice(0, allNames.length - 1).join(' ');
  console.log(`My name is ${lastName}, ${firstNames} ${lastName}`);
  return (`My name is ${lastName}, ${firstNames} ${lastName}`);
};

module.exports = displayFullName;



/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(displayFullName("James Bond"), "My name is Bond, James Bond");
verify(displayFullName("Ada Lovelace"), "My name is Lovelace, Ada Lovelace");
verify(displayFullName("Salvador Felipe Jacinto Dalí"), "My name is Dalí, Salvador Felipe Jacinto Dalí");