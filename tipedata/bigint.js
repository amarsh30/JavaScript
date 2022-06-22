let postfix = 5;
console.log(postfix++); /* Output: 5 */
console.log(postfix); /* Output: 6 */

let prefix = 5;
console.log(++prefix); /* Output: 6 */

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

// /* Output:
// 1234567890123456789012345678901234567890n
// 1.2345678901234568e+39
// */

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

// /* Output:
// 7n
// 3n
// 10n