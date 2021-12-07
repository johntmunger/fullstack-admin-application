import { Product } from "@/interfaces/product";
import Axios, { AxiosInstance } from "axios";
import {
    apiConstants,
    ApiConstantsInterface,
} from "../constants/api.constants";

interface IFakeStoreService {
    getProducts(): Promise<Product[]>;
    createProduct(): Promise<Product>;
    deleteProduct(id: number): Promise<Product>;
}

class FakeStoreService implements IFakeStoreService {
    protected axios: AxiosInstance;
    protected config: ApiConstantsInterface;

    constructor(config: ApiConstantsInterface) {
        this.config = config;
        this.axios = Axios.create({
            baseURL: config.baseUrl,
            headers: config.headers
        });
    }
    async getProducts(): Promise<Product[]> {
        const response = await this.axios.get(this.config.productEndpoint);
        
        return response.data;
        throw new Error("Method not implemented.");
    }
    createProduct(): Promise<Product> {

        throw new Error("Method not implemented.");
    }

    async deleteProduct(id: Product['id']): Promise<Product> {
        if (confirm('Are you sure you want to delete this product?')) {
            const response = await this.axios.delete(`${this.config.productEndpoint}/${id}`);

            return response.data;
        }
        throw new Error("Method not implemented.");
    }

}

const fakeStoreService = new FakeStoreService(apiConstants);
export { fakeStoreService };