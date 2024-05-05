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
      className="px-3 py-1 rounded-lg font-semibold bg-blue-700 focus:outline focus:outline-2 focus:outline-blue-700 outline-offset-2 transition text-white disabled:bg-gray-200 disabled:text-gray-400 dark:disabled:bg-gray-500 disabled:cursor-not-allowed"
    >
      {props.children}
    </button>
  );
  if (props.to) return <Link to={props.to}>{element}</Link>;
  return element;
}
