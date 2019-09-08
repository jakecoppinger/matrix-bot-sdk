/**
 * This is the response format documented in
 * https://matrix.org/docs/spec/application_service/unstable#get-matrix-app-v1-thirdparty-protocol-protocol
 */
export interface IApplicationServiceProtocol {
    user_fields: string[],
    location_fields: string[],
    icon: string,
    field_types: {[field: string]: IFieldType}
    instances: {[name: string]: IProtocolInstance}
}

interface IFieldType {
    regexp: string;
    placeholder: string;
}

interface IProtocolInstance {
    desc: string;
    icon: string;
    fields: {[field: string]: string}
    network_id: string;
}