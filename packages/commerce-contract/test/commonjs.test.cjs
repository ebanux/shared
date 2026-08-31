const assert = require('node:assert/strict');
const test = require('node:test');

const contract = require('../dist/cjs/index.js');

test('loads the CommonJS commerce contract', () => {
  assert.equal(contract.COMMERCE_CONTRACT_VERSION, 1);
  assert.equal(contract.priceDefinitionSchema.parse({ model: 'fixed', amount: 100 }).amount, 100);
});
