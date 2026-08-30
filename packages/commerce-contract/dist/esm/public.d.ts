import { z } from 'zod';
export declare const availabilitySchema: z.ZodEnum<["in_stock", "out_of_stock", "preorder", "unavailable"]>;
export declare const personalizationValueSchema: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
export declare const personalizationValuesSchema: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
export declare const personalizationFieldSchema: z.ZodObject<{
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
}>;
export declare const commerceBadgeSchema: z.ZodObject<{
    kind: z.ZodEnum<["availability", "custom", "customizable", "savings"]>;
    label: z.ZodString;
    tone: z.ZodEnum<["accent", "neutral", "warning"]>;
}, "strict", z.ZodTypeAny, {
    tone: "accent" | "neutral" | "warning";
    label: string;
    kind: "custom" | "availability" | "customizable" | "savings";
}, {
    tone: "accent" | "neutral" | "warning";
    label: string;
    kind: "custom" | "availability" | "customizable" | "savings";
}>;
export declare const productVariantSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    sku: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    availability: z.ZodEnum<["in_stock", "out_of_stock", "preorder", "unavailable"]>;
    quantityDiscounts: z.ZodArray<z.ZodObject<{
        minimumQuantity: z.ZodNumber;
        percentOff: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        minimumQuantity: number;
        percentOff: number;
    }, {
        minimumQuantity: number;
        percentOff: number;
    }>, "many">;
    price: z.ZodDiscriminatedUnion<"model", [z.ZodObject<{
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
    name: string;
    id: string;
    availability: "in_stock" | "out_of_stock" | "preorder" | "unavailable";
    quantityDiscounts: {
        minimumQuantity: number;
        percentOff: number;
    }[];
    price: {
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
    image?: string | undefined;
    sku?: string | undefined;
}, {
    currency: string;
    name: string;
    id: string;
    availability: "in_stock" | "out_of_stock" | "preorder" | "unavailable";
    quantityDiscounts: {
        minimumQuantity: number;
        percentOff: number;
    }[];
    price: {
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
    image?: string | undefined;
    sku?: string | undefined;
}>;
export declare const catalogProductCardSchema: z.ZodObject<{
    id: z.ZodString;
    storeSlug: z.ZodString;
    productCode: z.ZodOptional<z.ZodString>;
    publicUrl: z.ZodOptional<z.ZodString>;
    slug: z.ZodString;
    title: z.ZodString;
    image: z.ZodOptional<z.ZodString>;
    tags: z.ZodArray<z.ZodString, "many">;
    availability: z.ZodEnum<["in_stock", "out_of_stock", "preorder", "unavailable"]>;
    badges: z.ZodArray<z.ZodObject<{
        kind: z.ZodEnum<["availability", "custom", "customizable", "savings"]>;
        label: z.ZodString;
        tone: z.ZodEnum<["accent", "neutral", "warning"]>;
    }, "strict", z.ZodTypeAny, {
        tone: "accent" | "neutral" | "warning";
        label: string;
        kind: "custom" | "availability" | "customizable" | "savings";
    }, {
        tone: "accent" | "neutral" | "warning";
        label: string;
        kind: "custom" | "availability" | "customizable" | "savings";
    }>, "many">;
    defaultVariantId: z.ZodOptional<z.ZodString>;
    pricing: z.ZodNullable<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    }>]>>;
    shipping: z.ZodObject<{
        enabled: z.ZodBoolean;
        displayName: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        enabled: boolean;
        displayName?: string | undefined;
    }, {
        enabled: boolean;
        displayName?: string | undefined;
    }>;
}, "strict", z.ZodTypeAny, {
    id: string;
    shipping: {
        enabled: boolean;
        displayName?: string | undefined;
    };
    title: string;
    availability: "in_stock" | "out_of_stock" | "preorder" | "unavailable";
    storeSlug: string;
    slug: string;
    tags: string[];
    badges: {
        tone: "accent" | "neutral" | "warning";
        label: string;
        kind: "custom" | "availability" | "customizable" | "savings";
    }[];
    pricing: {
        currency: string;
        type: "fixed";
        minimum: number;
        maximum: number;
    } | {
        currency: string;
        type: "choose_amount";
        minimum: number;
        maximum?: number | undefined;
    } | {
        currency: string;
        type: "tiered";
        startingAt: number;
    } | {
        currency: string;
        type: "recurring";
        interval: "day" | "month" | "year" | "week";
        amount: number;
        intervalCount: number;
    } | null;
    image?: string | undefined;
    productCode?: string | undefined;
    publicUrl?: string | undefined;
    defaultVariantId?: string | undefined;
}, {
    id: string;
    shipping: {
        enabled: boolean;
        displayName?: string | undefined;
    };
    title: string;
    availability: "in_stock" | "out_of_stock" | "preorder" | "unavailable";
    storeSlug: string;
    slug: string;
    tags: string[];
    badges: {
        tone: "accent" | "neutral" | "warning";
        label: string;
        kind: "custom" | "availability" | "customizable" | "savings";
    }[];
    pricing: {
        currency: string;
        type: "fixed";
        minimum: number;
        maximum: number;
    } | {
        currency: string;
        type: "choose_amount";
        minimum: number;
        maximum?: number | undefined;
    } | {
        currency: string;
        type: "tiered";
        startingAt: number;
    } | {
        currency: string;
        type: "recurring";
        interval: "day" | "month" | "year" | "week";
        amount: number;
        intervalCount: number;
    } | null;
    image?: string | undefined;
    productCode?: string | undefined;
    publicUrl?: string | undefined;
    defaultVariantId?: string | undefined;
}>;
export declare const productDetailSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    availability: z.ZodEnum<["in_stock", "out_of_stock", "preorder", "unavailable"]>;
    storeSlug: z.ZodString;
    productCode: z.ZodOptional<z.ZodString>;
    publicUrl: z.ZodOptional<z.ZodString>;
    slug: z.ZodString;
    tags: z.ZodArray<z.ZodString, "many">;
    badges: z.ZodArray<z.ZodObject<{
        kind: z.ZodEnum<["availability", "custom", "customizable", "savings"]>;
        label: z.ZodString;
        tone: z.ZodEnum<["accent", "neutral", "warning"]>;
    }, "strict", z.ZodTypeAny, {
        tone: "accent" | "neutral" | "warning";
        label: string;
        kind: "custom" | "availability" | "customizable" | "savings";
    }, {
        tone: "accent" | "neutral" | "warning";
        label: string;
        kind: "custom" | "availability" | "customizable" | "savings";
    }>, "many">;
    defaultVariantId: z.ZodOptional<z.ZodString>;
} & {
    description: z.ZodString;
    images: z.ZodArray<z.ZodString, "many">;
    brand: z.ZodString;
    condition: z.ZodEnum<["new", "refurbished", "used"]>;
    personalizationFields: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    shipping: z.ZodObject<{
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
    }>;
    variants: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        sku: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        availability: z.ZodEnum<["in_stock", "out_of_stock", "preorder", "unavailable"]>;
        quantityDiscounts: z.ZodArray<z.ZodObject<{
            minimumQuantity: z.ZodNumber;
            percentOff: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            minimumQuantity: number;
            percentOff: number;
        }, {
            minimumQuantity: number;
            percentOff: number;
        }>, "many">;
        price: z.ZodDiscriminatedUnion<"model", [z.ZodObject<{
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
        name: string;
        id: string;
        availability: "in_stock" | "out_of_stock" | "preorder" | "unavailable";
        quantityDiscounts: {
            minimumQuantity: number;
            percentOff: number;
        }[];
        price: {
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
        image?: string | undefined;
        sku?: string | undefined;
    }, {
        currency: string;
        name: string;
        id: string;
        availability: "in_stock" | "out_of_stock" | "preorder" | "unavailable";
        quantityDiscounts: {
            minimumQuantity: number;
            percentOff: number;
        }[];
        price: {
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
        image?: string | undefined;
        sku?: string | undefined;
    }>, "many">;
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
    id: string;
    shipping: {
        enabled: boolean;
        displayName?: string | undefined;
        firstItem?: number | undefined;
        additionalItem?: number | undefined;
    };
    title: string;
    description: string;
    brand: string;
    availability: "in_stock" | "out_of_stock" | "preorder" | "unavailable";
    storeSlug: string;
    slug: string;
    tags: string[];
    badges: {
        tone: "accent" | "neutral" | "warning";
        label: string;
        kind: "custom" | "availability" | "customizable" | "savings";
    }[];
    images: string[];
    condition: "new" | "refurbished" | "used";
    personalizationFields: {
        type: "number" | "text" | "instruction";
        id: string;
        label: string;
        required?: boolean | undefined;
        maxLength?: number | undefined;
    }[];
    variants: {
        currency: string;
        name: string;
        id: string;
        availability: "in_stock" | "out_of_stock" | "preorder" | "unavailable";
        quantityDiscounts: {
            minimumQuantity: number;
            percentOff: number;
        }[];
        price: {
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
        image?: string | undefined;
        sku?: string | undefined;
    }[];
    productCode?: string | undefined;
    publicUrl?: string | undefined;
    defaultVariantId?: string | undefined;
    seo?: {
        title?: string | undefined;
        description?: string | undefined;
    } | undefined;
}, {
    id: string;
    shipping: {
        enabled: boolean;
        displayName?: string | undefined;
        firstItem?: number | undefined;
        additionalItem?: number | undefined;
    };
    title: string;
    description: string;
    brand: string;
    availability: "in_stock" | "out_of_stock" | "preorder" | "unavailable";
    storeSlug: string;
    slug: string;
    tags: string[];
    badges: {
        tone: "accent" | "neutral" | "warning";
        label: string;
        kind: "custom" | "availability" | "customizable" | "savings";
    }[];
    images: string[];
    condition: "new" | "refurbished" | "used";
    personalizationFields: {
        type: "number" | "text" | "instruction";
        id: string;
        label: string;
        required?: boolean | undefined;
        maxLength?: number | undefined;
    }[];
    variants: {
        currency: string;
        name: string;
        id: string;
        availability: "in_stock" | "out_of_stock" | "preorder" | "unavailable";
        quantityDiscounts: {
            minimumQuantity: number;
            percentOff: number;
        }[];
        price: {
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
        image?: string | undefined;
        sku?: string | undefined;
    }[];
    productCode?: string | undefined;
    publicUrl?: string | undefined;
    defaultVariantId?: string | undefined;
    seo?: {
        title?: string | undefined;
        description?: string | undefined;
    } | undefined;
}>;
export declare const collectionSummarySchema: z.ZodObject<{
    id: z.ZodString;
    slug: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    coverImage: z.ZodOptional<z.ZodString>;
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
    showInNavigation: z.ZodBoolean;
    sortOrder: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    id: string;
    title: string;
    description: string;
    slug: string;
    showInNavigation: boolean;
    sortOrder: number;
    seo?: {
        title?: string | undefined;
        description?: string | undefined;
    } | undefined;
    coverImage?: string | undefined;
}, {
    id: string;
    title: string;
    description: string;
    slug: string;
    showInNavigation: boolean;
    sortOrder: number;
    seo?: {
        title?: string | undefined;
        description?: string | undefined;
    } | undefined;
    coverImage?: string | undefined;
}>;
export declare const storefrontStoreSchema: z.ZodObject<{
    slug: z.ZodString;
    displayName: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    logo: z.ZodOptional<z.ZodString>;
    currency: z.ZodString;
    allowedShippingCountries: z.ZodArray<z.ZodString, "many">;
    presentation: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    presentationVersion: z.ZodOptional<z.ZodNumber>;
    presentationUpdatedAt: z.ZodOptional<z.ZodNumber>;
    navigationCollections: z.ZodOptional<z.ZodArray<z.ZodObject<Pick<{
        id: z.ZodString;
        slug: z.ZodString;
        title: z.ZodString;
        description: z.ZodString;
        coverImage: z.ZodOptional<z.ZodString>;
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
        showInNavigation: z.ZodBoolean;
        sortOrder: z.ZodNumber;
    }, "id" | "title" | "slug">, "strict", z.ZodTypeAny, {
        id: string;
        title: string;
        slug: string;
    }, {
        id: string;
        title: string;
        slug: string;
    }>, "many">>;
    checkoutSettings: z.ZodOptional<z.ZodObject<{
        billingAddressCollection: z.ZodEnum<["auto", "required"]>;
        terms: z.ZodOptional<z.ZodObject<{
            label: z.ZodString;
            url: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            url: string;
            label: string;
        }, {
            url: string;
            label: string;
        }>>;
        confirmationMessage: z.ZodOptional<z.ZodString>;
        supportEmail: z.ZodOptional<z.ZodString>;
        supportUrl: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        billingAddressCollection: "required" | "auto";
        terms?: {
            url: string;
            label: string;
        } | undefined;
        confirmationMessage?: string | undefined;
        supportEmail?: string | undefined;
        supportUrl?: string | undefined;
    }, {
        billingAddressCollection: "required" | "auto";
        terms?: {
            url: string;
            label: string;
        } | undefined;
        confirmationMessage?: string | undefined;
        supportEmail?: string | undefined;
        supportUrl?: string | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    currency: string;
    slug: string;
    displayName: string;
    allowedShippingCountries: string[];
    description?: string | undefined;
    logo?: string | undefined;
    presentation?: Record<string, unknown> | undefined;
    presentationVersion?: number | undefined;
    presentationUpdatedAt?: number | undefined;
    navigationCollections?: {
        id: string;
        title: string;
        slug: string;
    }[] | undefined;
    checkoutSettings?: {
        billingAddressCollection: "required" | "auto";
        terms?: {
            url: string;
            label: string;
        } | undefined;
        confirmationMessage?: string | undefined;
        supportEmail?: string | undefined;
        supportUrl?: string | undefined;
    } | undefined;
}, {
    currency: string;
    slug: string;
    displayName: string;
    allowedShippingCountries: string[];
    description?: string | undefined;
    logo?: string | undefined;
    presentation?: Record<string, unknown> | undefined;
    presentationVersion?: number | undefined;
    presentationUpdatedAt?: number | undefined;
    navigationCollections?: {
        id: string;
        title: string;
        slug: string;
    }[] | undefined;
    checkoutSettings?: {
        billingAddressCollection: "required" | "auto";
        terms?: {
            url: string;
            label: string;
        } | undefined;
        confirmationMessage?: string | undefined;
        supportEmail?: string | undefined;
        supportUrl?: string | undefined;
    } | undefined;
}>;
export declare const cartLineSchema: z.ZodObject<{
    clientLineId: z.ZodString;
    variantId: z.ZodString;
    quantity: z.ZodNumber;
    personalization: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    customerAmount: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    clientLineId: string;
    variantId: string;
    quantity: number;
    personalization: Record<string, string | number>;
    customerAmount?: number | undefined;
}, {
    clientLineId: string;
    variantId: string;
    quantity: number;
    personalization: Record<string, string | number>;
    customerAmount?: number | undefined;
}>;
export declare const quoteIssueSchema: z.ZodObject<{
    code: z.ZodString;
    message: z.ZodString;
    severity: z.ZodEnum<["error", "warning"]>;
    fieldId: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    code: string;
    message: string;
    severity: "error" | "warning";
    fieldId?: string | undefined;
}, {
    code: string;
    message: string;
    severity: "error" | "warning";
    fieldId?: string | undefined;
}>;
export declare const quotedCartLineSchema: z.ZodObject<{
    clientLineId: z.ZodString;
    variantId: z.ZodString;
    quantity: z.ZodNumber;
    personalization: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    customerAmount: z.ZodOptional<z.ZodNumber>;
} & {
    productId: z.ZodOptional<z.ZodString>;
    productTitle: z.ZodOptional<z.ZodString>;
    productImage: z.ZodOptional<z.ZodString>;
    productCode: z.ZodOptional<z.ZodString>;
    variantName: z.ZodOptional<z.ZodString>;
    sku: z.ZodOptional<z.ZodString>;
    unitAmount: z.ZodOptional<z.ZodNumber>;
    currency: z.ZodOptional<z.ZodString>;
    priceId: z.ZodOptional<z.ZodString>;
    personalizationLabels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    subtotal: z.ZodNumber;
    discount: z.ZodNumber;
    shipping: z.ZodNumber;
    total: z.ZodNumber;
    pricing: z.ZodDiscriminatedUnion<"model", [z.ZodObject<{
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
    issues: z.ZodArray<z.ZodObject<{
        code: z.ZodString;
        message: z.ZodString;
        severity: z.ZodEnum<["error", "warning"]>;
        fieldId: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        code: string;
        message: string;
        severity: "error" | "warning";
        fieldId?: string | undefined;
    }, {
        code: string;
        message: string;
        severity: "error" | "warning";
        fieldId?: string | undefined;
    }>, "many">;
}, "strict", z.ZodTypeAny, {
    total: number;
    shipping: number;
    issues: {
        code: string;
        message: string;
        severity: "error" | "warning";
        fieldId?: string | undefined;
    }[];
    pricing: {
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
    clientLineId: string;
    variantId: string;
    quantity: number;
    personalization: Record<string, string | number>;
    subtotal: number;
    discount: number;
    currency?: string | undefined;
    unitAmount?: number | undefined;
    sku?: string | undefined;
    productCode?: string | undefined;
    customerAmount?: number | undefined;
    productId?: string | undefined;
    productTitle?: string | undefined;
    productImage?: string | undefined;
    variantName?: string | undefined;
    priceId?: string | undefined;
    personalizationLabels?: Record<string, string> | undefined;
}, {
    total: number;
    shipping: number;
    issues: {
        code: string;
        message: string;
        severity: "error" | "warning";
        fieldId?: string | undefined;
    }[];
    pricing: {
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
    clientLineId: string;
    variantId: string;
    quantity: number;
    personalization: Record<string, string | number>;
    subtotal: number;
    discount: number;
    currency?: string | undefined;
    unitAmount?: number | undefined;
    sku?: string | undefined;
    productCode?: string | undefined;
    customerAmount?: number | undefined;
    productId?: string | undefined;
    productTitle?: string | undefined;
    productImage?: string | undefined;
    variantName?: string | undefined;
    priceId?: string | undefined;
    personalizationLabels?: Record<string, string> | undefined;
}>;
export declare const cartQuoteSchema: z.ZodObject<{
    storeSlug: z.ZodString;
    currency: z.ZodString;
    lines: z.ZodArray<z.ZodObject<{
        clientLineId: z.ZodString;
        variantId: z.ZodString;
        quantity: z.ZodNumber;
        personalization: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        customerAmount: z.ZodOptional<z.ZodNumber>;
    } & {
        productId: z.ZodOptional<z.ZodString>;
        productTitle: z.ZodOptional<z.ZodString>;
        productImage: z.ZodOptional<z.ZodString>;
        productCode: z.ZodOptional<z.ZodString>;
        variantName: z.ZodOptional<z.ZodString>;
        sku: z.ZodOptional<z.ZodString>;
        unitAmount: z.ZodOptional<z.ZodNumber>;
        currency: z.ZodOptional<z.ZodString>;
        priceId: z.ZodOptional<z.ZodString>;
        personalizationLabels: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        subtotal: z.ZodNumber;
        discount: z.ZodNumber;
        shipping: z.ZodNumber;
        total: z.ZodNumber;
        pricing: z.ZodDiscriminatedUnion<"model", [z.ZodObject<{
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
        issues: z.ZodArray<z.ZodObject<{
            code: z.ZodString;
            message: z.ZodString;
            severity: z.ZodEnum<["error", "warning"]>;
            fieldId: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            code: string;
            message: string;
            severity: "error" | "warning";
            fieldId?: string | undefined;
        }, {
            code: string;
            message: string;
            severity: "error" | "warning";
            fieldId?: string | undefined;
        }>, "many">;
    }, "strict", z.ZodTypeAny, {
        total: number;
        shipping: number;
        issues: {
            code: string;
            message: string;
            severity: "error" | "warning";
            fieldId?: string | undefined;
        }[];
        pricing: {
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
        clientLineId: string;
        variantId: string;
        quantity: number;
        personalization: Record<string, string | number>;
        subtotal: number;
        discount: number;
        currency?: string | undefined;
        unitAmount?: number | undefined;
        sku?: string | undefined;
        productCode?: string | undefined;
        customerAmount?: number | undefined;
        productId?: string | undefined;
        productTitle?: string | undefined;
        productImage?: string | undefined;
        variantName?: string | undefined;
        priceId?: string | undefined;
        personalizationLabels?: Record<string, string> | undefined;
    }, {
        total: number;
        shipping: number;
        issues: {
            code: string;
            message: string;
            severity: "error" | "warning";
            fieldId?: string | undefined;
        }[];
        pricing: {
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
        clientLineId: string;
        variantId: string;
        quantity: number;
        personalization: Record<string, string | number>;
        subtotal: number;
        discount: number;
        currency?: string | undefined;
        unitAmount?: number | undefined;
        sku?: string | undefined;
        productCode?: string | undefined;
        customerAmount?: number | undefined;
        productId?: string | undefined;
        productTitle?: string | undefined;
        productImage?: string | undefined;
        variantName?: string | undefined;
        priceId?: string | undefined;
        personalizationLabels?: Record<string, string> | undefined;
    }>, "many">;
    subtotal: z.ZodNumber;
    automaticDiscount: z.ZodNumber;
    shipping: z.ZodNumber;
    total: z.ZodNumber;
    promotionCodeEligible: z.ZodBoolean;
    recurring: z.ZodBoolean;
    requiresShippingAddress: z.ZodBoolean;
    quotedAt: z.ZodString;
}, "strict", z.ZodTypeAny, {
    currency: string;
    total: number;
    shipping: number;
    recurring: boolean;
    storeSlug: string;
    subtotal: number;
    lines: {
        total: number;
        shipping: number;
        issues: {
            code: string;
            message: string;
            severity: "error" | "warning";
            fieldId?: string | undefined;
        }[];
        pricing: {
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
        clientLineId: string;
        variantId: string;
        quantity: number;
        personalization: Record<string, string | number>;
        subtotal: number;
        discount: number;
        currency?: string | undefined;
        unitAmount?: number | undefined;
        sku?: string | undefined;
        productCode?: string | undefined;
        customerAmount?: number | undefined;
        productId?: string | undefined;
        productTitle?: string | undefined;
        productImage?: string | undefined;
        variantName?: string | undefined;
        priceId?: string | undefined;
        personalizationLabels?: Record<string, string> | undefined;
    }[];
    automaticDiscount: number;
    promotionCodeEligible: boolean;
    requiresShippingAddress: boolean;
    quotedAt: string;
}, {
    currency: string;
    total: number;
    shipping: number;
    recurring: boolean;
    storeSlug: string;
    subtotal: number;
    lines: {
        total: number;
        shipping: number;
        issues: {
            code: string;
            message: string;
            severity: "error" | "warning";
            fieldId?: string | undefined;
        }[];
        pricing: {
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
        clientLineId: string;
        variantId: string;
        quantity: number;
        personalization: Record<string, string | number>;
        subtotal: number;
        discount: number;
        currency?: string | undefined;
        unitAmount?: number | undefined;
        sku?: string | undefined;
        productCode?: string | undefined;
        customerAmount?: number | undefined;
        productId?: string | undefined;
        productTitle?: string | undefined;
        productImage?: string | undefined;
        variantName?: string | undefined;
        priceId?: string | undefined;
        personalizationLabels?: Record<string, string> | undefined;
    }[];
    automaticDiscount: number;
    promotionCodeEligible: boolean;
    requiresShippingAddress: boolean;
    quotedAt: string;
}>;
export declare const catalogResponseSchema: z.ZodObject<{
    store: z.ZodObject<{
        slug: z.ZodString;
        displayName: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        logo: z.ZodOptional<z.ZodString>;
        currency: z.ZodString;
        allowedShippingCountries: z.ZodArray<z.ZodString, "many">;
        presentation: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        presentationVersion: z.ZodOptional<z.ZodNumber>;
        presentationUpdatedAt: z.ZodOptional<z.ZodNumber>;
        navigationCollections: z.ZodOptional<z.ZodArray<z.ZodObject<Pick<{
            id: z.ZodString;
            slug: z.ZodString;
            title: z.ZodString;
            description: z.ZodString;
            coverImage: z.ZodOptional<z.ZodString>;
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
            showInNavigation: z.ZodBoolean;
            sortOrder: z.ZodNumber;
        }, "id" | "title" | "slug">, "strict", z.ZodTypeAny, {
            id: string;
            title: string;
            slug: string;
        }, {
            id: string;
            title: string;
            slug: string;
        }>, "many">>;
        checkoutSettings: z.ZodOptional<z.ZodObject<{
            billingAddressCollection: z.ZodEnum<["auto", "required"]>;
            terms: z.ZodOptional<z.ZodObject<{
                label: z.ZodString;
                url: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                url: string;
                label: string;
            }, {
                url: string;
                label: string;
            }>>;
            confirmationMessage: z.ZodOptional<z.ZodString>;
            supportEmail: z.ZodOptional<z.ZodString>;
            supportUrl: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            billingAddressCollection: "required" | "auto";
            terms?: {
                url: string;
                label: string;
            } | undefined;
            confirmationMessage?: string | undefined;
            supportEmail?: string | undefined;
            supportUrl?: string | undefined;
        }, {
            billingAddressCollection: "required" | "auto";
            terms?: {
                url: string;
                label: string;
            } | undefined;
            confirmationMessage?: string | undefined;
            supportEmail?: string | undefined;
            supportUrl?: string | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        currency: string;
        slug: string;
        displayName: string;
        allowedShippingCountries: string[];
        description?: string | undefined;
        logo?: string | undefined;
        presentation?: Record<string, unknown> | undefined;
        presentationVersion?: number | undefined;
        presentationUpdatedAt?: number | undefined;
        navigationCollections?: {
            id: string;
            title: string;
            slug: string;
        }[] | undefined;
        checkoutSettings?: {
            billingAddressCollection: "required" | "auto";
            terms?: {
                url: string;
                label: string;
            } | undefined;
            confirmationMessage?: string | undefined;
            supportEmail?: string | undefined;
            supportUrl?: string | undefined;
        } | undefined;
    }, {
        currency: string;
        slug: string;
        displayName: string;
        allowedShippingCountries: string[];
        description?: string | undefined;
        logo?: string | undefined;
        presentation?: Record<string, unknown> | undefined;
        presentationVersion?: number | undefined;
        presentationUpdatedAt?: number | undefined;
        navigationCollections?: {
            id: string;
            title: string;
            slug: string;
        }[] | undefined;
        checkoutSettings?: {
            billingAddressCollection: "required" | "auto";
            terms?: {
                url: string;
                label: string;
            } | undefined;
            confirmationMessage?: string | undefined;
            supportEmail?: string | undefined;
            supportUrl?: string | undefined;
        } | undefined;
    }>;
    facets: z.ZodObject<{
        tags: z.ZodArray<z.ZodString, "many">;
    }, "strict", z.ZodTypeAny, {
        tags: string[];
    }, {
        tags: string[];
    }>;
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        storeSlug: z.ZodString;
        productCode: z.ZodOptional<z.ZodString>;
        publicUrl: z.ZodOptional<z.ZodString>;
        slug: z.ZodString;
        title: z.ZodString;
        image: z.ZodOptional<z.ZodString>;
        tags: z.ZodArray<z.ZodString, "many">;
        availability: z.ZodEnum<["in_stock", "out_of_stock", "preorder", "unavailable"]>;
        badges: z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<["availability", "custom", "customizable", "savings"]>;
            label: z.ZodString;
            tone: z.ZodEnum<["accent", "neutral", "warning"]>;
        }, "strict", z.ZodTypeAny, {
            tone: "accent" | "neutral" | "warning";
            label: string;
            kind: "custom" | "availability" | "customizable" | "savings";
        }, {
            tone: "accent" | "neutral" | "warning";
            label: string;
            kind: "custom" | "availability" | "customizable" | "savings";
        }>, "many">;
        defaultVariantId: z.ZodOptional<z.ZodString>;
        pricing: z.ZodNullable<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
        }>]>>;
        shipping: z.ZodObject<{
            enabled: z.ZodBoolean;
            displayName: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            enabled: boolean;
            displayName?: string | undefined;
        }, {
            enabled: boolean;
            displayName?: string | undefined;
        }>;
    }, "strict", z.ZodTypeAny, {
        id: string;
        shipping: {
            enabled: boolean;
            displayName?: string | undefined;
        };
        title: string;
        availability: "in_stock" | "out_of_stock" | "preorder" | "unavailable";
        storeSlug: string;
        slug: string;
        tags: string[];
        badges: {
            tone: "accent" | "neutral" | "warning";
            label: string;
            kind: "custom" | "availability" | "customizable" | "savings";
        }[];
        pricing: {
            currency: string;
            type: "fixed";
            minimum: number;
            maximum: number;
        } | {
            currency: string;
            type: "choose_amount";
            minimum: number;
            maximum?: number | undefined;
        } | {
            currency: string;
            type: "tiered";
            startingAt: number;
        } | {
            currency: string;
            type: "recurring";
            interval: "day" | "month" | "year" | "week";
            amount: number;
            intervalCount: number;
        } | null;
        image?: string | undefined;
        productCode?: string | undefined;
        publicUrl?: string | undefined;
        defaultVariantId?: string | undefined;
    }, {
        id: string;
        shipping: {
            enabled: boolean;
            displayName?: string | undefined;
        };
        title: string;
        availability: "in_stock" | "out_of_stock" | "preorder" | "unavailable";
        storeSlug: string;
        slug: string;
        tags: string[];
        badges: {
            tone: "accent" | "neutral" | "warning";
            label: string;
            kind: "custom" | "availability" | "customizable" | "savings";
        }[];
        pricing: {
            currency: string;
            type: "fixed";
            minimum: number;
            maximum: number;
        } | {
            currency: string;
            type: "choose_amount";
            minimum: number;
            maximum?: number | undefined;
        } | {
            currency: string;
            type: "tiered";
            startingAt: number;
        } | {
            currency: string;
            type: "recurring";
            interval: "day" | "month" | "year" | "week";
            amount: number;
            intervalCount: number;
        } | null;
        image?: string | undefined;
        productCode?: string | undefined;
        publicUrl?: string | undefined;
        defaultVariantId?: string | undefined;
    }>, "many">;
    nextCursor: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    items: {
        id: string;
        shipping: {
            enabled: boolean;
            displayName?: string | undefined;
        };
        title: string;
        availability: "in_stock" | "out_of_stock" | "preorder" | "unavailable";
        storeSlug: string;
        slug: string;
        tags: string[];
        badges: {
            tone: "accent" | "neutral" | "warning";
            label: string;
            kind: "custom" | "availability" | "customizable" | "savings";
        }[];
        pricing: {
            currency: string;
            type: "fixed";
            minimum: number;
            maximum: number;
        } | {
            currency: string;
            type: "choose_amount";
            minimum: number;
            maximum?: number | undefined;
        } | {
            currency: string;
            type: "tiered";
            startingAt: number;
        } | {
            currency: string;
            type: "recurring";
            interval: "day" | "month" | "year" | "week";
            amount: number;
            intervalCount: number;
        } | null;
        image?: string | undefined;
        productCode?: string | undefined;
        publicUrl?: string | undefined;
        defaultVariantId?: string | undefined;
    }[];
    store: {
        currency: string;
        slug: string;
        displayName: string;
        allowedShippingCountries: string[];
        description?: string | undefined;
        logo?: string | undefined;
        presentation?: Record<string, unknown> | undefined;
        presentationVersion?: number | undefined;
        presentationUpdatedAt?: number | undefined;
        navigationCollections?: {
            id: string;
            title: string;
            slug: string;
        }[] | undefined;
        checkoutSettings?: {
            billingAddressCollection: "required" | "auto";
            terms?: {
                url: string;
                label: string;
            } | undefined;
            confirmationMessage?: string | undefined;
            supportEmail?: string | undefined;
            supportUrl?: string | undefined;
        } | undefined;
    };
    facets: {
        tags: string[];
    };
    nextCursor?: string | undefined;
}, {
    items: {
        id: string;
        shipping: {
            enabled: boolean;
            displayName?: string | undefined;
        };
        title: string;
        availability: "in_stock" | "out_of_stock" | "preorder" | "unavailable";
        storeSlug: string;
        slug: string;
        tags: string[];
        badges: {
            tone: "accent" | "neutral" | "warning";
            label: string;
            kind: "custom" | "availability" | "customizable" | "savings";
        }[];
        pricing: {
            currency: string;
            type: "fixed";
            minimum: number;
            maximum: number;
        } | {
            currency: string;
            type: "choose_amount";
            minimum: number;
            maximum?: number | undefined;
        } | {
            currency: string;
            type: "tiered";
            startingAt: number;
        } | {
            currency: string;
            type: "recurring";
            interval: "day" | "month" | "year" | "week";
            amount: number;
            intervalCount: number;
        } | null;
        image?: string | undefined;
        productCode?: string | undefined;
        publicUrl?: string | undefined;
        defaultVariantId?: string | undefined;
    }[];
    store: {
        currency: string;
        slug: string;
        displayName: string;
        allowedShippingCountries: string[];
        description?: string | undefined;
        logo?: string | undefined;
        presentation?: Record<string, unknown> | undefined;
        presentationVersion?: number | undefined;
        presentationUpdatedAt?: number | undefined;
        navigationCollections?: {
            id: string;
            title: string;
            slug: string;
        }[] | undefined;
        checkoutSettings?: {
            billingAddressCollection: "required" | "auto";
            terms?: {
                url: string;
                label: string;
            } | undefined;
            confirmationMessage?: string | undefined;
            supportEmail?: string | undefined;
            supportUrl?: string | undefined;
        } | undefined;
    };
    facets: {
        tags: string[];
    };
    nextCursor?: string | undefined;
}>;
export declare const collectionDetailSchema: z.ZodObject<{
    store: z.ZodObject<{
        slug: z.ZodString;
        displayName: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        logo: z.ZodOptional<z.ZodString>;
        currency: z.ZodString;
        allowedShippingCountries: z.ZodArray<z.ZodString, "many">;
        presentation: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        presentationVersion: z.ZodOptional<z.ZodNumber>;
        presentationUpdatedAt: z.ZodOptional<z.ZodNumber>;
        navigationCollections: z.ZodOptional<z.ZodArray<z.ZodObject<Pick<{
            id: z.ZodString;
            slug: z.ZodString;
            title: z.ZodString;
            description: z.ZodString;
            coverImage: z.ZodOptional<z.ZodString>;
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
            showInNavigation: z.ZodBoolean;
            sortOrder: z.ZodNumber;
        }, "id" | "title" | "slug">, "strict", z.ZodTypeAny, {
            id: string;
            title: string;
            slug: string;
        }, {
            id: string;
            title: string;
            slug: string;
        }>, "many">>;
        checkoutSettings: z.ZodOptional<z.ZodObject<{
            billingAddressCollection: z.ZodEnum<["auto", "required"]>;
            terms: z.ZodOptional<z.ZodObject<{
                label: z.ZodString;
                url: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                url: string;
                label: string;
            }, {
                url: string;
                label: string;
            }>>;
            confirmationMessage: z.ZodOptional<z.ZodString>;
            supportEmail: z.ZodOptional<z.ZodString>;
            supportUrl: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            billingAddressCollection: "required" | "auto";
            terms?: {
                url: string;
                label: string;
            } | undefined;
            confirmationMessage?: string | undefined;
            supportEmail?: string | undefined;
            supportUrl?: string | undefined;
        }, {
            billingAddressCollection: "required" | "auto";
            terms?: {
                url: string;
                label: string;
            } | undefined;
            confirmationMessage?: string | undefined;
            supportEmail?: string | undefined;
            supportUrl?: string | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        currency: string;
        slug: string;
        displayName: string;
        allowedShippingCountries: string[];
        description?: string | undefined;
        logo?: string | undefined;
        presentation?: Record<string, unknown> | undefined;
        presentationVersion?: number | undefined;
        presentationUpdatedAt?: number | undefined;
        navigationCollections?: {
            id: string;
            title: string;
            slug: string;
        }[] | undefined;
        checkoutSettings?: {
            billingAddressCollection: "required" | "auto";
            terms?: {
                url: string;
                label: string;
            } | undefined;
            confirmationMessage?: string | undefined;
            supportEmail?: string | undefined;
            supportUrl?: string | undefined;
        } | undefined;
    }, {
        currency: string;
        slug: string;
        displayName: string;
        allowedShippingCountries: string[];
        description?: string | undefined;
        logo?: string | undefined;
        presentation?: Record<string, unknown> | undefined;
        presentationVersion?: number | undefined;
        presentationUpdatedAt?: number | undefined;
        navigationCollections?: {
            id: string;
            title: string;
            slug: string;
        }[] | undefined;
        checkoutSettings?: {
            billingAddressCollection: "required" | "auto";
            terms?: {
                url: string;
                label: string;
            } | undefined;
            confirmationMessage?: string | undefined;
            supportEmail?: string | undefined;
            supportUrl?: string | undefined;
        } | undefined;
    }>;
    collection: z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        title: z.ZodString;
        description: z.ZodString;
        coverImage: z.ZodOptional<z.ZodString>;
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
        showInNavigation: z.ZodBoolean;
        sortOrder: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        id: string;
        title: string;
        description: string;
        slug: string;
        showInNavigation: boolean;
        sortOrder: number;
        seo?: {
            title?: string | undefined;
            description?: string | undefined;
        } | undefined;
        coverImage?: string | undefined;
    }, {
        id: string;
        title: string;
        description: string;
        slug: string;
        showInNavigation: boolean;
        sortOrder: number;
        seo?: {
            title?: string | undefined;
            description?: string | undefined;
        } | undefined;
        coverImage?: string | undefined;
    }>;
    facets: z.ZodObject<{
        tags: z.ZodArray<z.ZodString, "many">;
    }, "strict", z.ZodTypeAny, {
        tags: string[];
    }, {
        tags: string[];
    }>;
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        storeSlug: z.ZodString;
        productCode: z.ZodOptional<z.ZodString>;
        publicUrl: z.ZodOptional<z.ZodString>;
        slug: z.ZodString;
        title: z.ZodString;
        image: z.ZodOptional<z.ZodString>;
        tags: z.ZodArray<z.ZodString, "many">;
        availability: z.ZodEnum<["in_stock", "out_of_stock", "preorder", "unavailable"]>;
        badges: z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<["availability", "custom", "customizable", "savings"]>;
            label: z.ZodString;
            tone: z.ZodEnum<["accent", "neutral", "warning"]>;
        }, "strict", z.ZodTypeAny, {
            tone: "accent" | "neutral" | "warning";
            label: string;
            kind: "custom" | "availability" | "customizable" | "savings";
        }, {
            tone: "accent" | "neutral" | "warning";
            label: string;
            kind: "custom" | "availability" | "customizable" | "savings";
        }>, "many">;
        defaultVariantId: z.ZodOptional<z.ZodString>;
        pricing: z.ZodNullable<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
        }>]>>;
        shipping: z.ZodObject<{
            enabled: z.ZodBoolean;
            displayName: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            enabled: boolean;
            displayName?: string | undefined;
        }, {
            enabled: boolean;
            displayName?: string | undefined;
        }>;
    }, "strict", z.ZodTypeAny, {
        id: string;
        shipping: {
            enabled: boolean;
            displayName?: string | undefined;
        };
        title: string;
        availability: "in_stock" | "out_of_stock" | "preorder" | "unavailable";
        storeSlug: string;
        slug: string;
        tags: string[];
        badges: {
            tone: "accent" | "neutral" | "warning";
            label: string;
            kind: "custom" | "availability" | "customizable" | "savings";
        }[];
        pricing: {
            currency: string;
            type: "fixed";
            minimum: number;
            maximum: number;
        } | {
            currency: string;
            type: "choose_amount";
            minimum: number;
            maximum?: number | undefined;
        } | {
            currency: string;
            type: "tiered";
            startingAt: number;
        } | {
            currency: string;
            type: "recurring";
            interval: "day" | "month" | "year" | "week";
            amount: number;
            intervalCount: number;
        } | null;
        image?: string | undefined;
        productCode?: string | undefined;
        publicUrl?: string | undefined;
        defaultVariantId?: string | undefined;
    }, {
        id: string;
        shipping: {
            enabled: boolean;
            displayName?: string | undefined;
        };
        title: string;
        availability: "in_stock" | "out_of_stock" | "preorder" | "unavailable";
        storeSlug: string;
        slug: string;
        tags: string[];
        badges: {
            tone: "accent" | "neutral" | "warning";
            label: string;
            kind: "custom" | "availability" | "customizable" | "savings";
        }[];
        pricing: {
            currency: string;
            type: "fixed";
            minimum: number;
            maximum: number;
        } | {
            currency: string;
            type: "choose_amount";
            minimum: number;
            maximum?: number | undefined;
        } | {
            currency: string;
            type: "tiered";
            startingAt: number;
        } | {
            currency: string;
            type: "recurring";
            interval: "day" | "month" | "year" | "week";
            amount: number;
            intervalCount: number;
        } | null;
        image?: string | undefined;
        productCode?: string | undefined;
        publicUrl?: string | undefined;
        defaultVariantId?: string | undefined;
    }>, "many">;
    total: z.ZodNumber;
    nextCursor: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    total: number;
    items: {
        id: string;
        shipping: {
            enabled: boolean;
            displayName?: string | undefined;
        };
        title: string;
        availability: "in_stock" | "out_of_stock" | "preorder" | "unavailable";
        storeSlug: string;
        slug: string;
        tags: string[];
        badges: {
            tone: "accent" | "neutral" | "warning";
            label: string;
            kind: "custom" | "availability" | "customizable" | "savings";
        }[];
        pricing: {
            currency: string;
            type: "fixed";
            minimum: number;
            maximum: number;
        } | {
            currency: string;
            type: "choose_amount";
            minimum: number;
            maximum?: number | undefined;
        } | {
            currency: string;
            type: "tiered";
            startingAt: number;
        } | {
            currency: string;
            type: "recurring";
            interval: "day" | "month" | "year" | "week";
            amount: number;
            intervalCount: number;
        } | null;
        image?: string | undefined;
        productCode?: string | undefined;
        publicUrl?: string | undefined;
        defaultVariantId?: string | undefined;
    }[];
    store: {
        currency: string;
        slug: string;
        displayName: string;
        allowedShippingCountries: string[];
        description?: string | undefined;
        logo?: string | undefined;
        presentation?: Record<string, unknown> | undefined;
        presentationVersion?: number | undefined;
        presentationUpdatedAt?: number | undefined;
        navigationCollections?: {
            id: string;
            title: string;
            slug: string;
        }[] | undefined;
        checkoutSettings?: {
            billingAddressCollection: "required" | "auto";
            terms?: {
                url: string;
                label: string;
            } | undefined;
            confirmationMessage?: string | undefined;
            supportEmail?: string | undefined;
            supportUrl?: string | undefined;
        } | undefined;
    };
    facets: {
        tags: string[];
    };
    collection: {
        id: string;
        title: string;
        description: string;
        slug: string;
        showInNavigation: boolean;
        sortOrder: number;
        seo?: {
            title?: string | undefined;
            description?: string | undefined;
        } | undefined;
        coverImage?: string | undefined;
    };
    nextCursor?: string | undefined;
}, {
    total: number;
    items: {
        id: string;
        shipping: {
            enabled: boolean;
            displayName?: string | undefined;
        };
        title: string;
        availability: "in_stock" | "out_of_stock" | "preorder" | "unavailable";
        storeSlug: string;
        slug: string;
        tags: string[];
        badges: {
            tone: "accent" | "neutral" | "warning";
            label: string;
            kind: "custom" | "availability" | "customizable" | "savings";
        }[];
        pricing: {
            currency: string;
            type: "fixed";
            minimum: number;
            maximum: number;
        } | {
            currency: string;
            type: "choose_amount";
            minimum: number;
            maximum?: number | undefined;
        } | {
            currency: string;
            type: "tiered";
            startingAt: number;
        } | {
            currency: string;
            type: "recurring";
            interval: "day" | "month" | "year" | "week";
            amount: number;
            intervalCount: number;
        } | null;
        image?: string | undefined;
        productCode?: string | undefined;
        publicUrl?: string | undefined;
        defaultVariantId?: string | undefined;
    }[];
    store: {
        currency: string;
        slug: string;
        displayName: string;
        allowedShippingCountries: string[];
        description?: string | undefined;
        logo?: string | undefined;
        presentation?: Record<string, unknown> | undefined;
        presentationVersion?: number | undefined;
        presentationUpdatedAt?: number | undefined;
        navigationCollections?: {
            id: string;
            title: string;
            slug: string;
        }[] | undefined;
        checkoutSettings?: {
            billingAddressCollection: "required" | "auto";
            terms?: {
                url: string;
                label: string;
            } | undefined;
            confirmationMessage?: string | undefined;
            supportEmail?: string | undefined;
            supportUrl?: string | undefined;
        } | undefined;
    };
    facets: {
        tags: string[];
    };
    collection: {
        id: string;
        title: string;
        description: string;
        slug: string;
        showInNavigation: boolean;
        sortOrder: number;
        seo?: {
            title?: string | undefined;
            description?: string | undefined;
        } | undefined;
        coverImage?: string | undefined;
    };
    nextCursor?: string | undefined;
}>;
export declare const orderStatusSchema: z.ZodObject<{
    orderId: z.ZodString;
    storeSlug: z.ZodString;
    paymentState: z.ZodEnum<["expired", "failed", "paid", "pending", "refunded"]>;
    fulfillmentState: z.ZodEnum<["unfulfilled", "processing", "shipped", "delivered", "cancelled"]>;
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
    events: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
        fromState: z.ZodOptional<z.ZodString>;
        toState: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        type: string;
        id: string;
        createdAt: number;
        fromState?: string | undefined;
        toState?: string | undefined;
    }, {
        type: string;
        id: string;
        createdAt: number;
        fromState?: string | undefined;
        toState?: string | undefined;
    }>, "many">;
    currency: z.ZodString;
    total: z.ZodNumber;
    updatedAt: z.ZodNumber;
    storeName: z.ZodOptional<z.ZodString>;
    storeUrl: z.ZodOptional<z.ZodString>;
    confirmationMessage: z.ZodOptional<z.ZodString>;
    supportEmail: z.ZodOptional<z.ZodString>;
    supportUrl: z.ZodOptional<z.ZodString>;
    subscription: z.ZodOptional<z.ZodObject<{
        status: z.ZodString;
        amount: z.ZodNumber;
        currency: z.ZodString;
        recurring: z.ZodObject<{
            interval: z.ZodString;
            intervalCount: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            interval: string;
            intervalCount: number;
        }, {
            interval: string;
            intervalCount: number;
        }>;
        currentPeriodEnd: z.ZodOptional<z.ZodNumber>;
        cancelAtPeriodEnd: z.ZodBoolean;
        canManage: z.ZodBoolean;
    }, "strict", z.ZodTypeAny, {
        currency: string;
        status: string;
        amount: number;
        recurring: {
            interval: string;
            intervalCount: number;
        };
        cancelAtPeriodEnd: boolean;
        canManage: boolean;
        currentPeriodEnd?: number | undefined;
    }, {
        currency: string;
        status: string;
        amount: number;
        recurring: {
            interval: string;
            intervalCount: number;
        };
        cancelAtPeriodEnd: boolean;
        canManage: boolean;
        currentPeriodEnd?: number | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    currency: string;
    total: number;
    storeSlug: string;
    orderId: string;
    paymentState: "failed" | "pending" | "expired" | "paid" | "refunded";
    fulfillmentState: "unfulfilled" | "processing" | "shipped" | "delivered" | "cancelled";
    events: {
        type: string;
        id: string;
        createdAt: number;
        fromState?: string | undefined;
        toState?: string | undefined;
    }[];
    updatedAt: number;
    confirmationMessage?: string | undefined;
    supportEmail?: string | undefined;
    supportUrl?: string | undefined;
    tracking?: {
        carrierCode: string;
        carrierName: string;
        trackingNumber: string;
        trackingUrl?: string | undefined;
    } | undefined;
    storeName?: string | undefined;
    storeUrl?: string | undefined;
    subscription?: {
        currency: string;
        status: string;
        amount: number;
        recurring: {
            interval: string;
            intervalCount: number;
        };
        cancelAtPeriodEnd: boolean;
        canManage: boolean;
        currentPeriodEnd?: number | undefined;
    } | undefined;
}, {
    currency: string;
    total: number;
    storeSlug: string;
    orderId: string;
    paymentState: "failed" | "pending" | "expired" | "paid" | "refunded";
    fulfillmentState: "unfulfilled" | "processing" | "shipped" | "delivered" | "cancelled";
    events: {
        type: string;
        id: string;
        createdAt: number;
        fromState?: string | undefined;
        toState?: string | undefined;
    }[];
    updatedAt: number;
    confirmationMessage?: string | undefined;
    supportEmail?: string | undefined;
    supportUrl?: string | undefined;
    tracking?: {
        carrierCode: string;
        carrierName: string;
        trackingNumber: string;
        trackingUrl?: string | undefined;
    } | undefined;
    storeName?: string | undefined;
    storeUrl?: string | undefined;
    subscription?: {
        currency: string;
        status: string;
        amount: number;
        recurring: {
            interval: string;
            intervalCount: number;
        };
        cancelAtPeriodEnd: boolean;
        canManage: boolean;
        currentPeriodEnd?: number | undefined;
    } | undefined;
}>;
export type Availability = z.infer<typeof availabilitySchema>;
export type CartLine = z.infer<typeof cartLineSchema>;
export type CartQuote = z.infer<typeof cartQuoteSchema>;
export type CatalogProductCard = z.infer<typeof catalogProductCardSchema>;
export type CatalogResponse = z.infer<typeof catalogResponseSchema>;
export type CollectionDetail = z.infer<typeof collectionDetailSchema>;
export type CollectionSummary = z.infer<typeof collectionSummarySchema>;
export type CommerceBadge = z.infer<typeof commerceBadgeSchema>;
export type OrderStatus = z.infer<typeof orderStatusSchema>;
export type ProductDetail = z.infer<typeof productDetailSchema>;
export type StorefrontStore = z.infer<typeof storefrontStoreSchema>;
//# sourceMappingURL=public.d.ts.map