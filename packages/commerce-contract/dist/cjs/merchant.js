"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fulfillmentMutationRequestSchema = exports.collectionMutationRequestSchema = exports.priceReplacementRequestSchema = exports.variantMutationRequestSchema = exports.productMutationRequestSchema = exports.storeUpdateRequestSchema = void 0;
const zod_1 = require("zod");
const public_js_1 = require("./public.js");
const pricing_js_1 = require("./pricing.js");
exports.storeUpdateRequestSchema = zod_1.z.object({
    slug: zod_1.z.string().trim().min(1).max(100).optional(),
    displayName: zod_1.z.string().trim().min(1).max(200).optional(),
    description: zod_1.z.string().max(5000).optional(),
    logo: zod_1.z.string().url().optional(),
    currency: zod_1.z.string().regex(/^[A-Z]{3}$/).optional(),
    allowedShippingCountries: zod_1.z.array(zod_1.z.string().length(2)).optional(),
    catalogSettings: zod_1.z.record(zod_1.z.unknown()).optional(),
    checkoutSettings: zod_1.z.record(zod_1.z.unknown()).optional(),
}).strict();
exports.productMutationRequestSchema = zod_1.z.object({
    title: zod_1.z.string().trim().min(1).max(200).optional(),
    description: zod_1.z.string().max(20_000).optional(),
    images: zod_1.z.array(zod_1.z.string().url()).max(20).optional(),
    tags: zod_1.z.array(zod_1.z.string().max(100)).max(100).optional(),
    availability: public_js_1.availabilitySchema.optional(),
    brand: zod_1.z.string().max(100).optional(),
    condition: zod_1.z.enum(['new', 'refurbished', 'used']).optional(),
    badge: zod_1.z.object({ label: zod_1.z.string().max(40), tone: zod_1.z.enum(['accent', 'neutral', 'warning']) }).strict().optional(),
    personalizationFields: zod_1.z.array(public_js_1.personalizationFieldSchema).optional(),
    shipping: zod_1.z.object({
        enabled: zod_1.z.boolean(), displayName: zod_1.z.string().optional(), firstItem: zod_1.z.number().int().nonnegative().optional(),
        additionalItem: zod_1.z.number().int().nonnegative().optional(),
    }).strict().optional(),
    seo: zod_1.z.object({ title: zod_1.z.string().optional(), description: zod_1.z.string().optional() }).strict().optional(),
    defaultVariantId: zod_1.z.string().optional(),
}).strict();
exports.variantMutationRequestSchema = zod_1.z.object({
    name: zod_1.z.string().trim().min(1).max(200).optional(),
    sku: zod_1.z.string().max(100).optional(),
    image: zod_1.z.string().url().optional(),
    availability: public_js_1.availabilitySchema.optional(),
    quantityDiscounts: zod_1.z.array(pricing_js_1.quantityDiscountSchema).optional(),
    gtin: zod_1.z.string().max(14).optional(),
    mpn: zod_1.z.string().max(70).optional(),
    feedTitle: zod_1.z.string().max(150).optional(),
}).strict();
exports.priceReplacementRequestSchema = zod_1.z.object({
    definition: pricing_js_1.priceDefinitionSchema,
    currency: zod_1.z.string().regex(/^[A-Z]{3}$/),
}).strict();
exports.collectionMutationRequestSchema = zod_1.z.object({
    title: zod_1.z.string().trim().min(1).max(200).optional(),
    description: zod_1.z.string().max(5000).optional(),
    slug: zod_1.z.string().trim().min(1).max(100).optional(),
    coverImage: zod_1.z.string().url().optional(),
    membershipMode: zod_1.z.enum(['manual', 'tag']).optional(),
    tag: zod_1.z.string().max(100).optional(),
    showInNavigation: zod_1.z.boolean().optional(),
    sortOrder: zod_1.z.number().int().optional(),
    seo: zod_1.z.object({ title: zod_1.z.string().optional(), description: zod_1.z.string().optional() }).strict().optional(),
}).strict();
exports.fulfillmentMutationRequestSchema = zod_1.z.object({
    action: zod_1.z.enum(['mark_processing', 'mark_shipped', 'mark_delivered', 'cancel']),
    tracking: zod_1.z.object({
        carrierCode: zod_1.z.string().max(100), carrierName: zod_1.z.string().max(100),
        trackingNumber: zod_1.z.string().max(200), trackingUrl: zod_1.z.string().url().optional(),
    }).strict().optional(),
}).strict();
//# sourceMappingURL=merchant.js.map