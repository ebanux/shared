"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderStatusSchema = exports.subscriptionPortalResultSchema = exports.checkoutSessionResultSchema = exports.collectionListResponseSchema = exports.collectionDetailSchema = exports.catalogResponseSchema = exports.cartQuoteSchema = exports.quotedCartLineSchema = exports.quoteIssueSchema = exports.cartLineSchema = exports.storefrontStoreSchema = exports.collectionSummarySchema = exports.productDetailSchema = exports.catalogProductCardSchema = exports.productVariantSchema = exports.commerceBadgeSchema = exports.personalizationFieldSchema = exports.personalizationValuesSchema = exports.personalizationValueSchema = exports.stockStatusSchema = exports.availabilitySchema = void 0;
const zod_1 = require("zod");
const pricing_js_1 = require("./pricing.js");
exports.availabilitySchema = zod_1.z.enum(['in_stock', 'out_of_stock', 'preorder', 'unavailable']);
exports.stockStatusSchema = zod_1.z.enum(['untracked', 'in_stock', 'low_stock', 'out_of_stock']);
exports.personalizationValueSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.number().finite()]);
exports.personalizationValuesSchema = zod_1.z.record(exports.personalizationValueSchema);
exports.personalizationFieldSchema = zod_1.z.object({
    id: zod_1.z.string().min(1),
    label: zod_1.z.string().min(1),
    type: zod_1.z.enum(['instruction', 'number', 'text']),
    required: zod_1.z.boolean().optional(),
    maxLength: zod_1.z.number().int().positive().optional(),
}).strict();
exports.commerceBadgeSchema = zod_1.z.object({
    kind: zod_1.z.enum(['availability', 'custom', 'customizable', 'savings']),
    label: zod_1.z.string().min(1).max(40),
    tone: zod_1.z.enum(['accent', 'neutral', 'warning']),
}).strict();
exports.productVariantSchema = zod_1.z.object({
    id: zod_1.z.string().min(1),
    name: zod_1.z.string().min(1),
    sku: zod_1.z.string().optional(),
    image: zod_1.z.string().url().optional(),
    availability: exports.availabilitySchema,
    stockStatus: exports.stockStatusSchema.optional(),
    quantityDiscounts: zod_1.z.array(pricing_js_1.quantityDiscountSchema),
    price: pricing_js_1.priceDefinitionSchema,
    currency: pricing_js_1.currencyCodeSchema,
}).strict();
exports.catalogProductCardSchema = zod_1.z.object({
    id: zod_1.z.string().min(1),
    storeSlug: zod_1.z.string().min(1),
    productCode: zod_1.z.string().optional(),
    publicUrl: zod_1.z.string().url().optional(),
    slug: zod_1.z.string().min(1),
    title: zod_1.z.string().min(1),
    image: zod_1.z.string().url().optional(),
    tags: zod_1.z.array(zod_1.z.string()),
    availability: exports.availabilitySchema,
    stockStatus: exports.stockStatusSchema.optional(),
    badges: zod_1.z.array(exports.commerceBadgeSchema).max(3),
    defaultVariantId: zod_1.z.string().optional(),
    pricing: pricing_js_1.pricingSummarySchema.nullable(),
    shipping: zod_1.z.object({ enabled: zod_1.z.boolean(), displayName: zod_1.z.string().optional() }).strict(),
}).strict();
exports.productDetailSchema = exports.catalogProductCardSchema.omit({ image: true, pricing: true }).extend({
    description: zod_1.z.string(),
    images: zod_1.z.array(zod_1.z.string().url()),
    brand: zod_1.z.string(),
    condition: zod_1.z.enum(['new', 'refurbished', 'used']),
    personalizationFields: zod_1.z.array(exports.personalizationFieldSchema),
    shipping: zod_1.z.object({
        enabled: zod_1.z.boolean(),
        displayName: zod_1.z.string().optional(),
        firstItem: pricing_js_1.minorAmountSchema.optional(),
        additionalItem: pricing_js_1.minorAmountSchema.optional(),
    }).strict(),
    variants: zod_1.z.array(exports.productVariantSchema),
    seo: zod_1.z.object({ title: zod_1.z.string().optional(), description: zod_1.z.string().optional() }).strict().optional(),
}).strict();
exports.collectionSummarySchema = zod_1.z.object({
    id: zod_1.z.string().min(1),
    slug: zod_1.z.string().min(1),
    title: zod_1.z.string().min(1),
    description: zod_1.z.string(),
    coverImage: zod_1.z.string().url().optional(),
    seo: zod_1.z.object({ title: zod_1.z.string().optional(), description: zod_1.z.string().optional() }).strict().optional(),
    showInNavigation: zod_1.z.boolean(),
    sortOrder: zod_1.z.number().int(),
}).strict();
const checkoutSettingsSchema = zod_1.z.object({
    billingAddressCollection: zod_1.z.enum(['auto', 'required']),
    terms: zod_1.z.object({ label: zod_1.z.string(), url: zod_1.z.string().url() }).strict().optional(),
    confirmationMessage: zod_1.z.string().optional(),
    supportEmail: zod_1.z.string().email().optional(),
    supportUrl: zod_1.z.string().url().optional(),
}).strict();
exports.storefrontStoreSchema = zod_1.z.object({
    slug: zod_1.z.string().min(1),
    displayName: zod_1.z.string().min(1),
    description: zod_1.z.string().optional(),
    logo: zod_1.z.string().url().optional(),
    currency: pricing_js_1.currencyCodeSchema,
    allowedShippingCountries: zod_1.z.array(zod_1.z.string()),
    presentation: zod_1.z.record(zod_1.z.unknown()).optional(),
    presentationVersion: zod_1.z.number().int().positive().optional(),
    presentationUpdatedAt: zod_1.z.number().optional(),
    navigationCollections: zod_1.z.array(exports.collectionSummarySchema.pick({ id: true, slug: true, title: true })).optional(),
    checkoutSettings: checkoutSettingsSchema.optional(),
}).strict();
exports.cartLineSchema = zod_1.z.object({
    clientLineId: zod_1.z.string().min(1),
    variantId: zod_1.z.string().min(1),
    quantity: zod_1.z.number().int().min(1).max(99),
    personalization: exports.personalizationValuesSchema,
    customerAmount: pricing_js_1.minorAmountSchema.optional(),
}).strict();
exports.quoteIssueSchema = zod_1.z.object({
    code: zod_1.z.string().min(1),
    message: zod_1.z.string().min(1),
    severity: zod_1.z.enum(['error', 'warning']),
    fieldId: zod_1.z.string().optional(),
}).strict();
exports.quotedCartLineSchema = exports.cartLineSchema.extend({
    productId: zod_1.z.string().optional(),
    productTitle: zod_1.z.string().optional(),
    productImage: zod_1.z.string().url().optional(),
    productCode: zod_1.z.string().optional(),
    variantName: zod_1.z.string().optional(),
    sku: zod_1.z.string().optional(),
    stockStatus: exports.stockStatusSchema.optional(),
    unitAmount: pricing_js_1.minorAmountSchema.optional(),
    currency: pricing_js_1.currencyCodeSchema.optional(),
    priceId: zod_1.z.string().optional(),
    personalizationLabels: zod_1.z.record(zod_1.z.string()).optional(),
    subtotal: pricing_js_1.minorAmountSchema,
    discount: pricing_js_1.minorAmountSchema,
    shipping: pricing_js_1.minorAmountSchema,
    total: pricing_js_1.minorAmountSchema,
    pricing: pricing_js_1.priceDefinitionSchema,
    issues: zod_1.z.array(exports.quoteIssueSchema),
    appliedDiscount: pricing_js_1.quantityDiscountSchema.optional(),
    tierCalculation: zod_1.z.object({
        mode: zod_1.z.enum(['graduated', 'volume']), quantity: zod_1.z.number().int().positive(), total: pricing_js_1.minorAmountSchema,
    }).strict().optional(),
    productionInstructions: zod_1.z.array(zod_1.z.object({
        fieldId: zod_1.z.string(), label: zod_1.z.string(), type: zod_1.z.enum(['instruction', 'number', 'text']),
        value: exports.personalizationValueSchema.optional(),
    }).strict()).optional(),
}).strict();
exports.cartQuoteSchema = zod_1.z.object({
    storeSlug: zod_1.z.string().min(1),
    currency: pricing_js_1.currencyCodeSchema,
    lines: zod_1.z.array(exports.quotedCartLineSchema),
    subtotal: pricing_js_1.minorAmountSchema,
    automaticDiscount: pricing_js_1.minorAmountSchema,
    shipping: pricing_js_1.minorAmountSchema,
    total: pricing_js_1.minorAmountSchema,
    promotionCodeEligible: zod_1.z.boolean(),
    recurring: zod_1.z.boolean(),
    requiresShippingAddress: zod_1.z.boolean(),
    quotedAt: zod_1.z.string().datetime(),
}).strict();
exports.catalogResponseSchema = zod_1.z.object({
    store: exports.storefrontStoreSchema,
    facets: zod_1.z.object({ tags: zod_1.z.array(zod_1.z.string()) }).strict(),
    items: zod_1.z.array(exports.catalogProductCardSchema),
    nextCursor: zod_1.z.string().optional(),
}).strict();
exports.collectionDetailSchema = zod_1.z.object({
    store: exports.storefrontStoreSchema,
    collection: exports.collectionSummarySchema,
    facets: zod_1.z.object({ tags: zod_1.z.array(zod_1.z.string()) }).strict(),
    items: zod_1.z.array(exports.catalogProductCardSchema),
    total: zod_1.z.number().int().nonnegative(),
    nextCursor: zod_1.z.string().optional(),
}).strict();
exports.collectionListResponseSchema = zod_1.z.object({
    store: exports.storefrontStoreSchema,
    items: zod_1.z.array(exports.collectionSummarySchema),
}).strict();
exports.checkoutSessionResultSchema = zod_1.z.object({
    checkoutUrl: zod_1.z.string().url(),
    orderId: zod_1.z.string().min(1),
    orderToken: zod_1.z.string().min(1),
}).strict();
exports.subscriptionPortalResultSchema = zod_1.z.object({ url: zod_1.z.string().url() }).strict();
exports.orderStatusSchema = zod_1.z.object({
    orderId: zod_1.z.string().min(1),
    storeSlug: zod_1.z.string().min(1),
    paymentState: zod_1.z.enum(['expired', 'failed', 'paid', 'pending', 'refunded']),
    fulfillmentState: zod_1.z.enum(['unfulfilled', 'processing', 'shipped', 'delivered', 'cancelled']),
    tracking: zod_1.z.object({
        carrierCode: zod_1.z.string(), carrierName: zod_1.z.string(), trackingNumber: zod_1.z.string(), trackingUrl: zod_1.z.string().url().optional(),
    }).strict().optional(),
    events: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(), type: zod_1.z.string(), fromState: zod_1.z.string().optional(), toState: zod_1.z.string().optional(), createdAt: zod_1.z.number(),
    }).strict()),
    currency: pricing_js_1.currencyCodeSchema,
    total: pricing_js_1.minorAmountSchema,
    updatedAt: zod_1.z.number(),
    storeName: zod_1.z.string().optional(),
    storeUrl: zod_1.z.string().url().optional(),
    confirmationMessage: zod_1.z.string().optional(),
    supportEmail: zod_1.z.string().email().optional(),
    supportUrl: zod_1.z.string().url().optional(),
    subscription: zod_1.z.object({
        status: zod_1.z.string(), amount: pricing_js_1.minorAmountSchema, currency: pricing_js_1.currencyCodeSchema,
        recurring: zod_1.z.object({ interval: zod_1.z.string(), intervalCount: zod_1.z.number().int().positive() }).strict(),
        currentPeriodEnd: zod_1.z.number().optional(), cancelAtPeriodEnd: zod_1.z.boolean(), canManage: zod_1.z.boolean(),
    }).strict().optional(),
}).strict();
//# sourceMappingURL=public.js.map