export type ApiResponseStatus = "success" | "fail" | "error";

export type ArticleType = {
  _id: string;
  title: string;
  excerpt: string;
  body: string;
  author_name: string;
  author_email: string;
  timestamp: string;
};

export type PaginationType = {
  page: number;
  limit: number;
  count: number;
  total_pages: number;
  total_records: number;
  has_previous: boolean;
  has_next: boolean;
  description: string;
};

export type ArticlesResponse = {
  status: ApiResponseStatus;
  message: string;
  data: {
    articles: ArticleType[];
    pagination: PaginationType;
  };
};

export type CreateArticleResponse = {
  status: ApiResponseStatus;
  message: string;
  data: { article: ArticleType } | null;
};

export type NotifyType = "success" | "error";
