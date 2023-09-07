export type PageType = 'home' | 'article';

export interface Meta {
    title: string,
    description: string,
    slug: string,
};

export type ArticleLink = `/article-${number}`;

export interface Article {
    title: string, 
    link: ArticleLink, 
    image: `https://devtwit8.ru/img/${string}.${string}`,
};

export interface ArticleIntroBlock {
    type: 'article_intro_block',
    id: string,
    data: {
        image: `https://devtwit8.ru/img/${string}.${string}`,
        reading_time: number,
        short_description: string,
        title: string,
        views_count: number,
    },
};

export interface TextBlock {
    type: 'text_block',
    id: string,
    data: string,
};

export interface ImageBlock {
    type: 'image_block',
    id: string,
    data: {
        caption: string,
        src: `https://devtwit8.ru/img/${string}.${string}`,
    },
};

export interface SubscribeFormBlock {
    type: 'subscribe_form_block',
    id: string,
    data: '',
};

export interface ArticleListBlock {
    type: 'article_list_block',
    id: string,
    data: {
        title: string, 
        articles: Array<Article>,
    },
};

export interface CtaFormBlock {
    type: 'cta_form_block',
    id: string,
    data: '',
};

export interface SliderBlock {
    type: 'slider_block',
    id: string,
    data: Array<`https://devtwit8.ru/img/${string}.${string}`>,
};

export type Block = ArticleIntroBlock
    | TextBlock
    | ImageBlock
    | SubscribeFormBlock
    | ArticleListBlock
    | CtaFormBlock
    | SliderBlock;

export interface FetchResponse<T extends PageType> {
    page_type: T,
    meta: Meta,
    body: T extends 'home' ? [ArticleListBlock] : Array<Block>,
};
