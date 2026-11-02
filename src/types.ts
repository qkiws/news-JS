export enum NewsEndpoint {
    Sources = 'sources',
    Everything = 'everything',
}

export type HttpMethod = 'GET';

export interface Source {
    id: string;
    name: string;
}

export type SourceIdentity = Pick<Source, 'id' | 'name'>;

export interface Article {
    author: string | null;
    description: string | null;
    publishedAt: string;
    source: SourceIdentity;
    title: string;
    url: string;
    urlToImage: string | null;
}

export interface ApiResponse<T> {
    articles?: T[];
    code?: string;
    message?: string;
    sources?: T[];
    status: 'ok' | 'error';
    totalResults?: number;
}

export interface ApiRequest {
    endpoint: NewsEndpoint;
    options?: Partial<Record<string, string>>;
}

export type ApiCallback<T> = (response: ApiResponse<T>) => void;
