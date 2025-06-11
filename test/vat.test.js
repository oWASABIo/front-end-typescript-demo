const assert = require('assert');
const { calculateVAT } = require('../dist/vat');

const result = calculateVAT(100);
assert.strictEqual(result, 7, 'calculateVAT should return 7% of the given amount');
console.log('All tests passed.');
