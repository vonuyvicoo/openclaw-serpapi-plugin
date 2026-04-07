import { SerpAPIClientOptions } from "@/interfaces/client.interface";
import axios, { AxiosInstance } from "axios";

export class SerpAPIClient {
    private client: AxiosInstance; 

    constructor(options: SerpAPIClientOptions) {
        this.client = axios.create({
            baseURL: options.baseURL ?? 'https://serpapi.com/search',
            params: {
                api_key: options.apiKey
            }
        });
    }

    _getClient(): AxiosInstance {
        return this.client;
    }
}
