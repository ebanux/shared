import { z } from 'zod';
export const INVENTORY_CONTRACT_VERSION = 1;
export const stockStatusSchema = z.enum(['untracked', 'in_stock', 'low_stock', 'out_of_stock']);
export const inventoryItemStateSchema = z.enum(['active', 'archived']);
export const inventoryTrackingModeSchema = z.enum(['untracked', 'quantity']);
export const inventoryMovementTypeSchema = z.enum([
    'opening_balance', 'adjustment', 'reservation', 'release', 'expiration', 'sale', 'return',
]);
export const inventoryBalanceSchema = z.object({
    locationId: z.string().min(1),
    onHand: z.number().int().nonnegative(),
    reserved: z.number().int().nonnegative(),
    available: z.number().int().nonnegative(),
    version: z.number().int().nonnegative(),
}).strict();
export const inventoryItemSchema = z.object({
    id: z.string().min(1),
    name: z.string().min(1).max(200),
    sku: z.string().max(100).optional(),
    state: inventoryItemStateSchema,
    trackingMode: inventoryTrackingModeSchema,
    lowStockThreshold: z.number().int().nonnegative(),
    stockStatus: stockStatusSchema,
    commerceVariantId: z.string().optional(),
    smartProductId: z.string().optional(),
    balance: inventoryBalanceSchema.optional(),
    createdAt: z.number(),
    updatedAt: z.number(),
}).strict();
export const inventoryLocationSchema = z.object({
    id: z.string().min(1), name: z.string().min(1).max(200), state: inventoryItemStateSchema,
    smartProductId: z.string().optional(), createdAt: z.number(), updatedAt: z.number(),
}).strict();
export const inventoryMovementSchema = z.object({
    id: z.string().min(1), itemId: z.string().min(1), locationId: z.string().min(1),
    actorType: z.enum(['merchant', 'system']),
    type: inventoryMovementTypeSchema, onHandDelta: z.number().int(), reservedDelta: z.number().int(),
    reason: z.string().max(1000).optional(), sourceType: z.string().optional(), sourceId: z.string().optional(),
    createdAt: z.number(),
}).strict();
export const inventorySummarySchema = z.object({
    itemCount: z.number().int().nonnegative(), trackedCount: z.number().int().nonnegative(),
    lowStockCount: z.number().int().nonnegative(), outOfStockCount: z.number().int().nonnegative(),
    recentMovements: z.array(inventoryMovementSchema),
}).strict();
export const inventoryItemDetailSchema = inventoryItemSchema.extend({
    movements: z.array(inventoryMovementSchema),
}).strict();
export const inventoryMovementListItemSchema = inventoryMovementSchema.extend({
    itemName: z.string().min(1),
}).strict();
export const inventorySmartProductOptionSchema = z.object({
    id: z.string().min(1), productCode: z.string().min(1), name: z.string().min(1),
    linkedInventoryItemId: z.string().optional(),
}).strict();
export const inventorySmartProductLinkRequestSchema = z.object({ smartProductId: z.string().min(1) }).strict();
export const inventoryAdjustmentRequestSchema = z.object({
    operationId: z.string().uuid(), quantityDelta: z.number().int(), reason: z.string().trim().min(1).max(1000),
}).strict();
export const inventoryItemCreateRequestSchema = z.object({
    name: z.string().trim().min(1).max(200), sku: z.string().trim().max(100).optional(),
    trackingMode: inventoryTrackingModeSchema.default('quantity'), lowStockThreshold: z.number().int().nonnegative().default(0),
    openingQuantity: z.number().int().nonnegative().default(0), operationId: z.string().uuid(),
}).strict();
export const inventoryItemUpdateRequestSchema = z.object({
    name: z.string().trim().min(1).max(200).optional(), sku: z.string().trim().max(100).optional(),
    lowStockThreshold: z.number().int().nonnegative().optional(), state: inventoryItemStateSchema.optional(),
}).strict();
export const inventoryLocationUpdateRequestSchema = z.object({
    name: z.string().trim().min(1).max(200),
}).strict();
export const inventoryApiSuccessSchema = (result) => z.object({
    contractVersion: z.literal(INVENTORY_CONTRACT_VERSION), type: z.string().min(1), result,
}).strict();
export const inventoryErrorCodeSchema = z.enum([
    'VALIDATION_FAILED', 'UNAUTHORIZED', 'NOT_FOUND', 'ADDON_DISABLED', 'INSUFFICIENT_STOCK',
    'ACTIVE_RESERVATION', 'CONFLICT', 'INTERNAL_ERROR',
]);
export const inventoryApiFailureSchema = z.object({
    contractVersion: z.literal(INVENTORY_CONTRACT_VERSION), type: z.literal('inventory_error'),
    error: z.object({
        code: inventoryErrorCodeSchema, message: z.string().min(1), retryable: z.boolean(),
        fieldErrors: z.record(z.array(z.string())).optional(),
    }).strict(),
}).strict();
export const publicInventoryStatusSchema = z.object({
    name: z.string().min(1), stockStatus: stockStatusSchema, updatedAt: z.number(),
}).strict();
//# sourceMappingURL=index.js.map