"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pricingSummarySchema = exports.priceDefinitionSchema = exports.priceTierSchema = exports.quantityDiscountSchema = exports.minorAmountSchema = exports.currencyCodeSchema = void 0;
const zod_1 = require("zod");
exports.currencyCodeSchema = zod_1.z.string().trim().regex(/^[A-Z]{3}$/);
exports.minorAmountSchema = zod_1.z.number().int().nonnegative();
exports.quantityDiscountSchema = zod_1.z.object({
    minimumQuantity: zod_1.z.number().int().positive(),
    percentOff: zod_1.z.number().positive().max(100),
}).strict();
exports.priceTierSchema = zod_1.z.object({
    upTo: zod_1.z.number().int().positive().nullable(),
    unitAmount: exports.minorAmountSchema,
    flatAmount: exports.minorAmountSchema.optional(),
}).strict();
exports.priceDefinitionSchema = zod_1.z.discriminatedUnion('model', [
    zod_1.z.object({ model: zod_1.z.literal('fixed'), amount: exports.minorAmountSchema }).strict(),
    zod_1.z.object({
        model: zod_1.z.literal('customer_selected'),
        minimum: exports.minorAmountSchema,
        maximum: exports.minorAmountSchema.optional(),
        preset: exports.minorAmountSchema,
    }).strict(),
    zod_1.z.object({
        model: zod_1.z.literal('tiered'),
        mode: zod_1.z.enum(['graduated', 'volume']),
        tiers: zod_1.z.array(exports.priceTierSchema).min(1),
    }).strict(),
    zod_1.z.object({
        model: zod_1.z.literal('recurring'),
        amount: exports.minorAmountSchema,
        interval: zod_1.z.enum(['day', 'week', 'month', 'year']),
        intervalCount: zod_1.z.number().int().positive(),
    }).strict(),
]);
exports.pricingSummarySchema = zod_1.z.discriminatedUnion('type', [
    zod_1.z.object({
        type: zod_1.z.literal('fixed'),
        minimum: exports.minorAmountSchema,
        maximum: exports.minorAmountSchema,
        currency: exports.currencyCodeSchema,
    }).strict(),
    zod_1.z.object({
        type: zod_1.z.literal('choose_amount'),
        minimum: exports.minorAmountSchema,
        maximum: exports.minorAmountSchema.optional(),
        currency: exports.currencyCodeSchema,
    }).strict(),
    zod_1.z.object({
        type: zod_1.z.literal('tiered'),
        startingAt: exports.minorAmountSchema,
        currency: exports.currencyCodeSchema,
    }).strict(),
    zod_1.z.object({
        type: zod_1.z.literal('recurring'),
        amount: exports.minorAmountSchema,
        currency: exports.currencyCodeSchema,
        interval: zod_1.z.enum(['day', 'week', 'month', 'year']),
        intervalCount: zod_1.z.number().int().positive(),
    }).strict(),
]);
//# sourceMappingURL=pricing.js.map