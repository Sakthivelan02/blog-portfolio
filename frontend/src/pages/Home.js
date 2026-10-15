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
    <div className="mx-auto max-w-5xl px-5 py-12">
      <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
        Blog: notes from building web apps.
      </h1>

      {status === "loading" && <p className="mt-10 text-muted">Loading posts…</p>}
      {status === "error" && <p className="mt-10 text-red-700">{error}</p>}

      {status === "ready" && blogs.length === 0 && (
        <p className="mt-10 text-muted">No posts yet. An admin can publish the first one from the admin panel.</p>
      )}

      {status === "ready" && blogs.length > 0 && (
        <>
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-3 py-1 text-sm ${
                  category === c ? "border-ink bg-ink text-white" : "border-line bg-white hover:border-ink"
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
            <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
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
