import type { ApiCallback, ApiRequest, ApiResponse, HttpMethod } from '../../types';

interface LoaderOptions extends Record<string, string> {
    apiKey: string;
}

interface LoaderConfig {
    baseLink: string;
    options: LoaderOptions;
}

class Loader {
    private readonly config: Readonly<LoaderConfig>;

    public constructor(baseLink: string, options: LoaderOptions) {
        this.config = { baseLink, options };
    }

    public getResp<T>(request: ApiRequest, callback: ApiCallback<T>): void {
        void this.load<T>('GET', request.endpoint, callback, request.options);
    }

    private makeUrl(options: ApiRequest['options'] = {}, endpoint: ApiRequest['endpoint']): string {
        const url = new URL(endpoint, this.config.baseLink);
        const params = new URLSearchParams(this.config.options);

        Object.entries(options).forEach(([key, value]) => {
            if (value !== undefined) {
                params.set(key, value);
            }
        });

        url.search = params.toString();
        return url.toString();
    }

    private async load<T>(
        method: HttpMethod,
        endpoint: ApiRequest['endpoint'],
        callback: ApiCallback<T>,
        options: ApiRequest['options'] = {}
    ): Promise<void> {
        try {
            const response = await fetch(this.makeUrl(options, endpoint), { method });
            if (!response.ok) {
                throw new Error(`News API request failed: ${response.status} ${response.statusText}`);
            }

            const data = (await response.json()) as ApiResponse<T>;
            callback(data);
        } catch (error) {
            console.error('Unable to load news data:', error);
        }
    }
}

export default Loader;
