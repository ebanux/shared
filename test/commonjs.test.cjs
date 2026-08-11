const assert = require('node:assert/strict');
const test = require('node:test');

const {
  BUILDER_PROTOCOL_VERSION,
  builderEventTypes,
  isBuilderMessage,
} = require('../dist/cjs/index.js');

test('exports the contract through CommonJS', () => {
  assert.equal(BUILDER_PROTOCOL_VERSION, 1);
  assert.equal(isBuilderMessage({ type: builderEventTypes.ready }), true);
});
