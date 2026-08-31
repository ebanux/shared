import { z } from 'zod';

import {
  currencyCodeSchema,
  minorAmountSchema,
  priceDefinitionSchema,
  pricingSummarySchema,
  quantityDiscountSchema,
} from './pricing.js';

export const availabilitySchema = z.enum(['in_stock', 'out_of_stock', 'preorder', 'unavailable']);
export const personalizationValueSchema = z.union([z.string(), z.number().finite()]);
export const personalizationValuesSchema = z.record(personalizationValueSchema);
export const personalizationFieldSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  type: z.enum(['instruction', 'number', 'text']),
  required: z.boolean().optional(),
  maxLength: z.number().int().positive().optional(),
}).strict();

export const commerceBadgeSchema = z.object({
  kind: z.enum(['availability', 'custom', 'customizable', 'savings']),
  label: z.string().min(1).max(40),
  tone: z.enum(['accent', 'neutral', 'warning']),
}).strict();

export const productVariantSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  sku: z.string().optional(),
  image: z.string().url().optional(),
  availability: availabilitySchema,
  quantityDiscounts: z.array(quantityDiscountSchema),
  price: priceDefinitionSchema,
  currency: currencyCodeSchema,
}).strict();

export const catalogProductCardSchema = z.object({
  id: z.string().min(1),
  storeSlug: z.string().min(1),
  productCode: z.string().optional(),
  publicUrl: z.string().url().optional(),
  slug: z.string().min(1),
  title: z.string().min(1),
  image: z.string().url().optional(),
  tags: z.array(z.string()),
  availability: availabilitySchema,
  badges: z.array(commerceBadgeSchema).max(3),
  defaultVariantId: z.string().optional(),
  pricing: pricingSummarySchema.nullable(),
  shipping: z.object({ enabled: z.boolean(), displayName: z.string().optional() }).strict(),
}).strict();

export const productDetailSchema = catalogProductCardSchema.omit({ image: true, pricing: true }).extend({
  description: z.string(),
  images: z.array(z.string().url()),
  brand: z.string(),
  condition: z.enum(['new', 'refurbished', 'used']),
  personalizationFields: z.array(personalizationFieldSchema),
  shipping: z.object({
    enabled: z.boolean(),
    displayName: z.string().optional(),
    firstItem: minorAmountSchema.optional(),
    additionalItem: minorAmountSchema.optional(),
  }).strict(),
  variants: z.array(productVariantSchema),
  seo: z.object({ title: z.string().optional(), description: z.string().optional() }).strict().optional(),
}).strict();

export const collectionSummarySchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string(),
  coverImage: z.string().url().optional(),
  seo: z.object({ title: z.string().optional(), description: z.string().optional() }).strict().optional(),
  showInNavigation: z.boolean(),
  sortOrder: z.number().int(),
}).strict();

const checkoutSettingsSchema = z.object({
  billingAddressCollection: z.enum(['auto', 'required']),
  terms: z.object({ label: z.string(), url: z.string().url() }).strict().optional(),
  confirmationMessage: z.string().optional(),
  supportEmail: z.string().email().optional(),
  supportUrl: z.string().url().optional(),
}).strict();

export const storefrontStoreSchema = z.object({
  slug: z.string().min(1),
  displayName: z.string().min(1),
  description: z.string().optional(),
  logo: z.string().url().optional(),
  currency: currencyCodeSchema,
  allowedShippingCountries: z.array(z.string()),
  presentation: z.record(z.unknown()).optional(),
  presentationVersion: z.number().int().positive().optional(),
  presentationUpdatedAt: z.number().optional(),
  navigationCollections: z.array(collectionSummarySchema.pick({ id: true, slug: true, title: true })).optional(),
  checkoutSettings: checkoutSettingsSchema.optional(),
}).strict();

export const cartLineSchema = z.object({
  clientLineId: z.string().min(1),
  variantId: z.string().min(1),
  quantity: z.number().int().min(1).max(99),
  personalization: personalizationValuesSchema,
  customerAmount: minorAmountSchema.optional(),
}).strict();

export const quoteIssueSchema = z.object({
  code: z.string().min(1),
  message: z.string().min(1),
  severity: z.enum(['error', 'warning']),
  fieldId: z.string().optional(),
}).strict();

export const quotedCartLineSchema = cartLineSchema.extend({
  productId: z.string().optional(),
  productTitle: z.string().optional(),
  productImage: z.string().url().optional(),
  productCode: z.string().optional(),
  variantName: z.string().optional(),
  sku: z.string().optional(),
  unitAmount: minorAmountSchema.optional(),
  currency: currencyCodeSchema.optional(),
  priceId: z.string().optional(),
  personalizationLabels: z.record(z.string()).optional(),
  subtotal: minorAmountSchema,
  discount: minorAmountSchema,
  shipping: minorAmountSchema,
  total: minorAmountSchema,
  pricing: priceDefinitionSchema,
  issues: z.array(quoteIssueSchema),
  appliedDiscount: quantityDiscountSchema.optional(),
  tierCalculation: z.object({
    mode: z.enum(['graduated', 'volume']), quantity: z.number().int().positive(), total: minorAmountSchema,
  }).strict().optional(),
  productionInstructions: z.array(z.object({
    fieldId: z.string(), label: z.string(), type: z.enum(['instruction', 'number', 'text']),
    value: personalizationValueSchema.optional(),
  }).strict()).optional(),
}).strict();

export const cartQuoteSchema = z.object({
  storeSlug: z.string().min(1),
  currency: currencyCodeSchema,
  lines: z.array(quotedCartLineSchema),
  subtotal: minorAmountSchema,
  automaticDiscount: minorAmountSchema,
  shipping: minorAmountSchema,
  total: minorAmountSchema,
  promotionCodeEligible: z.boolean(),
  recurring: z.boolean(),
  requiresShippingAddress: z.boolean(),
  quotedAt: z.string().datetime(),
}).strict();

export const catalogResponseSchema = z.object({
  store: storefrontStoreSchema,
  facets: z.object({ tags: z.array(z.string()) }).strict(),
  items: z.array(catalogProductCardSchema),
  nextCursor: z.string().optional(),
}).strict();

export const collectionDetailSchema = z.object({
  store: storefrontStoreSchema,
  collection: collectionSummarySchema,
  facets: z.object({ tags: z.array(z.string()) }).strict(),
  items: z.array(catalogProductCardSchema),
  total: z.number().int().nonnegative(),
  nextCursor: z.string().optional(),
}).strict();

export const collectionListResponseSchema = z.object({
  store: storefrontStoreSchema,
  items: z.array(collectionSummarySchema),
}).strict();

export const checkoutSessionResultSchema = z.object({
  checkoutUrl: z.string().url(),
  orderId: z.string().min(1),
  orderToken: z.string().min(1),
}).strict();

export const subscriptionPortalResultSchema = z.object({ url: z.string().url() }).strict();

export const orderStatusSchema = z.object({
  orderId: z.string().min(1),
  storeSlug: z.string().min(1),
  paymentState: z.enum(['expired', 'failed', 'paid', 'pending', 'refunded']),
  fulfillmentState: z.enum(['unfulfilled', 'processing', 'shipped', 'delivered', 'cancelled']),
  tracking: z.object({
    carrierCode: z.string(), carrierName: z.string(), trackingNumber: z.string(), trackingUrl: z.string().url().optional(),
  }).strict().optional(),
  events: z.array(z.object({
    id: z.string(), type: z.string(), fromState: z.string().optional(), toState: z.string().optional(), createdAt: z.number(),
  }).strict()),
  currency: currencyCodeSchema,
  total: minorAmountSchema,
  updatedAt: z.number(),
  storeName: z.string().optional(),
  storeUrl: z.string().url().optional(),
  confirmationMessage: z.string().optional(),
  supportEmail: z.string().email().optional(),
  supportUrl: z.string().url().optional(),
  subscription: z.object({
    status: z.string(), amount: minorAmountSchema, currency: currencyCodeSchema,
    recurring: z.object({ interval: z.string(), intervalCount: z.number().int().positive() }).strict(),
    currentPeriodEnd: z.number().optional(), cancelAtPeriodEnd: z.boolean(), canManage: z.boolean(),
  }).strict().optional(),
}).strict();

export type Availability = z.infer<typeof availabilitySchema>;
export type CartLine = z.infer<typeof cartLineSchema>;
export type CartQuote = z.infer<typeof cartQuoteSchema>;
export type CatalogProductCard = z.infer<typeof catalogProductCardSchema>;
export type CatalogResponse = z.infer<typeof catalogResponseSchema>;
export type CollectionDetail = z.infer<typeof collectionDetailSchema>;
export type CollectionListResponse = z.infer<typeof collectionListResponseSchema>;
export type CollectionSummary = z.infer<typeof collectionSummarySchema>;
export type CommerceBadge = z.infer<typeof commerceBadgeSchema>;
export type OrderStatus = z.infer<typeof orderStatusSchema>;
export type ProductDetail = z.infer<typeof productDetailSchema>;
export type CheckoutSessionResult = z.infer<typeof checkoutSessionResultSchema>;
export type SubscriptionPortalResult = z.infer<typeof subscriptionPortalResultSchema>;
export type StorefrontStore = z.infer<typeof storefrontStoreSchema>;
