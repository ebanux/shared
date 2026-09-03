import assert from 'node:assert/strict';
import test from 'node:test';

import {
  COMMERCE_CONTRACT_VERSION,
  catalogQuerySchema,
  cartQuoteSchema,
  checkoutSessionResultSchema,
  commerceApiFailureSchema,
  encodeCatalogQuery,
  encodeCommerceUrlState,
  parseCommerceUrlState,
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
  for (const code of ['INSUFFICIENT_STOCK', 'INVENTORY_UNAVAILABLE', 'RESERVATION_EXPIRED']) {
    assert.equal(commerceApiFailureSchema.safeParse({
      contractVersion: COMMERCE_CONTRACT_VERSION, type: 'commerce_error',
      error: { code, message: 'Inventory state changed.', retryable: false },
    }).success, true);
  }
});

test('normalizes catalog URL state', () => {
  const query = catalogQuerySchema.parse({ q: 'cards', sort: 'price-asc' });
  assert.equal(query.limit, 24);
  assert.equal(encodeCatalogQuery(query).toString(), 'q=cards&sort=price-asc');
});

test('round-trips commerce URL state including selected variants', () => {
  const state = parseCommerceUrlState(new URLSearchParams('q=card&sort=price-desc&variant=blue'));
  assert.equal(state.variant, 'blue');
  assert.equal(encodeCommerceUrlState(state).get('variant'), 'blue');
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

test('validates checkout results and advanced quote details', () => {
  assert.equal(checkoutSessionResultSchema.safeParse({
    checkoutUrl: 'https://checkout.stripe.com/session', orderId: 'AT-123', orderToken: 'token',
  }).success, true);
  assert.equal(cartQuoteSchema.safeParse({
    storeSlug: 'qrlynk', currency: 'USD', subtotal: 1000, automaticDiscount: 0,
    shipping: 0, total: 1000, promotionCodeEligible: false, recurring: false,
    requiresShippingAddress: false, quotedAt: '2026-08-30T12:00:00.000Z',
    lines: [{
      clientLineId: 'line-1', variantId: 'variant-1', quantity: 2, personalization: {},
      subtotal: 1000, discount: 0, shipping: 0, total: 1000, issues: [],
      pricing: { model: 'tiered', mode: 'volume', tiers: [{ upTo: null, unitAmount: 500 }] },
      tierCalculation: { mode: 'volume', quantity: 2, total: 1000 },
    }],
  }).success, true);
  assert.equal(cartQuoteSchema.safeParse({
    storeSlug: 'qrlynk', currency: 'USD', subtotal: 1000, automaticDiscount: 0,
    shipping: 0, total: 1000, promotionCodeEligible: false, recurring: false,
    requiresShippingAddress: false, quotedAt: '2026-08-30T12:00:00.000Z',
    lines: [{
      clientLineId: 'line-1', variantId: 'variant-1', quantity: 1, personalization: {}, stockStatus: 'low_stock',
      availableToSell: 2, subtotal: 1000, discount: 0, shipping: 0, total: 1000, issues: [],
      pricing: { model: 'fixed', amount: 1000 },
    }],
  }).success, false);
});
