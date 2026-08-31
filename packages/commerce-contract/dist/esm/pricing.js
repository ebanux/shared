import { z } from 'zod';
export const currencyCodeSchema = z.string().trim().regex(/^[A-Z]{3}$/);
export const minorAmountSchema = z.number().int().nonnegative();
export const quantityDiscountSchema = z.object({
    minimumQuantity: z.number().int().positive(),
    percentOff: z.number().positive().max(100),
}).strict();
export const priceTierSchema = z.object({
    upTo: z.number().int().positive().nullable(),
    unitAmount: minorAmountSchema,
    flatAmount: minorAmountSchema.optional(),
}).strict();
export const priceDefinitionSchema = z.discriminatedUnion('model', [
    z.object({ model: z.literal('fixed'), amount: minorAmountSchema }).strict(),
    z.object({
        model: z.literal('customer_selected'),
        minimum: minorAmountSchema,
        maximum: minorAmountSchema.optional(),
        preset: minorAmountSchema,
    }).strict(),
    z.object({
        model: z.literal('tiered'),
        mode: z.enum(['graduated', 'volume']),
        tiers: z.array(priceTierSchema).min(1),
    }).strict(),
    z.object({
        model: z.literal('recurring'),
        amount: minorAmountSchema,
        interval: z.enum(['day', 'week', 'month', 'year']),
        intervalCount: z.number().int().positive(),
    }).strict(),
]);
export const pricingSummarySchema = z.discriminatedUnion('type', [
    z.object({
        type: z.literal('fixed'),
        minimum: minorAmountSchema,
        maximum: minorAmountSchema,
        currency: currencyCodeSchema,
    }).strict(),
    z.object({
        type: z.literal('choose_amount'),
        minimum: minorAmountSchema,
        maximum: minorAmountSchema.optional(),
        currency: currencyCodeSchema,
    }).strict(),
    z.object({
        type: z.literal('tiered'),
        startingAt: minorAmountSchema,
        currency: currencyCodeSchema,
    }).strict(),
    z.object({
        type: z.literal('recurring'),
        amount: minorAmountSchema,
        currency: currencyCodeSchema,
        interval: z.enum(['day', 'week', 'month', 'year']),
        intervalCount: z.number().int().positive(),
    }).strict(),
]);
//# sourceMappingURL=pricing.js.map