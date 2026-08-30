import assert from 'node:assert/strict';
import test from 'node:test';

import {
  COMMERCE_CONTRACT_VERSION,
  catalogQuerySchema,
  commerceApiFailureSchema,
  encodeCatalogQuery,
  priceDefinitionSchema,
  productDetailSchema,
} from '../dist/esm/index.js';

test('accepts each valid pricing model and rejects mixed definitions', () => {
  assert.equal(priceDefinitionSchema.parse({ model: 'fixed', amount: 1299 }).amount, 1299);
  assert.equal(priceDefinitionSchema.parse({
    model: 'recurring', amount: 999, interval: 'month', intervalCount: 1,
  }).model, 'recurring');
  assert.equal(priceDefinitionSchema.safeParse({
    model: 'fixed', amount: 1299, minimum: 500,
  }).success, false);
});

test('requires the current contract version and structured errors', () => {
  assert.equal(commerceApiFailureSchema.safeParse({
    contractVersion: COMMERCE_CONTRACT_VERSION,
    type: 'commerce_error',
    error: { code: 'PRICE_CHANGED', message: 'Price changed.', retryable: true },
  }).success, true);
  assert.equal(commerceApiFailureSchema.safeParse({
    contractVersion: 2,
    type: 'commerce_error',
    error: { code: 'PRICE_CHANGED', message: 'Price changed.', retryable: true },
  }).success, false);
});

test('normalizes catalog URL state', () => {
  const query = catalogQuerySchema.parse({ q: 'cards', sort: 'price-asc' });
  assert.equal(query.limit, 24);
  assert.equal(encodeCatalogQuery(query).toString(), 'q=cards&sort=price-asc');
});

test('rejects private and unknown product fields', () => {
  const result = productDetailSchema.safeParse({
    id: 'product-1', storeSlug: 'qrlynk', slug: 'card', title: 'Card', tags: [],
    availability: 'in_stock', badges: [], description: '', images: [], brand: 'QRLynk',
    condition: 'new', personalizationFields: [], shipping: { enabled: false }, variants: [],
    stripeAccountId: 'acct_private',
  });
  assert.equal(result.success, false);
});
