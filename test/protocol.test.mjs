import assert from 'node:assert/strict';
import test from 'node:test';

import {
  BUILDER_PROTOCOL_VERSION,
  builderEventTypes,
  getBuilderProtocolVersion,
  isBuilderEventType,
  isBuilderMessage,
} from '../dist/esm/index.js';

const config = { productType: 'digital-business-card', blocks: [] };

test('recognizes the complete current event vocabulary', () => {
  assert.equal(Object.values(builderEventTypes).length, 12);
  for (const type of Object.values(builderEventTypes)) assert.equal(isBuilderEventType(type), true);
  assert.equal(isBuilderEventType('ATAP_BUILDER_UNKNOWN'), false);
});

test('requires the current protocol version', () => {
  const current = { type: builderEventTypes.ready, protocolVersion: BUILDER_PROTOCOL_VERSION };
  const missing = { type: builderEventTypes.ready };
  const unsupported = { type: builderEventTypes.ready, protocolVersion: 2 };

  assert.equal(getBuilderProtocolVersion(current), BUILDER_PROTOCOL_VERSION);
  assert.equal(isBuilderMessage(current), true);
  assert.equal(getBuilderProtocolVersion(missing), null);
  assert.equal(isBuilderMessage(missing), false);
  assert.equal(getBuilderProtocolVersion(unsupported), null);
  assert.equal(isBuilderMessage(unsupported), false);
});

test('validates config and state payloads', () => {
  const protocolVersion = BUILDER_PROTOCOL_VERSION;
  assert.equal(isBuilderMessage({ type: builderEventTypes.apply, protocolVersion, config }), true);
  assert.equal(isBuilderMessage({ type: builderEventTypes.apply, protocolVersion }), false);
  assert.equal(isBuilderMessage({ type: builderEventTypes.init, protocolVersion, config }), false);
  assert.equal(isBuilderMessage({
    type: builderEventTypes.init,
    protocolVersion,
    config,
    draftState: 'saved-draft',
  }), true);
  assert.equal(isBuilderMessage({ type: builderEventTypes.state, protocolVersion, draftState: 'invalid' }), false);
});

test('requires complete asset success metadata', () => {
  assert.equal(isBuilderMessage({
    type: builderEventTypes.assetSelectSuccess,
    protocolVersion: BUILDER_PROTOCOL_VERSION,
    requestId: 'request-1',
    url: 'https://assets.example/image.png',
    key: 'assets/image.png',
    contentType: 'image/png',
  }), true);

  assert.equal(isBuilderMessage({
    type: builderEventTypes.assetSelectSuccess,
    protocolVersion: BUILDER_PROTOCOL_VERSION,
    requestId: 'request-1',
    url: 'https://assets.example/image.png',
  }), false);
});

test('validates request correlation and finite scroll payloads', () => {
  const protocolVersion = BUILDER_PROTOCOL_VERSION;
  assert.equal(isBuilderMessage({
    type: builderEventTypes.assetSelectRequest,
    protocolVersion,
    requestId: 'request-1',
    productType: 'digital-business-card',
    mediaKind: 'image',
  }), true);
  assert.equal(isBuilderMessage({ type: builderEventTypes.assetSelectRequest, protocolVersion }), false);
  assert.equal(isBuilderMessage({ type: builderEventTypes.scroll, protocolVersion, scrollTop: 120 }), true);
  assert.equal(isBuilderMessage({
    type: builderEventTypes.scroll,
    protocolVersion,
    scrollTop: Number.NaN,
  }), false);
});
