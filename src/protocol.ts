export const BUILDER_PROTOCOL_VERSION = 1 as const;

export const builderEventTypes = {
  ready: 'ATAP_BUILDER_READY',
  apply: 'ATAP_BUILDER_APPLY',
  change: 'ATAP_BUILDER_CHANGE',
  init: 'ATAP_BUILDER_INIT',
  publish: 'ATAP_BUILDER_PUBLISH',
  scroll: 'ATAP_BUILDER_SCROLL',
  state: 'ATAP_BUILDER_STATE',
  history: 'ATAP_BUILDER_HISTORY',
  backToHome: 'ATAP_BUILDER_BACK_TO_HOME',
  assetSelectRequest: 'ATAP_BUILDER_ASSET_SELECT_REQUEST',
  assetSelectSuccess: 'ATAP_BUILDER_ASSET_SELECT_SUCCESS',
  assetSelectError: 'ATAP_BUILDER_ASSET_SELECT_ERROR',
} as const;

export type BuilderProtocolVersion = typeof BUILDER_PROTOCOL_VERSION;
export type BuilderEventType = (typeof builderEventTypes)[keyof typeof builderEventTypes];
export type DraftState = 'new' | 'unsaved-draft' | 'saved-draft' | 'published';

export type JsonPrimitive = boolean | number | string | null;
export type JsonArray = JsonValue[];
export type JsonObject = { [key: string]: JsonValue };
export type JsonValue = JsonArray | JsonObject | JsonPrimitive;

interface MessageEnvelope<TType extends BuilderEventType> {
  type: TType;
  /** Missing means legacy protocol version 1 during the initial migration. */
  protocolVersion?: BuilderProtocolVersion;
}

type ConfigMessage<TType extends BuilderEventType> = MessageEnvelope<TType> & {
  config: JsonObject;
};

export type BuilderToParentMessage =
  | MessageEnvelope<typeof builderEventTypes.ready>
  | ConfigMessage<typeof builderEventTypes.apply>
  | ConfigMessage<typeof builderEventTypes.change>
  | ConfigMessage<typeof builderEventTypes.publish>
  | (MessageEnvelope<typeof builderEventTypes.scroll> & { scrollTop: number })
  | (MessageEnvelope<typeof builderEventTypes.history> & {
      config?: JsonObject;
      draftState?: DraftState;
      toolsCollapsed?: boolean;
    })
  | MessageEnvelope<typeof builderEventTypes.backToHome>
  | (MessageEnvelope<typeof builderEventTypes.assetSelectRequest> & {
      requestId: string;
      productType?: string;
      blockType?: string;
      mediaKind?: string;
    });

export type ParentToBuilderMessage =
  | (ConfigMessage<typeof builderEventTypes.init> & { draftState: DraftState })
  | (MessageEnvelope<typeof builderEventTypes.state> & { draftState: DraftState })
  | (MessageEnvelope<typeof builderEventTypes.assetSelectSuccess> & {
      requestId: string;
      url: string;
      /** Optional in v1 because the current parent does not always send it. */
      key?: string;
      /** Optional in v1 because the current parent does not always send it. */
      contentType?: string;
    })
  | (MessageEnvelope<typeof builderEventTypes.assetSelectError> & {
      requestId: string;
      message: string;
    });

export type BuilderMessage = BuilderToParentMessage | ParentToBuilderMessage;

const eventTypeSet = new Set<string>(Object.values(builderEventTypes));
const draftStateSet = new Set<string>(['new', 'unsaved-draft', 'saved-draft', 'published']);

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isOptionalString = (value: unknown): boolean => value === undefined || typeof value === 'string';

const hasSupportedVersion = (value: Record<string, unknown>): boolean =>
  value['protocolVersion'] === undefined || value['protocolVersion'] === BUILDER_PROTOCOL_VERSION;

const hasConfig = (value: Record<string, unknown>): boolean => isRecord(value['config']);
const hasDraftState = (value: Record<string, unknown>): boolean =>
  typeof value['draftState'] === 'string' && draftStateSet.has(value['draftState']);

export function isBuilderEventType(value: unknown): value is BuilderEventType {
  return typeof value === 'string' && eventTypeSet.has(value);
}

export function getBuilderProtocolVersion(value: unknown): BuilderProtocolVersion | null {
  if (!isRecord(value) || !hasSupportedVersion(value)) return null;
  return BUILDER_PROTOCOL_VERSION;
}

export function isBuilderMessage(value: unknown): value is BuilderMessage {
  if (!isRecord(value) || !hasSupportedVersion(value)) return false;

  const type = value['type'];
  if (!isBuilderEventType(type)) return false;

  switch (type) {
    case builderEventTypes.ready:
    case builderEventTypes.backToHome:
      return true;
    case builderEventTypes.apply:
    case builderEventTypes.change:
    case builderEventTypes.publish:
      return hasConfig(value);
    case builderEventTypes.init:
      return hasConfig(value) && hasDraftState(value);
    case builderEventTypes.state:
      return hasDraftState(value);
    case builderEventTypes.scroll:
      return typeof value['scrollTop'] === 'number' && Number.isFinite(value['scrollTop']);
    case builderEventTypes.history:
      return (value['config'] === undefined || isRecord(value['config']))
        && (value['draftState'] === undefined || hasDraftState(value))
        && (value['toolsCollapsed'] === undefined || typeof value['toolsCollapsed'] === 'boolean');
    case builderEventTypes.assetSelectRequest:
      return typeof value['requestId'] === 'string'
        && isOptionalString(value['productType'])
        && isOptionalString(value['blockType'])
        && isOptionalString(value['mediaKind']);
    case builderEventTypes.assetSelectSuccess:
      return typeof value['requestId'] === 'string'
        && typeof value['url'] === 'string'
        && isOptionalString(value['key'])
        && isOptionalString(value['contentType']);
    case builderEventTypes.assetSelectError:
      return typeof value['requestId'] === 'string' && typeof value['message'] === 'string';
  }
}
