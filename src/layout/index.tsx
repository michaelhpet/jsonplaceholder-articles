import Button from "@/components/button";
import Switch from "@/components/switch";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const { pathname } = useLocation();
  const [dark, setDark] = useState(
    Boolean(JSON.parse(localStorage.getItem("dark") ?? "false"))
  );

  const toggleDarkMode = () => {
    localStorage.setItem("dark", JSON.stringify(!dark));
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    if (dark) document.body.classList.add("dark");
  }, []);

  return (
    <div className="max-w-[960px] mx-auto px-6">
      <header className="flex flex-wrap items-center justify-between gap-4 py-6 pb-3 border-b">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-sm font-black">
            PubArticles
          </Link>
          <div className="flex items-center gap-2 border-l pl-2">
            <p className="text-sm">Dark mode</p>
            <Switch checked={dark} onChange={toggleDarkMode} />
          </div>
        </div>
        {pathname === "/" ? <Button to="/create">Create Article</Button> : null}
      </header>
      <main className="py-6">
        <Outlet />
      </main>
    </div>
  );
}
