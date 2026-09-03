import { z } from 'zod';
export declare const INVENTORY_CONTRACT_VERSION: 1;
export declare const stockStatusSchema: z.ZodEnum<["untracked", "in_stock", "low_stock", "out_of_stock"]>;
export declare const inventoryItemStateSchema: z.ZodEnum<["active", "archived"]>;
export declare const inventoryTrackingModeSchema: z.ZodEnum<["untracked", "quantity"]>;
export declare const inventoryMovementTypeSchema: z.ZodEnum<["opening_balance", "adjustment", "reservation", "release", "expiration", "sale", "return"]>;
export declare const inventoryBalanceSchema: z.ZodObject<{
    locationId: z.ZodString;
    onHand: z.ZodNumber;
    reserved: z.ZodNumber;
    available: z.ZodNumber;
    version: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    version: number;
    locationId: string;
    onHand: number;
    reserved: number;
    available: number;
}, {
    version: number;
    locationId: string;
    onHand: number;
    reserved: number;
    available: number;
}>;
export declare const inventoryItemSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    sku: z.ZodOptional<z.ZodString>;
    state: z.ZodEnum<["active", "archived"]>;
    trackingMode: z.ZodEnum<["untracked", "quantity"]>;
    lowStockThreshold: z.ZodNumber;
    stockStatus: z.ZodEnum<["untracked", "in_stock", "low_stock", "out_of_stock"]>;
    commerceVariantId: z.ZodOptional<z.ZodString>;
    smartProductId: z.ZodOptional<z.ZodString>;
    balance: z.ZodOptional<z.ZodObject<{
        locationId: z.ZodString;
        onHand: z.ZodNumber;
        reserved: z.ZodNumber;
        available: z.ZodNumber;
        version: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        version: number;
        locationId: string;
        onHand: number;
        reserved: number;
        available: number;
    }, {
        version: number;
        locationId: string;
        onHand: number;
        reserved: number;
        available: number;
    }>>;
    createdAt: z.ZodNumber;
    updatedAt: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    name: string;
    id: string;
    state: "active" | "archived";
    trackingMode: "untracked" | "quantity";
    lowStockThreshold: number;
    stockStatus: "untracked" | "in_stock" | "low_stock" | "out_of_stock";
    createdAt: number;
    updatedAt: number;
    sku?: string | undefined;
    commerceVariantId?: string | undefined;
    smartProductId?: string | undefined;
    balance?: {
        version: number;
        locationId: string;
        onHand: number;
        reserved: number;
        available: number;
    } | undefined;
}, {
    name: string;
    id: string;
    state: "active" | "archived";
    trackingMode: "untracked" | "quantity";
    lowStockThreshold: number;
    stockStatus: "untracked" | "in_stock" | "low_stock" | "out_of_stock";
    createdAt: number;
    updatedAt: number;
    sku?: string | undefined;
    commerceVariantId?: string | undefined;
    smartProductId?: string | undefined;
    balance?: {
        version: number;
        locationId: string;
        onHand: number;
        reserved: number;
        available: number;
    } | undefined;
}>;
export declare const inventoryLocationSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    state: z.ZodEnum<["active", "archived"]>;
    smartProductId: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodNumber;
    updatedAt: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    name: string;
    id: string;
    state: "active" | "archived";
    createdAt: number;
    updatedAt: number;
    smartProductId?: string | undefined;
}, {
    name: string;
    id: string;
    state: "active" | "archived";
    createdAt: number;
    updatedAt: number;
    smartProductId?: string | undefined;
}>;
export declare const inventoryMovementSchema: z.ZodObject<{
    id: z.ZodString;
    itemId: z.ZodString;
    locationId: z.ZodString;
    actorType: z.ZodEnum<["merchant", "system"]>;
    type: z.ZodEnum<["opening_balance", "adjustment", "reservation", "release", "expiration", "sale", "return"]>;
    onHandDelta: z.ZodNumber;
    reservedDelta: z.ZodNumber;
    reason: z.ZodOptional<z.ZodString>;
    sourceType: z.ZodOptional<z.ZodString>;
    sourceId: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    type: "release" | "opening_balance" | "adjustment" | "reservation" | "expiration" | "sale" | "return";
    id: string;
    locationId: string;
    createdAt: number;
    itemId: string;
    actorType: "merchant" | "system";
    onHandDelta: number;
    reservedDelta: number;
    reason?: string | undefined;
    sourceType?: string | undefined;
    sourceId?: string | undefined;
}, {
    type: "release" | "opening_balance" | "adjustment" | "reservation" | "expiration" | "sale" | "return";
    id: string;
    locationId: string;
    createdAt: number;
    itemId: string;
    actorType: "merchant" | "system";
    onHandDelta: number;
    reservedDelta: number;
    reason?: string | undefined;
    sourceType?: string | undefined;
    sourceId?: string | undefined;
}>;
export declare const inventorySummarySchema: z.ZodObject<{
    itemCount: z.ZodNumber;
    trackedCount: z.ZodNumber;
    lowStockCount: z.ZodNumber;
    outOfStockCount: z.ZodNumber;
    recentMovements: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        itemId: z.ZodString;
        locationId: z.ZodString;
        actorType: z.ZodEnum<["merchant", "system"]>;
        type: z.ZodEnum<["opening_balance", "adjustment", "reservation", "release", "expiration", "sale", "return"]>;
        onHandDelta: z.ZodNumber;
        reservedDelta: z.ZodNumber;
        reason: z.ZodOptional<z.ZodString>;
        sourceType: z.ZodOptional<z.ZodString>;
        sourceId: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        type: "release" | "opening_balance" | "adjustment" | "reservation" | "expiration" | "sale" | "return";
        id: string;
        locationId: string;
        createdAt: number;
        itemId: string;
        actorType: "merchant" | "system";
        onHandDelta: number;
        reservedDelta: number;
        reason?: string | undefined;
        sourceType?: string | undefined;
        sourceId?: string | undefined;
    }, {
        type: "release" | "opening_balance" | "adjustment" | "reservation" | "expiration" | "sale" | "return";
        id: string;
        locationId: string;
        createdAt: number;
        itemId: string;
        actorType: "merchant" | "system";
        onHandDelta: number;
        reservedDelta: number;
        reason?: string | undefined;
        sourceType?: string | undefined;
        sourceId?: string | undefined;
    }>, "many">;
}, "strict", z.ZodTypeAny, {
    itemCount: number;
    trackedCount: number;
    lowStockCount: number;
    outOfStockCount: number;
    recentMovements: {
        type: "release" | "opening_balance" | "adjustment" | "reservation" | "expiration" | "sale" | "return";
        id: string;
        locationId: string;
        createdAt: number;
        itemId: string;
        actorType: "merchant" | "system";
        onHandDelta: number;
        reservedDelta: number;
        reason?: string | undefined;
        sourceType?: string | undefined;
        sourceId?: string | undefined;
    }[];
}, {
    itemCount: number;
    trackedCount: number;
    lowStockCount: number;
    outOfStockCount: number;
    recentMovements: {
        type: "release" | "opening_balance" | "adjustment" | "reservation" | "expiration" | "sale" | "return";
        id: string;
        locationId: string;
        createdAt: number;
        itemId: string;
        actorType: "merchant" | "system";
        onHandDelta: number;
        reservedDelta: number;
        reason?: string | undefined;
        sourceType?: string | undefined;
        sourceId?: string | undefined;
    }[];
}>;
export declare const inventoryItemDetailSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    sku: z.ZodOptional<z.ZodString>;
    state: z.ZodEnum<["active", "archived"]>;
    trackingMode: z.ZodEnum<["untracked", "quantity"]>;
    lowStockThreshold: z.ZodNumber;
    stockStatus: z.ZodEnum<["untracked", "in_stock", "low_stock", "out_of_stock"]>;
    commerceVariantId: z.ZodOptional<z.ZodString>;
    smartProductId: z.ZodOptional<z.ZodString>;
    balance: z.ZodOptional<z.ZodObject<{
        locationId: z.ZodString;
        onHand: z.ZodNumber;
        reserved: z.ZodNumber;
        available: z.ZodNumber;
        version: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        version: number;
        locationId: string;
        onHand: number;
        reserved: number;
        available: number;
    }, {
        version: number;
        locationId: string;
        onHand: number;
        reserved: number;
        available: number;
    }>>;
    createdAt: z.ZodNumber;
    updatedAt: z.ZodNumber;
} & {
    movements: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        itemId: z.ZodString;
        locationId: z.ZodString;
        actorType: z.ZodEnum<["merchant", "system"]>;
        type: z.ZodEnum<["opening_balance", "adjustment", "reservation", "release", "expiration", "sale", "return"]>;
        onHandDelta: z.ZodNumber;
        reservedDelta: z.ZodNumber;
        reason: z.ZodOptional<z.ZodString>;
        sourceType: z.ZodOptional<z.ZodString>;
        sourceId: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        type: "release" | "opening_balance" | "adjustment" | "reservation" | "expiration" | "sale" | "return";
        id: string;
        locationId: string;
        createdAt: number;
        itemId: string;
        actorType: "merchant" | "system";
        onHandDelta: number;
        reservedDelta: number;
        reason?: string | undefined;
        sourceType?: string | undefined;
        sourceId?: string | undefined;
    }, {
        type: "release" | "opening_balance" | "adjustment" | "reservation" | "expiration" | "sale" | "return";
        id: string;
        locationId: string;
        createdAt: number;
        itemId: string;
        actorType: "merchant" | "system";
        onHandDelta: number;
        reservedDelta: number;
        reason?: string | undefined;
        sourceType?: string | undefined;
        sourceId?: string | undefined;
    }>, "many">;
}, "strict", z.ZodTypeAny, {
    name: string;
    id: string;
    state: "active" | "archived";
    trackingMode: "untracked" | "quantity";
    lowStockThreshold: number;
    stockStatus: "untracked" | "in_stock" | "low_stock" | "out_of_stock";
    createdAt: number;
    updatedAt: number;
    movements: {
        type: "release" | "opening_balance" | "adjustment" | "reservation" | "expiration" | "sale" | "return";
        id: string;
        locationId: string;
        createdAt: number;
        itemId: string;
        actorType: "merchant" | "system";
        onHandDelta: number;
        reservedDelta: number;
        reason?: string | undefined;
        sourceType?: string | undefined;
        sourceId?: string | undefined;
    }[];
    sku?: string | undefined;
    commerceVariantId?: string | undefined;
    smartProductId?: string | undefined;
    balance?: {
        version: number;
        locationId: string;
        onHand: number;
        reserved: number;
        available: number;
    } | undefined;
}, {
    name: string;
    id: string;
    state: "active" | "archived";
    trackingMode: "untracked" | "quantity";
    lowStockThreshold: number;
    stockStatus: "untracked" | "in_stock" | "low_stock" | "out_of_stock";
    createdAt: number;
    updatedAt: number;
    movements: {
        type: "release" | "opening_balance" | "adjustment" | "reservation" | "expiration" | "sale" | "return";
        id: string;
        locationId: string;
        createdAt: number;
        itemId: string;
        actorType: "merchant" | "system";
        onHandDelta: number;
        reservedDelta: number;
        reason?: string | undefined;
        sourceType?: string | undefined;
        sourceId?: string | undefined;
    }[];
    sku?: string | undefined;
    commerceVariantId?: string | undefined;
    smartProductId?: string | undefined;
    balance?: {
        version: number;
        locationId: string;
        onHand: number;
        reserved: number;
        available: number;
    } | undefined;
}>;
export declare const inventoryMovementListItemSchema: z.ZodObject<{
    id: z.ZodString;
    itemId: z.ZodString;
    locationId: z.ZodString;
    actorType: z.ZodEnum<["merchant", "system"]>;
    type: z.ZodEnum<["opening_balance", "adjustment", "reservation", "release", "expiration", "sale", "return"]>;
    onHandDelta: z.ZodNumber;
    reservedDelta: z.ZodNumber;
    reason: z.ZodOptional<z.ZodString>;
    sourceType: z.ZodOptional<z.ZodString>;
    sourceId: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodNumber;
} & {
    itemName: z.ZodString;
}, "strict", z.ZodTypeAny, {
    type: "release" | "opening_balance" | "adjustment" | "reservation" | "expiration" | "sale" | "return";
    id: string;
    locationId: string;
    createdAt: number;
    itemId: string;
    actorType: "merchant" | "system";
    onHandDelta: number;
    reservedDelta: number;
    itemName: string;
    reason?: string | undefined;
    sourceType?: string | undefined;
    sourceId?: string | undefined;
}, {
    type: "release" | "opening_balance" | "adjustment" | "reservation" | "expiration" | "sale" | "return";
    id: string;
    locationId: string;
    createdAt: number;
    itemId: string;
    actorType: "merchant" | "system";
    onHandDelta: number;
    reservedDelta: number;
    itemName: string;
    reason?: string | undefined;
    sourceType?: string | undefined;
    sourceId?: string | undefined;
}>;
export declare const inventorySmartProductOptionSchema: z.ZodObject<{
    id: z.ZodString;
    productCode: z.ZodString;
    name: z.ZodString;
    linkedInventoryItemId: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    name: string;
    id: string;
    productCode: string;
    linkedInventoryItemId?: string | undefined;
}, {
    name: string;
    id: string;
    productCode: string;
    linkedInventoryItemId?: string | undefined;
}>;
export declare const inventorySmartProductLinkRequestSchema: z.ZodObject<{
    smartProductId: z.ZodString;
}, "strict", z.ZodTypeAny, {
    smartProductId: string;
}, {
    smartProductId: string;
}>;
export declare const inventoryAdjustmentRequestSchema: z.ZodObject<{
    operationId: z.ZodString;
    quantityDelta: z.ZodNumber;
    reason: z.ZodString;
}, "strict", z.ZodTypeAny, {
    reason: string;
    operationId: string;
    quantityDelta: number;
}, {
    reason: string;
    operationId: string;
    quantityDelta: number;
}>;
export declare const inventoryItemCreateRequestSchema: z.ZodObject<{
    name: z.ZodString;
    sku: z.ZodOptional<z.ZodString>;
    trackingMode: z.ZodDefault<z.ZodEnum<["untracked", "quantity"]>>;
    lowStockThreshold: z.ZodDefault<z.ZodNumber>;
    openingQuantity: z.ZodDefault<z.ZodNumber>;
    operationId: z.ZodString;
}, "strict", z.ZodTypeAny, {
    name: string;
    trackingMode: "untracked" | "quantity";
    lowStockThreshold: number;
    operationId: string;
    openingQuantity: number;
    sku?: string | undefined;
}, {
    name: string;
    operationId: string;
    sku?: string | undefined;
    trackingMode?: "untracked" | "quantity" | undefined;
    lowStockThreshold?: number | undefined;
    openingQuantity?: number | undefined;
}>;
export declare const inventoryItemUpdateRequestSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    sku: z.ZodOptional<z.ZodString>;
    lowStockThreshold: z.ZodOptional<z.ZodNumber>;
    state: z.ZodOptional<z.ZodEnum<["active", "archived"]>>;
}, "strict", z.ZodTypeAny, {
    name?: string | undefined;
    state?: "active" | "archived" | undefined;
    sku?: string | undefined;
    lowStockThreshold?: number | undefined;
}, {
    name?: string | undefined;
    state?: "active" | "archived" | undefined;
    sku?: string | undefined;
    lowStockThreshold?: number | undefined;
}>;
export declare const inventoryLocationUpdateRequestSchema: z.ZodObject<{
    name: z.ZodString;
}, "strict", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
export declare const inventoryApiSuccessSchema: <T extends z.ZodTypeAny>(result: T) => z.ZodObject<{
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
export declare const inventoryErrorCodeSchema: z.ZodEnum<["VALIDATION_FAILED", "UNAUTHORIZED", "NOT_FOUND", "ADDON_DISABLED", "INSUFFICIENT_STOCK", "ACTIVE_RESERVATION", "CONFLICT", "INTERNAL_ERROR"]>;
export declare const inventoryApiFailureSchema: z.ZodObject<{
    contractVersion: z.ZodLiteral<1>;
    type: z.ZodLiteral<"inventory_error">;
    error: z.ZodObject<{
        code: z.ZodEnum<["VALIDATION_FAILED", "UNAUTHORIZED", "NOT_FOUND", "ADDON_DISABLED", "INSUFFICIENT_STOCK", "ACTIVE_RESERVATION", "CONFLICT", "INTERNAL_ERROR"]>;
        message: z.ZodString;
        retryable: z.ZodBoolean;
        fieldErrors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>>;
    }, "strict", z.ZodTypeAny, {
        code: "VALIDATION_FAILED" | "UNAUTHORIZED" | "NOT_FOUND" | "ADDON_DISABLED" | "INSUFFICIENT_STOCK" | "ACTIVE_RESERVATION" | "CONFLICT" | "INTERNAL_ERROR";
        message: string;
        retryable: boolean;
        fieldErrors?: Record<string, string[]> | undefined;
    }, {
        code: "VALIDATION_FAILED" | "UNAUTHORIZED" | "NOT_FOUND" | "ADDON_DISABLED" | "INSUFFICIENT_STOCK" | "ACTIVE_RESERVATION" | "CONFLICT" | "INTERNAL_ERROR";
        message: string;
        retryable: boolean;
        fieldErrors?: Record<string, string[]> | undefined;
    }>;
}, "strict", z.ZodTypeAny, {
    type: "inventory_error";
    error: {
        code: "VALIDATION_FAILED" | "UNAUTHORIZED" | "NOT_FOUND" | "ADDON_DISABLED" | "INSUFFICIENT_STOCK" | "ACTIVE_RESERVATION" | "CONFLICT" | "INTERNAL_ERROR";
        message: string;
        retryable: boolean;
        fieldErrors?: Record<string, string[]> | undefined;
    };
    contractVersion: 1;
}, {
    type: "inventory_error";
    error: {
        code: "VALIDATION_FAILED" | "UNAUTHORIZED" | "NOT_FOUND" | "ADDON_DISABLED" | "INSUFFICIENT_STOCK" | "ACTIVE_RESERVATION" | "CONFLICT" | "INTERNAL_ERROR";
        message: string;
        retryable: boolean;
        fieldErrors?: Record<string, string[]> | undefined;
    };
    contractVersion: 1;
}>;
export declare const publicInventoryStatusSchema: z.ZodObject<{
    name: z.ZodString;
    stockStatus: z.ZodEnum<["untracked", "in_stock", "low_stock", "out_of_stock"]>;
    updatedAt: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    name: string;
    stockStatus: "untracked" | "in_stock" | "low_stock" | "out_of_stock";
    updatedAt: number;
}, {
    name: string;
    stockStatus: "untracked" | "in_stock" | "low_stock" | "out_of_stock";
    updatedAt: number;
}>;
export type InventoryBalance = z.infer<typeof inventoryBalanceSchema>;
export type InventoryItem = z.infer<typeof inventoryItemSchema>;
export type InventoryLocation = z.infer<typeof inventoryLocationSchema>;
export type InventoryMovement = z.infer<typeof inventoryMovementSchema>;
export type InventoryMovementListItem = z.infer<typeof inventoryMovementListItemSchema>;
export type InventoryItemDetail = z.infer<typeof inventoryItemDetailSchema>;
export type InventorySmartProductOption = z.infer<typeof inventorySmartProductOptionSchema>;
export type InventorySummary = z.infer<typeof inventorySummarySchema>;
export type PublicInventoryStatus = z.infer<typeof publicInventoryStatusSchema>;
export type StockStatus = z.infer<typeof stockStatusSchema>;
//# sourceMappingURL=index.d.ts.map