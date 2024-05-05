import { ArticleType } from "@/utils/types";

interface Props {
  article: ArticleType;
}

export default function ArticleCard(props: Props) {
  return (
    <article className="flex flex-col gap-2 p-3 rounded-lg border">
      <div className="flex flex-col gap-1">
        <p className="font-semibold line-clamp-2">{props.article.title}</p>
        <p className="text-sm opacity-90">{props.article.body}</p>
      </div>
      <p className="text-sm font-medium opacity-90 mt-auto">
        {props.article.author_name}
      </p>
    </article>
  );
}
