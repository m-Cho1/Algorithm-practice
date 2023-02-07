/*
  - Convert a hash into an array. Nothing more, Nothing less.

  {name: 'Jeremy', age: 24, role: 'Software Engineer'}
  should be converted into

  [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
  Note: The output array should be sorted alphabetically by key name.
*/

function convertHashToArray(hash) {
  const result = Object.entries(hash);
  return result.sort();
}

console.log("convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}) will return [['age', 24], ['name', 'Jeremy'], ['role', 'Software Engineer']] => ", convertHashToArray({ name: 'Jeremy', age: 24, role: 'Software Engineer' }));
