"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicInventoryStatusSchema = exports.inventoryApiFailureSchema = exports.inventoryErrorCodeSchema = exports.inventoryApiSuccessSchema = exports.inventoryLocationUpdateRequestSchema = exports.inventoryItemUpdateRequestSchema = exports.inventoryItemCreateRequestSchema = exports.inventoryAdjustmentRequestSchema = exports.inventorySmartProductLinkRequestSchema = exports.inventorySmartProductOptionSchema = exports.inventoryMovementListItemSchema = exports.inventoryItemDetailSchema = exports.inventorySummarySchema = exports.inventoryMovementSchema = exports.inventoryLocationSchema = exports.inventoryItemSchema = exports.inventoryBalanceSchema = exports.inventoryMovementTypeSchema = exports.inventoryTrackingModeSchema = exports.inventoryItemStateSchema = exports.stockStatusSchema = exports.INVENTORY_CONTRACT_VERSION = void 0;
const zod_1 = require("zod");
exports.INVENTORY_CONTRACT_VERSION = 1;
exports.stockStatusSchema = zod_1.z.enum(['untracked', 'in_stock', 'low_stock', 'out_of_stock']);
exports.inventoryItemStateSchema = zod_1.z.enum(['active', 'archived']);
exports.inventoryTrackingModeSchema = zod_1.z.enum(['untracked', 'quantity']);
exports.inventoryMovementTypeSchema = zod_1.z.enum([
    'opening_balance', 'adjustment', 'reservation', 'release', 'expiration', 'sale', 'return',
]);
exports.inventoryBalanceSchema = zod_1.z.object({
    locationId: zod_1.z.string().min(1),
    onHand: zod_1.z.number().int().nonnegative(),
    reserved: zod_1.z.number().int().nonnegative(),
    available: zod_1.z.number().int().nonnegative(),
    version: zod_1.z.number().int().nonnegative(),
}).strict();
exports.inventoryItemSchema = zod_1.z.object({
    id: zod_1.z.string().min(1),
    name: zod_1.z.string().min(1).max(200),
    sku: zod_1.z.string().max(100).optional(),
    state: exports.inventoryItemStateSchema,
    trackingMode: exports.inventoryTrackingModeSchema,
    lowStockThreshold: zod_1.z.number().int().nonnegative(),
    stockStatus: exports.stockStatusSchema,
    commerceVariantId: zod_1.z.string().optional(),
    smartProductId: zod_1.z.string().optional(),
    balance: exports.inventoryBalanceSchema.optional(),
    createdAt: zod_1.z.number(),
    updatedAt: zod_1.z.number(),
}).strict();
exports.inventoryLocationSchema = zod_1.z.object({
    id: zod_1.z.string().min(1), name: zod_1.z.string().min(1).max(200), state: exports.inventoryItemStateSchema,
    smartProductId: zod_1.z.string().optional(), createdAt: zod_1.z.number(), updatedAt: zod_1.z.number(),
}).strict();
exports.inventoryMovementSchema = zod_1.z.object({
    id: zod_1.z.string().min(1), itemId: zod_1.z.string().min(1), locationId: zod_1.z.string().min(1),
    actorType: zod_1.z.enum(['merchant', 'system']),
    type: exports.inventoryMovementTypeSchema, onHandDelta: zod_1.z.number().int(), reservedDelta: zod_1.z.number().int(),
    reason: zod_1.z.string().max(1000).optional(), sourceType: zod_1.z.string().optional(), sourceId: zod_1.z.string().optional(),
    createdAt: zod_1.z.number(),
}).strict();
exports.inventorySummarySchema = zod_1.z.object({
    itemCount: zod_1.z.number().int().nonnegative(), trackedCount: zod_1.z.number().int().nonnegative(),
    lowStockCount: zod_1.z.number().int().nonnegative(), outOfStockCount: zod_1.z.number().int().nonnegative(),
    recentMovements: zod_1.z.array(exports.inventoryMovementSchema),
}).strict();
exports.inventoryItemDetailSchema = exports.inventoryItemSchema.extend({
    movements: zod_1.z.array(exports.inventoryMovementSchema),
}).strict();
exports.inventoryMovementListItemSchema = exports.inventoryMovementSchema.extend({
    itemName: zod_1.z.string().min(1),
}).strict();
exports.inventorySmartProductOptionSchema = zod_1.z.object({
    id: zod_1.z.string().min(1), productCode: zod_1.z.string().min(1), name: zod_1.z.string().min(1),
    linkedInventoryItemId: zod_1.z.string().optional(),
}).strict();
exports.inventorySmartProductLinkRequestSchema = zod_1.z.object({ smartProductId: zod_1.z.string().min(1) }).strict();
exports.inventoryAdjustmentRequestSchema = zod_1.z.object({
    operationId: zod_1.z.string().uuid(), quantityDelta: zod_1.z.number().int(), reason: zod_1.z.string().trim().min(1).max(1000),
}).strict();
exports.inventoryItemCreateRequestSchema = zod_1.z.object({
    name: zod_1.z.string().trim().min(1).max(200), sku: zod_1.z.string().trim().max(100).optional(),
    trackingMode: exports.inventoryTrackingModeSchema.default('quantity'), lowStockThreshold: zod_1.z.number().int().nonnegative().default(0),
    openingQuantity: zod_1.z.number().int().nonnegative().default(0), operationId: zod_1.z.string().uuid(),
}).strict();
exports.inventoryItemUpdateRequestSchema = zod_1.z.object({
    name: zod_1.z.string().trim().min(1).max(200).optional(), sku: zod_1.z.string().trim().max(100).optional(),
    lowStockThreshold: zod_1.z.number().int().nonnegative().optional(), state: exports.inventoryItemStateSchema.optional(),
}).strict();
exports.inventoryLocationUpdateRequestSchema = zod_1.z.object({
    name: zod_1.z.string().trim().min(1).max(200),
}).strict();
const inventoryApiSuccessSchema = (result) => zod_1.z.object({
    contractVersion: zod_1.z.literal(exports.INVENTORY_CONTRACT_VERSION), type: zod_1.z.string().min(1), result,
}).strict();
exports.inventoryApiSuccessSchema = inventoryApiSuccessSchema;
exports.inventoryErrorCodeSchema = zod_1.z.enum([
    'VALIDATION_FAILED', 'UNAUTHORIZED', 'NOT_FOUND', 'ADDON_DISABLED', 'INSUFFICIENT_STOCK',
    'ACTIVE_RESERVATION', 'CONFLICT', 'INTERNAL_ERROR',
]);
exports.inventoryApiFailureSchema = zod_1.z.object({
    contractVersion: zod_1.z.literal(exports.INVENTORY_CONTRACT_VERSION), type: zod_1.z.literal('inventory_error'),
    error: zod_1.z.object({
        code: exports.inventoryErrorCodeSchema, message: zod_1.z.string().min(1), retryable: zod_1.z.boolean(),
        fieldErrors: zod_1.z.record(zod_1.z.array(zod_1.z.string())).optional(),
    }).strict(),
}).strict();
exports.publicInventoryStatusSchema = zod_1.z.object({
    name: zod_1.z.string().min(1), stockStatus: exports.stockStatusSchema, updatedAt: zod_1.z.number(),
}).strict();
//# sourceMappingURL=index.js.map