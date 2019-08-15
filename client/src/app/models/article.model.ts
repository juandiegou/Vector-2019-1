export interface ArticleModel {
    title: string;
    abstract: string;
    keywords: string;
    authors: string;
    author: string;
    file: File;
    evaluators: string[];
    score: number;
    state: boolean;
    date: string;
}