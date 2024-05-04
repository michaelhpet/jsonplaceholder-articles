import { HtmlHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  to?: string;
}

export default function Button(props: Props) {
  const element = (
    <button className="px-3 py-1 rounded-lg font-semibold bg-blue-700 focus:outline focus:outline-2 focus:outline-blue-700 outline-offset-2 transition text-white">
      {props.children}
    </button>
  );
  if (props.to) return <Link to={props.to}>{element}</Link>;
  return element;
}
