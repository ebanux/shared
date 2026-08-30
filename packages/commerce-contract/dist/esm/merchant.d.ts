import { z } from 'zod';
export declare const storeUpdateRequestSchema: z.ZodObject<{
    slug: z.ZodOptional<z.ZodString>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    logo: z.ZodOptional<z.ZodString>;
    currency: z.ZodOptional<z.ZodString>;
    allowedShippingCountries: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    catalogSettings: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    checkoutSettings: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strict", z.ZodTypeAny, {
    currency?: string | undefined;
    description?: string | undefined;
    slug?: string | undefined;
    displayName?: string | undefined;
    logo?: string | undefined;
    allowedShippingCountries?: string[] | undefined;
    checkoutSettings?: Record<string, unknown> | undefined;
    catalogSettings?: Record<string, unknown> | undefined;
}, {
    currency?: string | undefined;
    description?: string | undefined;
    slug?: string | undefined;
    displayName?: string | undefined;
    logo?: string | undefined;
    allowedShippingCountries?: string[] | undefined;
    checkoutSettings?: Record<string, unknown> | undefined;
    catalogSettings?: Record<string, unknown> | undefined;
}>;
export declare const productMutationRequestSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    images: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    availability: z.ZodOptional<z.ZodEnum<["in_stock", "out_of_stock", "preorder", "unavailable"]>>;
    brand: z.ZodOptional<z.ZodString>;
    condition: z.ZodOptional<z.ZodEnum<["new", "refurbished", "used"]>>;
    badge: z.ZodOptional<z.ZodObject<{
        label: z.ZodString;
        tone: z.ZodEnum<["accent", "neutral", "warning"]>;
    }, "strict", z.ZodTypeAny, {
        tone: "accent" | "neutral" | "warning";
        label: string;
    }, {
        tone: "accent" | "neutral" | "warning";
        label: string;
    }>>;
    personalizationFields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        type: z.ZodEnum<["instruction", "number", "text"]>;
        required: z.ZodOptional<z.ZodBoolean>;
        maxLength: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        type: "number" | "text" | "instruction";
        id: string;
        label: string;
        required?: boolean | undefined;
        maxLength?: number | undefined;
    }, {
        type: "number" | "text" | "instruction";
        id: string;
        label: string;
        required?: boolean | undefined;
        maxLength?: number | undefined;
    }>, "many">>;
    shipping: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        displayName: z.ZodOptional<z.ZodString>;
        firstItem: z.ZodOptional<z.ZodNumber>;
        additionalItem: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        enabled: boolean;
        displayName?: string | undefined;
        firstItem?: number | undefined;
        additionalItem?: number | undefined;
    }, {
        enabled: boolean;
        displayName?: string | undefined;
        firstItem?: number | undefined;
        additionalItem?: number | undefined;
    }>>;
    seo: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        title?: string | undefined;
        description?: string | undefined;
    }, {
        title?: string | undefined;
        description?: string | undefined;
    }>>;
    defaultVariantId: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    shipping?: {
        enabled: boolean;
        displayName?: string | undefined;
        firstItem?: number | undefined;
        additionalItem?: number | undefined;
    } | undefined;
    title?: string | undefined;
    description?: string | undefined;
    brand?: string | undefined;
    availability?: "in_stock" | "out_of_stock" | "preorder" | "unavailable" | undefined;
    tags?: string[] | undefined;
    defaultVariantId?: string | undefined;
    images?: string[] | undefined;
    condition?: "new" | "refurbished" | "used" | undefined;
    personalizationFields?: {
        type: "number" | "text" | "instruction";
        id: string;
        label: string;
        required?: boolean | undefined;
        maxLength?: number | undefined;
    }[] | undefined;
    seo?: {
        title?: string | undefined;
        description?: string | undefined;
    } | undefined;
    badge?: {
        tone: "accent" | "neutral" | "warning";
        label: string;
    } | undefined;
}, {
    shipping?: {
        enabled: boolean;
        displayName?: string | undefined;
        firstItem?: number | undefined;
        additionalItem?: number | undefined;
    } | undefined;
    title?: string | undefined;
    description?: string | undefined;
    brand?: string | undefined;
    availability?: "in_stock" | "out_of_stock" | "preorder" | "unavailable" | undefined;
    tags?: string[] | undefined;
    defaultVariantId?: string | undefined;
    images?: string[] | undefined;
    condition?: "new" | "refurbished" | "used" | undefined;
    personalizationFields?: {
        type: "number" | "text" | "instruction";
        id: string;
        label: string;
        required?: boolean | undefined;
        maxLength?: number | undefined;
    }[] | undefined;
    seo?: {
        title?: string | undefined;
        description?: string | undefined;
    } | undefined;
    badge?: {
        tone: "accent" | "neutral" | "warning";
        label: string;
    } | undefined;
}>;
export declare const variantMutationRequestSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    sku: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    availability: z.ZodOptional<z.ZodEnum<["in_stock", "out_of_stock", "preorder", "unavailable"]>>;
    quantityDiscounts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        minimumQuantity: z.ZodNumber;
        percentOff: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        minimumQuantity: number;
        percentOff: number;
    }, {
        minimumQuantity: number;
        percentOff: number;
    }>, "many">>;
    gtin: z.ZodOptional<z.ZodString>;
    mpn: z.ZodOptional<z.ZodString>;
    feedTitle: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    name?: string | undefined;
    image?: string | undefined;
    availability?: "in_stock" | "out_of_stock" | "preorder" | "unavailable" | undefined;
    sku?: string | undefined;
    quantityDiscounts?: {
        minimumQuantity: number;
        percentOff: number;
    }[] | undefined;
    gtin?: string | undefined;
    mpn?: string | undefined;
    feedTitle?: string | undefined;
}, {
    name?: string | undefined;
    image?: string | undefined;
    availability?: "in_stock" | "out_of_stock" | "preorder" | "unavailable" | undefined;
    sku?: string | undefined;
    quantityDiscounts?: {
        minimumQuantity: number;
        percentOff: number;
    }[] | undefined;
    gtin?: string | undefined;
    mpn?: string | undefined;
    feedTitle?: string | undefined;
}>;
export declare const priceReplacementRequestSchema: z.ZodObject<{
    definition: z.ZodDiscriminatedUnion<"model", [z.ZodObject<{
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
    currency: z.ZodString;
}, "strict", z.ZodTypeAny, {
    currency: string;
    definition: {
        model: "fixed";
        amount: number;
    } | {
        minimum: number;
        model: "customer_selected";
        preset: number;
        maximum?: number | undefined;
    } | {
        model: "tiered";
        mode: "graduated" | "volume";
        tiers: {
            upTo: number | null;
            unitAmount: number;
            flatAmount?: number | undefined;
        }[];
    } | {
        interval: "day" | "month" | "year" | "week";
        model: "recurring";
        amount: number;
        intervalCount: number;
    };
}, {
    currency: string;
    definition: {
        model: "fixed";
        amount: number;
    } | {
        minimum: number;
        model: "customer_selected";
        preset: number;
        maximum?: number | undefined;
    } | {
        model: "tiered";
        mode: "graduated" | "volume";
        tiers: {
            upTo: number | null;
            unitAmount: number;
            flatAmount?: number | undefined;
        }[];
    } | {
        interval: "day" | "month" | "year" | "week";
        model: "recurring";
        amount: number;
        intervalCount: number;
    };
}>;
export declare const collectionMutationRequestSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    slug: z.ZodOptional<z.ZodString>;
    coverImage: z.ZodOptional<z.ZodString>;
    membershipMode: z.ZodOptional<z.ZodEnum<["manual", "tag"]>>;
    tag: z.ZodOptional<z.ZodString>;
    showInNavigation: z.ZodOptional<z.ZodBoolean>;
    sortOrder: z.ZodOptional<z.ZodNumber>;
    seo: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        title?: string | undefined;
        description?: string | undefined;
    }, {
        title?: string | undefined;
        description?: string | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    title?: string | undefined;
    description?: string | undefined;
    slug?: string | undefined;
    seo?: {
        title?: string | undefined;
        description?: string | undefined;
    } | undefined;
    coverImage?: string | undefined;
    showInNavigation?: boolean | undefined;
    sortOrder?: number | undefined;
    tag?: string | undefined;
    membershipMode?: "manual" | "tag" | undefined;
}, {
    title?: string | undefined;
    description?: string | undefined;
    slug?: string | undefined;
    seo?: {
        title?: string | undefined;
        description?: string | undefined;
    } | undefined;
    coverImage?: string | undefined;
    showInNavigation?: boolean | undefined;
    sortOrder?: number | undefined;
    tag?: string | undefined;
    membershipMode?: "manual" | "tag" | undefined;
}>;
export declare const fulfillmentMutationRequestSchema: z.ZodObject<{
    action: z.ZodEnum<["mark_processing", "mark_shipped", "mark_delivered", "cancel"]>;
    tracking: z.ZodOptional<z.ZodObject<{
        carrierCode: z.ZodString;
        carrierName: z.ZodString;
        trackingNumber: z.ZodString;
        trackingUrl: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        carrierCode: string;
        carrierName: string;
        trackingNumber: string;
        trackingUrl?: string | undefined;
    }, {
        carrierCode: string;
        carrierName: string;
        trackingNumber: string;
        trackingUrl?: string | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    action: "cancel" | "mark_processing" | "mark_shipped" | "mark_delivered";
    tracking?: {
        carrierCode: string;
        carrierName: string;
        trackingNumber: string;
        trackingUrl?: string | undefined;
    } | undefined;
}, {
    action: "cancel" | "mark_processing" | "mark_shipped" | "mark_delivered";
    tracking?: {
        carrierCode: string;
        carrierName: string;
        trackingNumber: string;
        trackingUrl?: string | undefined;
    } | undefined;
}>;
export type CollectionMutationRequest = z.infer<typeof collectionMutationRequestSchema>;
export type FulfillmentMutationRequest = z.infer<typeof fulfillmentMutationRequestSchema>;
export type PriceReplacementRequest = z.infer<typeof priceReplacementRequestSchema>;
export type ProductMutationRequest = z.infer<typeof productMutationRequestSchema>;
export type StoreUpdateRequest = z.infer<typeof storeUpdateRequestSchema>;
export type VariantMutationRequest = z.infer<typeof variantMutationRequestSchema>;
//# sourceMappingURL=merchant.d.ts.map