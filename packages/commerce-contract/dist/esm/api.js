import { z } from 'zod';
import { cartLineSchema } from './public.js';
export const COMMERCE_CONTRACT_VERSION = 1;
export const commerceErrorCodeSchema = z.enum([
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
    'INSUFFICIENT_STOCK',
    'INVENTORY_UNAVAILABLE',
    'RESERVATION_EXPIRED',
    'INTERNAL_ERROR',
]);
export const commerceApiErrorSchema = z.object({
    code: commerceErrorCodeSchema,
    message: z.string().min(1),
    retryable: z.boolean(),
    fieldErrors: z.record(z.array(z.string())).optional(),
}).strict();
export const commerceApiFailureSchema = z.object({
    contractVersion: z.literal(COMMERCE_CONTRACT_VERSION),
    type: z.literal('commerce_error'),
    error: commerceApiErrorSchema,
}).strict();
export const commerceApiSuccessSchema = (result) => z.object({
    contractVersion: z.literal(COMMERCE_CONTRACT_VERSION),
    type: z.string().min(1),
    result,
}).strict();
export const catalogSortSchema = z.enum(['featured', 'price-asc', 'price-desc', 'title-asc', 'title-desc']);
export const catalogQuerySchema = z.object({
    q: z.string().trim().max(200).optional(),
    tag: z.string().trim().max(100).optional(),
    sort: catalogSortSchema.default('featured'),
    cursor: z.string().max(500).optional(),
    limit: z.number().int().min(1).max(100).default(24),
}).strict();
export const commerceUrlStateSchema = catalogQuerySchema.extend({
    variant: z.string().max(200).optional(),
}).strict();
export const cartQuoteRequestSchema = z.object({
    storeSlug: z.string().min(1),
    lines: z.array(cartLineSchema).min(1).max(100),
}).strict();
export const checkoutRequestSchema = cartQuoteRequestSchema.extend({
    checkoutAttemptId: z.string().uuid(),
    promotionCode: z.string().trim().max(100).optional(),
    customerEmail: z.string().email().optional(),
    termsAccepted: z.boolean().optional(),
}).strict();
export function parseCatalogQuery(params) {
    const limit = params.get('limit');
    return catalogQuerySchema.parse({
        ...(params.get('q') ? { q: params.get('q') } : {}),
        ...(params.get('tag') ? { tag: params.get('tag') } : {}),
        ...(params.get('sort') ? { sort: params.get('sort') } : {}),
        ...(params.get('cursor') ? { cursor: params.get('cursor') } : {}),
        ...(limit ? { limit: Number(limit) } : {}),
    });
}
export function encodeCatalogQuery(input) {
    const query = catalogQuerySchema.parse(input);
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
export function parseCommerceUrlState(params) {
    return commerceUrlStateSchema.parse({
        ...parseCatalogQuery(params),
        ...(params.get('variant') ? { variant: params.get('variant') } : {}),
    });
}
export function encodeCommerceUrlState(input) {
    const state = commerceUrlStateSchema.parse(input);
    const { variant, ...catalog } = state;
    const params = encodeCatalogQuery(catalog);
    if (variant)
        params.set('variant', variant);
    return params;
}
//# sourceMappingURL=api.js.map