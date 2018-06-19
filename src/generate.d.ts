export interface GenerateConfig {
    removeUrlParams?: boolean;
}
export interface GenerateParams {
    [key: string]: string | number | boolean;
}
export declare const generate: (url: string, params: GenerateParams, config?: GenerateConfig) => string;
