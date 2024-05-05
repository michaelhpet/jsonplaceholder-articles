export type ArticleType = {
  id: string;
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
  status: "success" | "fail";
  message: string;
  data: {
    articles: ArticleType[];
    pagination: PaginationType;
  };
};
