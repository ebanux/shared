import assert from 'node:assert/strict';
import test from 'node:test';

import {
  BUILDER_PROTOCOL_VERSION,
  builderEventTypes,
  getBuilderProtocolVersion,
  isBuilderEventType,
  isBuilderMessage,
} from '../dist/index.js';

const config = { productType: 'digital-business-card', blocks: [] };

test('recognizes the complete current event vocabulary', () => {
  assert.equal(Object.values(builderEventTypes).length, 12);
  for (const type of Object.values(builderEventTypes)) assert.equal(isBuilderEventType(type), true);
  assert.equal(isBuilderEventType('ATAP_BUILDER_UNKNOWN'), false);
});

test('accepts legacy messages without a protocol version as version 1', () => {
  const message = { type: builderEventTypes.ready };
  assert.equal(getBuilderProtocolVersion(message), BUILDER_PROTOCOL_VERSION);
  assert.equal(isBuilderMessage(message), true);
});

test('rejects unsupported protocol versions', () => {
  const message = { type: builderEventTypes.ready, protocolVersion: 2 };
  assert.equal(getBuilderProtocolVersion(message), null);
  assert.equal(isBuilderMessage(message), false);
});

test('validates config and state payloads', () => {
  assert.equal(isBuilderMessage({ type: builderEventTypes.apply, config }), true);
  assert.equal(isBuilderMessage({ type: builderEventTypes.apply }), false);
  assert.equal(isBuilderMessage({ type: builderEventTypes.init, config }), true);
  assert.equal(isBuilderMessage({
    type: builderEventTypes.init,
    protocolVersion: 1,
    config,
    draftState: 'saved-draft',
  }), true);
  assert.equal(isBuilderMessage({ type: builderEventTypes.state, draftState: 'invalid' }), false);
});

test('preserves the current version 1 asset success compatibility', () => {
  assert.equal(isBuilderMessage({
    type: builderEventTypes.assetSelectSuccess,
    requestId: 'request-1',
    url: 'https://assets.example/image.png',
  }), true);

  assert.equal(isBuilderMessage({
    type: builderEventTypes.assetSelectSuccess,
    requestId: 'request-1',
  }), false);
});

test('validates request correlation and finite scroll payloads', () => {
  assert.equal(isBuilderMessage({
    type: builderEventTypes.assetSelectRequest,
    requestId: 'request-1',
    productType: 'digital-business-card',
    mediaKind: 'image',
  }), true);
  assert.equal(isBuilderMessage({ type: builderEventTypes.assetSelectRequest }), false);
  assert.equal(isBuilderMessage({ type: builderEventTypes.scroll, scrollTop: 120 }), true);
  assert.equal(isBuilderMessage({ type: builderEventTypes.scroll, scrollTop: Number.NaN }), false);
});
