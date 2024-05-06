import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  loading?: boolean;
  variant?: "outlined" | "contained";
}

export default function Button(props: Props) {
  const { to, loading, variant = "contained", ...domProps } = props;

  const element = (
    <button
      {...domProps}
      disabled={domProps.disabled || loading}
      className={`flex items-center justify-center gap-1 px-3 py-1 rounded-lg font-semibold focus:outline focus:outline-2 focus:outline-blue-700 outline-offset-2 transition disabled:bg-gray-200 disabled:text-gray-400 dark:disabled:bg-gray-500 disabled:cursor-not-allowed ${
        variant === "outlined"
          ? "border bg-transparent"
          : "text-white bg-blue-700"
      }`}
    >
      {loading ? (
        <span className="relative w-3 h-3 rounded-full border-[3px] bg-gray-200 dark:bg-gray-500 border-gray-400 animate-spin">
          <span className="absolute w-2 h-1 -right-[4px] bg-gray-200 dark:bg-gray-500 rotate-[-30deg]" />
        </span>
      ) : null}
      {props.children}
    </button>
  );
  if (props.to)
    return (
      <Link
        to={props.to}
        {...(props.disabled ? { onClick: (e) => e.preventDefault() } : {})}
      >
        {element}
      </Link>
    );
  return element;
}
