import Button from "@/components/button";
import Input from "@/components/input";
import PostCard from "@/components/post-card";
import PostCardSkeleton from "@/components/post-card/skeleton";
import { PostType } from "@/utils/types";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const mounting = useRef(true);
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") ?? "");
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        _page: String(page),
        _per_page: "10",
        _expand: "user",
        ...(search ? { _title_like: search, "user.name": search } : {}),
      }).toString();
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?${params}`
      );
      const data = await res.json();
      const newPosts = page > 1 ? posts.concat(data) : data;
      setPosts(newPosts);
      setHasMore(Boolean(data.length));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const submitSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(1);
    navigate(`/?search=${search}`);
  };

  useEffect(() => {
    if (mounting.current || search || page > 1) loadPosts();
    return () => {
      mounting.current = false;
    };
  }, [search, page]);

  return (
    <div className="flex flex-col gap-4">
      <form
        onSubmit={submitSearch}
        className="flex items-center justify-center gap-1"
      >
        <Input
          name="search"
          placeholder="Search by title or author name"
          defaultValue={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button>Search</Button>
      </form>

      {loading || posts.length ? (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
          {loading
            ? Array(10)
                .fill(0)
                .map((_, i) => <PostCardSkeleton key={i} />)
            : null}
        </div>
      ) : (
        <div className="w-full min-h-[70vh] flex items-center justify-center">
          <p>No articles found</p>
        </div>
      )}
      <Button
        disabled={!hasMore}
        onClick={() => {
          if (hasMore) setPage((p) => ++p);
        }}
      >
        Load more
      </Button>
    </div>
  );
}
