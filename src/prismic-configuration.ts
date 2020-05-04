export interface PrismicConfiguration {
    apiEndpoint: string;
    accessToken?: string;
    // tslint:disable-next-line: ban-types
    linkResolver: Function;
}

export const CONFIG: PrismicConfiguration = {
    apiEndpoint: 'https://blog-aaronmarks-dev.cdn.prismic.io/api/v2',
    linkResolver(doc: any) {
        return '/';
    }
};
