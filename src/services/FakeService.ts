import { Product } from "@/interfaces/product";
import Axios, { AxiosInstance } from "axios";
import {
    apiConstants,
    ApiConstantsInterface,
} from "../constants/api.constants";

interface IFakeStoreService {
    getProduct(id: number): Promise<Product>;
    getProducts(): Promise<Product[]>;
    createProduct(title: string, image: string): Promise<Product>;
    deleteProduct(id: number): Promise<Product>;
    updateProduct(id: number, title: string, image: string): Promise<Product>;
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

    async getProduct(id: Product['id']): Promise<Product> {
        const response = await this.axios.get(`${this.config.productEndpoint}/${id}`);

        return response.data;
    }

    async getProducts(): Promise<Product[]> {
        const response = await this.axios.get(this.config.productEndpoint);
        
        return response.data;
    }

    async createProduct(title: Product['title'], image: Product['image']): Promise<Product> {
        const response = await this.axios.post(this.config.productEndpoint, {
            title,
            image
        });
        
        return response.data;
    }

    async deleteProduct(id: Product['id']): Promise<Product> {
        if (confirm('Are you sure you want to delete this product?')) {
            const response = await this.axios.delete(`${this.config.productEndpoint}/${id}`);

            return response.data;
        }
        throw new Error("Method not implemented.");
    }

    async updateProduct(id: Product['id'], title: Product['title'], image: Product['image']): Promise<Product> {
        const response = await this.axios.put(`${this.config.productEndpoint}/${id}`, {
            title,
            image
        });

        return response.data;
    }

}

const fakeStoreService = new FakeStoreService(apiConstants);
export { fakeStoreService };
