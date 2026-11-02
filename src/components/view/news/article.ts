export interface Article {
    urlToImage: string;
    author: string;
    publishedAt: any;
    description: any;
    title: string;
    url: string;
    source: {
        id: string | null;
        name: string;
    };
}