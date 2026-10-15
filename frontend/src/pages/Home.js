
import { useEffect, useState } from "react";
import api, { errorText } from "../api";
import BlogCard from "../components/BlogCard";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    api
      .get("/blogs")
      .then((res) => {
        setBlogs(res.data);
        setStatus("ready");
      })
      .catch((err) => {
        setError(errorText(err, "Could not load posts."));
        setStatus("error");
      });
  }, []);

  const categories = ["All", ...new Set(blogs.map((b) => b.category).filter(Boolean))];
  const shown = category === "All" ? blogs : blogs.filter((b) => b.category === category);
  const [first, ...rest] = shown;

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-sm font-medium text-volt">Blog</p>
      <h1 className="mt-2 max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
        Notes from building web apps.
      </h1>

      {status === "loading" && <p className="mt-10 text-mist">Loading posts…</p>}
      {status === "error" && <p className="mt-10 text-red-400">{error}</p>}

      {status === "ready" && blogs.length === 0 && (
        <p className="mt-10 text-mist">No posts yet. An admin can publish the first one from the admin panel.</p>
      )}

      {status === "ready" && blogs.length > 0 && (
        <>
          <div className="mt-8 flex flex-wrap gap-2" aria-label="Filter by category">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  category === c
                    ? "border-volt bg-volt text-night"
                    : "border-line bg-panel text-snow hover:border-snow/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {first && (
            <div className="mt-10">
              <BlogCard blog={first} featured />
            </div>
          )}

          {rest.length > 0 && (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((b) => (
                <BlogCard key={b._id} blog={b} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
