import assert from 'node:assert/strict';
import test from 'node:test';

import {
  INVENTORY_CONTRACT_VERSION,
  inventoryAdjustmentRequestSchema,
  inventoryApiSuccessSchema,
  publicInventoryStatusSchema,
  inventoryItemSchema,
} from '../dist/esm/index.js';

test('validates versioned inventory responses', () => {
  assert.equal(inventoryApiSuccessSchema(publicInventoryStatusSchema).parse({
    contractVersion: INVENTORY_CONTRACT_VERSION,
    type: 'inventory_public_status',
    result: { name: 'Widget', stockStatus: 'low_stock', updatedAt: 1 },
  }).result.stockStatus, 'low_stock');
});

test('requires idempotent integer adjustments', () => {
  assert.throws(() => inventoryAdjustmentRequestSchema.parse({ operationId: 'bad', quantityDelta: 1.5, reason: '' }));
});

test('merchant items reject workspace identifiers', () => {
  assert.throws(() => inventoryItemSchema.parse({
    id: 'item-1', userId: 'private-workspace', name: 'Widget', state: 'active', trackingMode: 'quantity',
    lowStockThreshold: 2, stockStatus: 'in_stock', createdAt: 1, updatedAt: 1,
  }));
});
