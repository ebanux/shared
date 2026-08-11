export const BUILDER_PROTOCOL_VERSION = 1;
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
};
const eventTypeSet = new Set(Object.values(builderEventTypes));
const draftStateSet = new Set(['new', 'unsaved-draft', 'saved-draft', 'published']);
const isRecord = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);
const isOptionalString = (value) => value === undefined || typeof value === 'string';
const hasSupportedVersion = (value) => value['protocolVersion'] === undefined || value['protocolVersion'] === BUILDER_PROTOCOL_VERSION;
const hasConfig = (value) => isRecord(value['config']);
const hasDraftState = (value) => typeof value['draftState'] === 'string' && draftStateSet.has(value['draftState']);
export function isBuilderEventType(value) {
    return typeof value === 'string' && eventTypeSet.has(value);
}
export function getBuilderProtocolVersion(value) {
    if (!isRecord(value) || !hasSupportedVersion(value))
        return null;
    return BUILDER_PROTOCOL_VERSION;
}
export function isBuilderMessage(value) {
    if (!isRecord(value) || !hasSupportedVersion(value))
        return false;
    const type = value['type'];
    if (!isBuilderEventType(type))
        return false;
    switch (type) {
        case builderEventTypes.ready:
        case builderEventTypes.backToHome:
            return true;
        case builderEventTypes.apply:
        case builderEventTypes.change:
        case builderEventTypes.publish:
            return hasConfig(value);
        case builderEventTypes.init:
            return hasConfig(value) && (value['draftState'] === undefined || hasDraftState(value));
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
//# sourceMappingURL=protocol.js.map