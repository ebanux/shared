import { z } from 'zod';
import { availabilitySchema, personalizationFieldSchema } from './public.js';
import { priceDefinitionSchema, quantityDiscountSchema } from './pricing.js';
export const storeUpdateRequestSchema = z.object({
    slug: z.string().trim().min(1).max(100).optional(),
    displayName: z.string().trim().min(1).max(200).optional(),
    description: z.string().max(5000).optional(),
    logo: z.string().url().optional(),
    currency: z.string().regex(/^[A-Z]{3}$/).optional(),
    allowedShippingCountries: z.array(z.string().length(2)).optional(),
    catalogSettings: z.record(z.unknown()).optional(),
    checkoutSettings: z.record(z.unknown()).optional(),
}).strict();
export const productMutationRequestSchema = z.object({
    title: z.string().trim().min(1).max(200).optional(),
    description: z.string().max(20_000).optional(),
    images: z.array(z.string().url()).max(20).optional(),
    tags: z.array(z.string().max(100)).max(100).optional(),
    availability: availabilitySchema.optional(),
    brand: z.string().max(100).optional(),
    condition: z.enum(['new', 'refurbished', 'used']).optional(),
    badge: z.object({ label: z.string().max(40), tone: z.enum(['accent', 'neutral', 'warning']) }).strict().optional(),
    personalizationFields: z.array(personalizationFieldSchema).optional(),
    shipping: z.object({
        enabled: z.boolean(), displayName: z.string().optional(), firstItem: z.number().int().nonnegative().optional(),
        additionalItem: z.number().int().nonnegative().optional(),
    }).strict().optional(),
    seo: z.object({ title: z.string().optional(), description: z.string().optional() }).strict().optional(),
    defaultVariantId: z.string().optional(),
}).strict();
export const variantMutationRequestSchema = z.object({
    name: z.string().trim().min(1).max(200).optional(),
    sku: z.string().max(100).optional(),
    image: z.string().url().optional(),
    availability: availabilitySchema.optional(),
    quantityDiscounts: z.array(quantityDiscountSchema).optional(),
    gtin: z.string().max(14).optional(),
    mpn: z.string().max(70).optional(),
    feedTitle: z.string().max(150).optional(),
}).strict();
export const priceReplacementRequestSchema = z.object({
    definition: priceDefinitionSchema,
    currency: z.string().regex(/^[A-Z]{3}$/),
}).strict();
export const collectionMutationRequestSchema = z.object({
    title: z.string().trim().min(1).max(200).optional(),
    description: z.string().max(5000).optional(),
    slug: z.string().trim().min(1).max(100).optional(),
    coverImage: z.string().url().optional(),
    membershipMode: z.enum(['manual', 'tag']).optional(),
    tag: z.string().max(100).optional(),
    showInNavigation: z.boolean().optional(),
    sortOrder: z.number().int().optional(),
    seo: z.object({ title: z.string().optional(), description: z.string().optional() }).strict().optional(),
}).strict();
export const fulfillmentMutationRequestSchema = z.object({
    action: z.enum(['mark_processing', 'mark_shipped', 'mark_delivered', 'cancel']),
    tracking: z.object({
        carrierCode: z.string().max(100), carrierName: z.string().max(100),
        trackingNumber: z.string().max(200), trackingUrl: z.string().url().optional(),
    }).strict().optional(),
}).strict();
//# sourceMappingURL=merchant.js.map