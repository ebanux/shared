export declare const BUILDER_PROTOCOL_VERSION: 1;
export declare const builderEventTypes: {
    readonly ready: "ATAP_BUILDER_READY";
    readonly apply: "ATAP_BUILDER_APPLY";
    readonly change: "ATAP_BUILDER_CHANGE";
    readonly init: "ATAP_BUILDER_INIT";
    readonly publish: "ATAP_BUILDER_PUBLISH";
    readonly scroll: "ATAP_BUILDER_SCROLL";
    readonly state: "ATAP_BUILDER_STATE";
    readonly history: "ATAP_BUILDER_HISTORY";
    readonly backToHome: "ATAP_BUILDER_BACK_TO_HOME";
    readonly assetSelectRequest: "ATAP_BUILDER_ASSET_SELECT_REQUEST";
    readonly assetSelectSuccess: "ATAP_BUILDER_ASSET_SELECT_SUCCESS";
    readonly assetSelectError: "ATAP_BUILDER_ASSET_SELECT_ERROR";
};
export type BuilderProtocolVersion = typeof BUILDER_PROTOCOL_VERSION;
export type BuilderEventType = (typeof builderEventTypes)[keyof typeof builderEventTypes];
export type DraftState = 'new' | 'unsaved-draft' | 'saved-draft' | 'published';
export type JsonPrimitive = boolean | number | string | null;
export type JsonArray = JsonValue[];
export type JsonObject = {
    [key: string]: JsonValue;
};
export type JsonValue = JsonArray | JsonObject | JsonPrimitive;
interface MessageEnvelope<TType extends BuilderEventType> {
    type: TType;
    /** Missing means legacy protocol version 1 during the initial migration. */
    protocolVersion?: BuilderProtocolVersion;
}
type ConfigMessage<TType extends BuilderEventType> = MessageEnvelope<TType> & {
    config: JsonObject;
};
export type BuilderToParentMessage = MessageEnvelope<typeof builderEventTypes.ready> | ConfigMessage<typeof builderEventTypes.apply> | ConfigMessage<typeof builderEventTypes.change> | ConfigMessage<typeof builderEventTypes.publish> | (MessageEnvelope<typeof builderEventTypes.scroll> & {
    scrollTop: number;
}) | (MessageEnvelope<typeof builderEventTypes.history> & {
    config?: JsonObject;
    draftState?: DraftState;
    toolsCollapsed?: boolean;
}) | MessageEnvelope<typeof builderEventTypes.backToHome> | (MessageEnvelope<typeof builderEventTypes.assetSelectRequest> & {
    requestId: string;
    productType?: string;
    blockType?: string;
    mediaKind?: string;
});
export type ParentToBuilderMessage = (ConfigMessage<typeof builderEventTypes.init> & {
    draftState: DraftState;
}) | (MessageEnvelope<typeof builderEventTypes.state> & {
    draftState: DraftState;
}) | (MessageEnvelope<typeof builderEventTypes.assetSelectSuccess> & {
    requestId: string;
    url: string;
    /** Optional in v1 because the current parent does not always send it. */
    key?: string;
    /** Optional in v1 because the current parent does not always send it. */
    contentType?: string;
}) | (MessageEnvelope<typeof builderEventTypes.assetSelectError> & {
    requestId: string;
    message: string;
});
export type BuilderMessage = BuilderToParentMessage | ParentToBuilderMessage;
export declare function isBuilderEventType(value: unknown): value is BuilderEventType;
export declare function getBuilderProtocolVersion(value: unknown): BuilderProtocolVersion | null;
export declare function isBuilderMessage(value: unknown): value is BuilderMessage;
export {};
//# sourceMappingURL=protocol.d.ts.map