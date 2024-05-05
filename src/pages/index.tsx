import Button from "@/components/button";
import Input from "@/components/input";
import { ArticleType, ArticlesResponse } from "@/utils/types";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ArticleCard from "@/components/article-card";
import ArticleCardSkeleton from "@/components/article-card/skeleton";

export default function Home() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const search = searchParams.get("search") ?? "";

  const loadArticles = async () => {
    try {
      setLoading(true);
      if (page === 1) setArticles([]);
      const params = new URLSearchParams({
        page: String(page),
        limit: "12",
        ...(search ? { search } : {}),
      }).toString();
      const res: ArticlesResponse = await (
        await fetch(`${import.meta.env.VITE_APP_API_URL}/articles?${params}`)
      ).json();
      const newArticles =
        page > 1 ? articles.concat(res.data.articles) : res.data.articles;
      setArticles(newArticles);
      setHasMore(res.data.pagination.has_next);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const submitSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search = (e.target as any).search.value;
    setPage(1);
    navigate(`/?search=${search}`);
  };

  useEffect(() => {
    loadArticles();
  }, [search, page]);

  return (
    <div className="flex flex-col gap-6">
      <form
        onSubmit={submitSearch}
        className="flex items-center justify-center gap-1"
      >
        <Input
          name="search"
          placeholder="Search by title or author name"
          defaultValue={search}
        />
        <Button type="submit">Search</Button>
      </form>

      {loading || articles.length ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3">
          {articles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
          {loading
            ? Array(12)
                .fill(0)
                .map((_, i) => <ArticleCardSkeleton key={i} />)
            : null}
        </div>
      ) : (
        <div className="w-full min-h-[70vh] flex items-center justify-center">
          <p>No articles found</p>
        </div>
      )}

      {articles.length && hasMore ? (
        <Button onClick={() => setPage((p) => ++p)}>Load more</Button>
      ) : null}
    </div>
  );
}
