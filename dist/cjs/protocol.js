"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builderEventTypes = exports.BUILDER_PROTOCOL_VERSION = void 0;
exports.isBuilderEventType = isBuilderEventType;
exports.getBuilderProtocolVersion = getBuilderProtocolVersion;
exports.isBuilderMessage = isBuilderMessage;
exports.BUILDER_PROTOCOL_VERSION = 1;
exports.builderEventTypes = {
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
const eventTypeSet = new Set(Object.values(exports.builderEventTypes));
const draftStateSet = new Set(['new', 'unsaved-draft', 'saved-draft', 'published']);
const isRecord = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);
const isOptionalString = (value) => value === undefined || typeof value === 'string';
const hasSupportedVersion = (value) => value['protocolVersion'] === exports.BUILDER_PROTOCOL_VERSION;
const hasConfig = (value) => isRecord(value['config']);
const hasDraftState = (value) => typeof value['draftState'] === 'string' && draftStateSet.has(value['draftState']);
function isBuilderEventType(value) {
    return typeof value === 'string' && eventTypeSet.has(value);
}
function getBuilderProtocolVersion(value) {
    if (!isRecord(value) || !hasSupportedVersion(value))
        return null;
    return exports.BUILDER_PROTOCOL_VERSION;
}
function isBuilderMessage(value) {
    if (!isRecord(value) || !hasSupportedVersion(value))
        return false;
    const type = value['type'];
    if (!isBuilderEventType(type))
        return false;
    switch (type) {
        case exports.builderEventTypes.ready:
        case exports.builderEventTypes.backToHome:
            return true;
        case exports.builderEventTypes.apply:
        case exports.builderEventTypes.change:
        case exports.builderEventTypes.publish:
            return hasConfig(value);
        case exports.builderEventTypes.init:
            return hasConfig(value) && hasDraftState(value);
        case exports.builderEventTypes.state:
            return hasDraftState(value);
        case exports.builderEventTypes.scroll:
            return typeof value['scrollTop'] === 'number' && Number.isFinite(value['scrollTop']);
        case exports.builderEventTypes.history:
            return (value['config'] === undefined || isRecord(value['config']))
                && (value['draftState'] === undefined || hasDraftState(value))
                && (value['toolsCollapsed'] === undefined || typeof value['toolsCollapsed'] === 'boolean');
        case exports.builderEventTypes.assetSelectRequest:
            return typeof value['requestId'] === 'string'
                && isOptionalString(value['productType'])
                && isOptionalString(value['blockType'])
                && isOptionalString(value['mediaKind']);
        case exports.builderEventTypes.assetSelectSuccess:
            return typeof value['requestId'] === 'string'
                && typeof value['url'] === 'string'
                && typeof value['key'] === 'string'
                && typeof value['contentType'] === 'string';
        case exports.builderEventTypes.assetSelectError:
            return typeof value['requestId'] === 'string' && typeof value['message'] === 'string';
    }
}
//# sourceMappingURL=protocol.js.map