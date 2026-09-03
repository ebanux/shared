const assert = require('node:assert/strict');
const test = require('node:test');

test('exports the inventory contract through CommonJS', () => {
  const contract = require('../dist/cjs/index.js');
  assert.equal(contract.INVENTORY_CONTRACT_VERSION, 1);
});
