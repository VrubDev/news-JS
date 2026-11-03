export interface Article {
    urlToImage: string | null;
    author: string | null;
    publishedAt: string;
    description: string | null;
    title: string;
    url: string;
    source: {
        id: string | null;
        name: string;
    };
}
