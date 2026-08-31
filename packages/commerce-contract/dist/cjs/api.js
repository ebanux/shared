"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutRequestSchema = exports.cartQuoteRequestSchema = exports.commerceUrlStateSchema = exports.catalogQuerySchema = exports.catalogSortSchema = exports.commerceApiSuccessSchema = exports.commerceApiFailureSchema = exports.commerceApiErrorSchema = exports.commerceErrorCodeSchema = exports.COMMERCE_CONTRACT_VERSION = void 0;
exports.parseCatalogQuery = parseCatalogQuery;
exports.encodeCatalogQuery = encodeCatalogQuery;
exports.parseCommerceUrlState = parseCommerceUrlState;
exports.encodeCommerceUrlState = encodeCommerceUrlState;
const zod_1 = require("zod");
const public_js_1 = require("./public.js");
exports.COMMERCE_CONTRACT_VERSION = 1;
exports.commerceErrorCodeSchema = zod_1.z.enum([
    'VALIDATION_FAILED',
    'UNAUTHORIZED',
    'NOT_FOUND',
    'CROSS_STORE_CART',
    'PRODUCT_UNAVAILABLE',
    'VARIANT_UNAVAILABLE',
    'PRICE_CHANGED',
    'CHECKOUT_FINGERPRINT_CONFLICT',
    'CHECKOUT_ATTEMPT_EXPIRED',
    'TERMS_REQUIRED',
    'PROMOTION_CODE_INVALID',
    'PAYMENT_ACCOUNT_UNAVAILABLE',
    'SUBSCRIPTION_CART_INVALID',
    'INTERNAL_ERROR',
]);
exports.commerceApiErrorSchema = zod_1.z.object({
    code: exports.commerceErrorCodeSchema,
    message: zod_1.z.string().min(1),
    retryable: zod_1.z.boolean(),
    fieldErrors: zod_1.z.record(zod_1.z.array(zod_1.z.string())).optional(),
}).strict();
exports.commerceApiFailureSchema = zod_1.z.object({
    contractVersion: zod_1.z.literal(exports.COMMERCE_CONTRACT_VERSION),
    type: zod_1.z.literal('commerce_error'),
    error: exports.commerceApiErrorSchema,
}).strict();
const commerceApiSuccessSchema = (result) => zod_1.z.object({
    contractVersion: zod_1.z.literal(exports.COMMERCE_CONTRACT_VERSION),
    type: zod_1.z.string().min(1),
    result,
}).strict();
exports.commerceApiSuccessSchema = commerceApiSuccessSchema;
exports.catalogSortSchema = zod_1.z.enum(['featured', 'price-asc', 'price-desc', 'title-asc', 'title-desc']);
exports.catalogQuerySchema = zod_1.z.object({
    q: zod_1.z.string().trim().max(200).optional(),
    tag: zod_1.z.string().trim().max(100).optional(),
    sort: exports.catalogSortSchema.default('featured'),
    cursor: zod_1.z.string().max(500).optional(),
    limit: zod_1.z.number().int().min(1).max(100).default(24),
}).strict();
exports.commerceUrlStateSchema = exports.catalogQuerySchema.extend({
    variant: zod_1.z.string().max(200).optional(),
}).strict();
exports.cartQuoteRequestSchema = zod_1.z.object({
    storeSlug: zod_1.z.string().min(1),
    lines: zod_1.z.array(public_js_1.cartLineSchema).min(1).max(100),
}).strict();
exports.checkoutRequestSchema = exports.cartQuoteRequestSchema.extend({
    checkoutAttemptId: zod_1.z.string().uuid(),
    promotionCode: zod_1.z.string().trim().max(100).optional(),
    customerEmail: zod_1.z.string().email().optional(),
    termsAccepted: zod_1.z.boolean().optional(),
}).strict();
function parseCatalogQuery(params) {
    const limit = params.get('limit');
    return exports.catalogQuerySchema.parse({
        ...(params.get('q') ? { q: params.get('q') } : {}),
        ...(params.get('tag') ? { tag: params.get('tag') } : {}),
        ...(params.get('sort') ? { sort: params.get('sort') } : {}),
        ...(params.get('cursor') ? { cursor: params.get('cursor') } : {}),
        ...(limit ? { limit: Number(limit) } : {}),
    });
}
function encodeCatalogQuery(input) {
    const query = exports.catalogQuerySchema.parse(input);
    const params = new URLSearchParams();
    if (query.q)
        params.set('q', query.q);
    if (query.tag)
        params.set('tag', query.tag);
    if (query.sort !== 'featured')
        params.set('sort', query.sort);
    if (query.cursor)
        params.set('cursor', query.cursor);
    if (query.limit !== 24)
        params.set('limit', String(query.limit));
    return params;
}
function parseCommerceUrlState(params) {
    return exports.commerceUrlStateSchema.parse({
        ...parseCatalogQuery(params),
        ...(params.get('variant') ? { variant: params.get('variant') } : {}),
    });
}
function encodeCommerceUrlState(input) {
    const state = exports.commerceUrlStateSchema.parse(input);
    const { variant, ...catalog } = state;
    const params = encodeCatalogQuery(catalog);
    if (variant)
        params.set('variant', variant);
    return params;
}
//# sourceMappingURL=api.js.map