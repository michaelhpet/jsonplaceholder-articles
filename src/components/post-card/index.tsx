import { PostType } from "@/utils/types";

interface Props {
  post: PostType;
}

export default function PostCard(props: Props) {
  return (
    <article className="flex flex-col gap-2 p-3 rounded-lg border">
      <div className="flex flex-col gap-1">
        <p className="font-semibold line-clamp-2">{props.post.title}</p>
        <p className="text-sm opacity-90">{props.post.body}</p>
      </div>
      <p className="text-sm font-medium opacity-90 mt-auto">
        {props.post.user.name}
      </p>
    </article>
  );
}
