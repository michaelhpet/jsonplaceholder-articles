import { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  rootClassName?: string;
}

export default function TextArea(props: Props) {
  const { label = null, error, rootClassName = "", ...domProps } = props;

  return (
    <label
      htmlFor={domProps.id}
      className={`flex flex-col text-sm ${rootClassName}`}
    >
      {label ? <span className="pb-1 font-semibold">{label}</span> : null}
      <textarea
        {...domProps}
        className={`text-current p-3 bg-black/5 dark:bg-white/5 border rounded-lg focus:outline-blue-700 ${
          error ? "border-red-500 focus:outline-red-500" : ""
        }`}
      />
      {error ? <p className="text-sm text-red-500">{error}</p> : null}
    </label>
  );
}
