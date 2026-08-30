import { z } from 'zod';
export declare const currencyCodeSchema: z.ZodString;
export declare const minorAmountSchema: z.ZodNumber;
export declare const quantityDiscountSchema: z.ZodObject<{
    minimumQuantity: z.ZodNumber;
    percentOff: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    minimumQuantity: number;
    percentOff: number;
}, {
    minimumQuantity: number;
    percentOff: number;
}>;
export declare const priceTierSchema: z.ZodObject<{
    upTo: z.ZodNullable<z.ZodNumber>;
    unitAmount: z.ZodNumber;
    flatAmount: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    upTo: number | null;
    unitAmount: number;
    flatAmount?: number | undefined;
}, {
    upTo: number | null;
    unitAmount: number;
    flatAmount?: number | undefined;
}>;
export declare const priceDefinitionSchema: z.ZodDiscriminatedUnion<"model", [z.ZodObject<{
    model: z.ZodLiteral<"fixed">;
    amount: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    model: "fixed";
    amount: number;
}, {
    model: "fixed";
    amount: number;
}>, z.ZodObject<{
    model: z.ZodLiteral<"customer_selected">;
    minimum: z.ZodNumber;
    maximum: z.ZodOptional<z.ZodNumber>;
    preset: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    minimum: number;
    model: "customer_selected";
    preset: number;
    maximum?: number | undefined;
}, {
    minimum: number;
    model: "customer_selected";
    preset: number;
    maximum?: number | undefined;
}>, z.ZodObject<{
    model: z.ZodLiteral<"tiered">;
    mode: z.ZodEnum<["graduated", "volume"]>;
    tiers: z.ZodArray<z.ZodObject<{
        upTo: z.ZodNullable<z.ZodNumber>;
        unitAmount: z.ZodNumber;
        flatAmount: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        upTo: number | null;
        unitAmount: number;
        flatAmount?: number | undefined;
    }, {
        upTo: number | null;
        unitAmount: number;
        flatAmount?: number | undefined;
    }>, "many">;
}, "strict", z.ZodTypeAny, {
    model: "tiered";
    mode: "graduated" | "volume";
    tiers: {
        upTo: number | null;
        unitAmount: number;
        flatAmount?: number | undefined;
    }[];
}, {
    model: "tiered";
    mode: "graduated" | "volume";
    tiers: {
        upTo: number | null;
        unitAmount: number;
        flatAmount?: number | undefined;
    }[];
}>, z.ZodObject<{
    model: z.ZodLiteral<"recurring">;
    amount: z.ZodNumber;
    interval: z.ZodEnum<["day", "week", "month", "year"]>;
    intervalCount: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    interval: "day" | "month" | "year" | "week";
    model: "recurring";
    amount: number;
    intervalCount: number;
}, {
    interval: "day" | "month" | "year" | "week";
    model: "recurring";
    amount: number;
    intervalCount: number;
}>]>;
export declare const pricingSummarySchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"fixed">;
    minimum: z.ZodNumber;
    maximum: z.ZodNumber;
    currency: z.ZodString;
}, "strict", z.ZodTypeAny, {
    currency: string;
    type: "fixed";
    minimum: number;
    maximum: number;
}, {
    currency: string;
    type: "fixed";
    minimum: number;
    maximum: number;
}>, z.ZodObject<{
    type: z.ZodLiteral<"choose_amount">;
    minimum: z.ZodNumber;
    maximum: z.ZodOptional<z.ZodNumber>;
    currency: z.ZodString;
}, "strict", z.ZodTypeAny, {
    currency: string;
    type: "choose_amount";
    minimum: number;
    maximum?: number | undefined;
}, {
    currency: string;
    type: "choose_amount";
    minimum: number;
    maximum?: number | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"tiered">;
    startingAt: z.ZodNumber;
    currency: z.ZodString;
}, "strict", z.ZodTypeAny, {
    currency: string;
    type: "tiered";
    startingAt: number;
}, {
    currency: string;
    type: "tiered";
    startingAt: number;
}>, z.ZodObject<{
    type: z.ZodLiteral<"recurring">;
    amount: z.ZodNumber;
    currency: z.ZodString;
    interval: z.ZodEnum<["day", "week", "month", "year"]>;
    intervalCount: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    currency: string;
    type: "recurring";
    interval: "day" | "month" | "year" | "week";
    amount: number;
    intervalCount: number;
}, {
    currency: string;
    type: "recurring";
    interval: "day" | "month" | "year" | "week";
    amount: number;
    intervalCount: number;
}>]>;
export type CurrencyCode = z.infer<typeof currencyCodeSchema>;
export type PriceDefinition = z.infer<typeof priceDefinitionSchema>;
export type PriceTier = z.infer<typeof priceTierSchema>;
export type PricingSummary = z.infer<typeof pricingSummarySchema>;
export type QuantityDiscount = z.infer<typeof quantityDiscountSchema>;
//# sourceMappingURL=pricing.d.ts.map