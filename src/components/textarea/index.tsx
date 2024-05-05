import { TextareaHTMLAttributes } from "react";

export default function TextArea(
  props: TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      className="p-3 bg-black/5 dark:bg-white/5 border rounded-lg focus:outline-blue-700"
    />
  );
}
