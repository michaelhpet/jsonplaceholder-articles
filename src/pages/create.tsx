import Button from "@/components/button";
import Input from "@/components/input";
import TextArea from "@/components/textarea";

export default function CreateArticle() {
  return (
    <form className="grid grid-cols-2 gap-3">
      <div className="col-span-2 flex items-center justify-between gap-4">
        <h1 className="text-xl font-bold">Create Article</h1>
        <Button>Submit</Button>
      </div>

      <div className="col-span-1 flex flex-col gap-1 text-sm font-semibold">
        <label htmlFor="author_name">Author Name</label>
        <Input
          id="author_name"
          name="author_name"
          placeholder="Enter author name"
        />
      </div>

      <div className="col-span-1 flex flex-col gap-1 text-sm font-semibold">
        <label htmlFor="author_email">Author Email</label>
        <Input
          id="author_email"
          name="author_email"
          placeholder="Enter author email"
        />
      </div>

      <div className="col-span-2 flex flex-col gap-1 text-sm font-semibold">
        <label htmlFor="title">Article Title</label>
        <Input id="title" name="title" placeholder="Enter article title" />
      </div>

      <div className="col-span-2 flex flex-col gap-1 text-sm font-semibold">
        <label htmlFor="body">Article Body</label>
        <TextArea
          id="body"
          name="body"
          rows={15}
          placeholder="Enter article body"
        />
      </div>
    </form>
  );
}
