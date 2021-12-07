interface ApiConstantsInterface {
    baseUrl: string;
    productEndpoint: string;
    headers: any;
}

const apiConstants: ApiConstantsInterface = {
    baseUrl: "http://localhost:5001",
    productEndpoint: `/products`,
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
    // headers: {'Access-Control-Allow-Origin': '*'}
};

export { apiConstants, ApiConstantsInterface };
