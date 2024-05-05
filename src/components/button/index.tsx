import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  loading?: boolean;
}

export default function Button(props: Props) {
  const { to, loading, ...domProps } = props;

  const element = (
    <button
      {...domProps}
      disabled={domProps.disabled || loading}
      className="flex items-center gap-1 px-3 py-1 rounded-lg font-semibold bg-blue-700 focus:outline focus:outline-2 focus:outline-blue-700 outline-offset-2 transition text-white disabled:bg-gray-200 disabled:text-gray-400 dark:disabled:bg-gray-500 disabled:cursor-not-allowed"
    >
      {loading ? (
        <span className="relative w-3 h-3 rounded-full border-[3px] bg-gray-200 dark:bg-gray-500 border-gray-400 animate-spin">
          <span className="absolute w-2 h-1 -right-[4px] bg-gray-200 dark:bg-gray-500 rotate-[-30deg]" />
        </span>
      ) : null}
      {props.children}
    </button>
  );
  if (props.to) return <Link to={props.to}>{element}</Link>;
  return element;
}
