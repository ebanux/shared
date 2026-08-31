import { z } from 'zod';
export declare const COMMERCE_CONTRACT_VERSION: 1;
export declare const commerceErrorCodeSchema: z.ZodEnum<["VALIDATION_FAILED", "UNAUTHORIZED", "NOT_FOUND", "CROSS_STORE_CART", "PRODUCT_UNAVAILABLE", "VARIANT_UNAVAILABLE", "PRICE_CHANGED", "CHECKOUT_FINGERPRINT_CONFLICT", "CHECKOUT_ATTEMPT_EXPIRED", "TERMS_REQUIRED", "PROMOTION_CODE_INVALID", "PAYMENT_ACCOUNT_UNAVAILABLE", "SUBSCRIPTION_CART_INVALID", "INTERNAL_ERROR"]>;
export declare const commerceApiErrorSchema: z.ZodObject<{
    code: z.ZodEnum<["VALIDATION_FAILED", "UNAUTHORIZED", "NOT_FOUND", "CROSS_STORE_CART", "PRODUCT_UNAVAILABLE", "VARIANT_UNAVAILABLE", "PRICE_CHANGED", "CHECKOUT_FINGERPRINT_CONFLICT", "CHECKOUT_ATTEMPT_EXPIRED", "TERMS_REQUIRED", "PROMOTION_CODE_INVALID", "PAYMENT_ACCOUNT_UNAVAILABLE", "SUBSCRIPTION_CART_INVALID", "INTERNAL_ERROR"]>;
    message: z.ZodString;
    retryable: z.ZodBoolean;
    fieldErrors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>>;
}, "strict", z.ZodTypeAny, {
    code: "VALIDATION_FAILED" | "UNAUTHORIZED" | "NOT_FOUND" | "CROSS_STORE_CART" | "PRODUCT_UNAVAILABLE" | "VARIANT_UNAVAILABLE" | "PRICE_CHANGED" | "CHECKOUT_FINGERPRINT_CONFLICT" | "CHECKOUT_ATTEMPT_EXPIRED" | "TERMS_REQUIRED" | "PROMOTION_CODE_INVALID" | "PAYMENT_ACCOUNT_UNAVAILABLE" | "SUBSCRIPTION_CART_INVALID" | "INTERNAL_ERROR";
    message: string;
    retryable: boolean;
    fieldErrors?: Record<string, string[]> | undefined;
}, {
    code: "VALIDATION_FAILED" | "UNAUTHORIZED" | "NOT_FOUND" | "CROSS_STORE_CART" | "PRODUCT_UNAVAILABLE" | "VARIANT_UNAVAILABLE" | "PRICE_CHANGED" | "CHECKOUT_FINGERPRINT_CONFLICT" | "CHECKOUT_ATTEMPT_EXPIRED" | "TERMS_REQUIRED" | "PROMOTION_CODE_INVALID" | "PAYMENT_ACCOUNT_UNAVAILABLE" | "SUBSCRIPTION_CART_INVALID" | "INTERNAL_ERROR";
    message: string;
    retryable: boolean;
    fieldErrors?: Record<string, string[]> | undefined;
}>;
export declare const commerceApiFailureSchema: z.ZodObject<{
    contractVersion: z.ZodLiteral<1>;
    type: z.ZodLiteral<"commerce_error">;
    error: z.ZodObject<{
        code: z.ZodEnum<["VALIDATION_FAILED", "UNAUTHORIZED", "NOT_FOUND", "CROSS_STORE_CART", "PRODUCT_UNAVAILABLE", "VARIANT_UNAVAILABLE", "PRICE_CHANGED", "CHECKOUT_FINGERPRINT_CONFLICT", "CHECKOUT_ATTEMPT_EXPIRED", "TERMS_REQUIRED", "PROMOTION_CODE_INVALID", "PAYMENT_ACCOUNT_UNAVAILABLE", "SUBSCRIPTION_CART_INVALID", "INTERNAL_ERROR"]>;
        message: z.ZodString;
        retryable: z.ZodBoolean;
        fieldErrors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>>;
    }, "strict", z.ZodTypeAny, {
        code: "VALIDATION_FAILED" | "UNAUTHORIZED" | "NOT_FOUND" | "CROSS_STORE_CART" | "PRODUCT_UNAVAILABLE" | "VARIANT_UNAVAILABLE" | "PRICE_CHANGED" | "CHECKOUT_FINGERPRINT_CONFLICT" | "CHECKOUT_ATTEMPT_EXPIRED" | "TERMS_REQUIRED" | "PROMOTION_CODE_INVALID" | "PAYMENT_ACCOUNT_UNAVAILABLE" | "SUBSCRIPTION_CART_INVALID" | "INTERNAL_ERROR";
        message: string;
        retryable: boolean;
        fieldErrors?: Record<string, string[]> | undefined;
    }, {
        code: "VALIDATION_FAILED" | "UNAUTHORIZED" | "NOT_FOUND" | "CROSS_STORE_CART" | "PRODUCT_UNAVAILABLE" | "VARIANT_UNAVAILABLE" | "PRICE_CHANGED" | "CHECKOUT_FINGERPRINT_CONFLICT" | "CHECKOUT_ATTEMPT_EXPIRED" | "TERMS_REQUIRED" | "PROMOTION_CODE_INVALID" | "PAYMENT_ACCOUNT_UNAVAILABLE" | "SUBSCRIPTION_CART_INVALID" | "INTERNAL_ERROR";
        message: string;
        retryable: boolean;
        fieldErrors?: Record<string, string[]> | undefined;
    }>;
}, "strict", z.ZodTypeAny, {
    type: "commerce_error";
    error: {
        code: "VALIDATION_FAILED" | "UNAUTHORIZED" | "NOT_FOUND" | "CROSS_STORE_CART" | "PRODUCT_UNAVAILABLE" | "VARIANT_UNAVAILABLE" | "PRICE_CHANGED" | "CHECKOUT_FINGERPRINT_CONFLICT" | "CHECKOUT_ATTEMPT_EXPIRED" | "TERMS_REQUIRED" | "PROMOTION_CODE_INVALID" | "PAYMENT_ACCOUNT_UNAVAILABLE" | "SUBSCRIPTION_CART_INVALID" | "INTERNAL_ERROR";
        message: string;
        retryable: boolean;
        fieldErrors?: Record<string, string[]> | undefined;
    };
    contractVersion: 1;
}, {
    type: "commerce_error";
    error: {
        code: "VALIDATION_FAILED" | "UNAUTHORIZED" | "NOT_FOUND" | "CROSS_STORE_CART" | "PRODUCT_UNAVAILABLE" | "VARIANT_UNAVAILABLE" | "PRICE_CHANGED" | "CHECKOUT_FINGERPRINT_CONFLICT" | "CHECKOUT_ATTEMPT_EXPIRED" | "TERMS_REQUIRED" | "PROMOTION_CODE_INVALID" | "PAYMENT_ACCOUNT_UNAVAILABLE" | "SUBSCRIPTION_CART_INVALID" | "INTERNAL_ERROR";
        message: string;
        retryable: boolean;
        fieldErrors?: Record<string, string[]> | undefined;
    };
    contractVersion: 1;
}>;
export declare const commerceApiSuccessSchema: <T extends z.ZodTypeAny>(result: T) => z.ZodObject<{
    contractVersion: z.ZodLiteral<1>;
    type: z.ZodString;
    result: T;
}, "strict", z.ZodTypeAny, z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    contractVersion: z.ZodLiteral<1>;
    type: z.ZodString;
    result: T;
}>, any> extends infer T_1 ? { [k in keyof T_1]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    contractVersion: z.ZodLiteral<1>;
    type: z.ZodString;
    result: T;
}>, any>[k]; } : never, z.baseObjectInputType<{
    contractVersion: z.ZodLiteral<1>;
    type: z.ZodString;
    result: T;
}> extends infer T_2 ? { [k_1 in keyof T_2]: z.baseObjectInputType<{
    contractVersion: z.ZodLiteral<1>;
    type: z.ZodString;
    result: T;
}>[k_1]; } : never>;
export declare const catalogSortSchema: z.ZodEnum<["featured", "price-asc", "price-desc", "title-asc", "title-desc"]>;
export declare const catalogQuerySchema: z.ZodObject<{
    q: z.ZodOptional<z.ZodString>;
    tag: z.ZodOptional<z.ZodString>;
    sort: z.ZodDefault<z.ZodEnum<["featured", "price-asc", "price-desc", "title-asc", "title-desc"]>>;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    sort: "featured" | "price-asc" | "price-desc" | "title-asc" | "title-desc";
    limit: number;
    cursor?: string | undefined;
    q?: string | undefined;
    tag?: string | undefined;
}, {
    sort?: "featured" | "price-asc" | "price-desc" | "title-asc" | "title-desc" | undefined;
    cursor?: string | undefined;
    q?: string | undefined;
    tag?: string | undefined;
    limit?: number | undefined;
}>;
export declare const commerceUrlStateSchema: z.ZodObject<{
    q: z.ZodOptional<z.ZodString>;
    tag: z.ZodOptional<z.ZodString>;
    sort: z.ZodDefault<z.ZodEnum<["featured", "price-asc", "price-desc", "title-asc", "title-desc"]>>;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodNumber>;
} & {
    variant: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    sort: "featured" | "price-asc" | "price-desc" | "title-asc" | "title-desc";
    limit: number;
    variant?: string | undefined;
    cursor?: string | undefined;
    q?: string | undefined;
    tag?: string | undefined;
}, {
    sort?: "featured" | "price-asc" | "price-desc" | "title-asc" | "title-desc" | undefined;
    variant?: string | undefined;
    cursor?: string | undefined;
    q?: string | undefined;
    tag?: string | undefined;
    limit?: number | undefined;
}>;
export declare const cartQuoteRequestSchema: z.ZodObject<{
    storeSlug: z.ZodString;
    lines: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
}, "strict", z.ZodTypeAny, {
    storeSlug: string;
    lines: {
        clientLineId: string;
        variantId: string;
        quantity: number;
        personalization: Record<string, string | number>;
        customerAmount?: number | undefined;
    }[];
}, {
    storeSlug: string;
    lines: {
        clientLineId: string;
        variantId: string;
        quantity: number;
        personalization: Record<string, string | number>;
        customerAmount?: number | undefined;
    }[];
}>;
export declare const checkoutRequestSchema: z.ZodObject<{
    storeSlug: z.ZodString;
    lines: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
} & {
    checkoutAttemptId: z.ZodString;
    promotionCode: z.ZodOptional<z.ZodString>;
    customerEmail: z.ZodOptional<z.ZodString>;
    termsAccepted: z.ZodOptional<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    storeSlug: string;
    lines: {
        clientLineId: string;
        variantId: string;
        quantity: number;
        personalization: Record<string, string | number>;
        customerAmount?: number | undefined;
    }[];
    checkoutAttemptId: string;
    promotionCode?: string | undefined;
    customerEmail?: string | undefined;
    termsAccepted?: boolean | undefined;
}, {
    storeSlug: string;
    lines: {
        clientLineId: string;
        variantId: string;
        quantity: number;
        personalization: Record<string, string | number>;
        customerAmount?: number | undefined;
    }[];
    checkoutAttemptId: string;
    promotionCode?: string | undefined;
    customerEmail?: string | undefined;
    termsAccepted?: boolean | undefined;
}>;
export interface CommerceApiSuccess<T> {
    contractVersion: typeof COMMERCE_CONTRACT_VERSION;
    type: string;
    result: T;
}
export type CommerceApiError = z.infer<typeof commerceApiErrorSchema>;
export type CommerceApiFailure = z.infer<typeof commerceApiFailureSchema>;
export type CommerceErrorCode = z.infer<typeof commerceErrorCodeSchema>;
export type CatalogQuery = z.infer<typeof catalogQuerySchema>;
export type CatalogSort = z.infer<typeof catalogSortSchema>;
export type CommerceUrlState = z.infer<typeof commerceUrlStateSchema>;
export type CartQuoteRequest = z.infer<typeof cartQuoteRequestSchema>;
export type CheckoutRequest = z.infer<typeof checkoutRequestSchema>;
export declare function parseCatalogQuery(params: URLSearchParams): CatalogQuery;
export declare function encodeCatalogQuery(input: Partial<CatalogQuery>): URLSearchParams;
export declare function parseCommerceUrlState(params: URLSearchParams): CommerceUrlState;
export declare function encodeCommerceUrlState(input: Partial<CommerceUrlState>): URLSearchParams;
//# sourceMappingURL=api.d.ts.map