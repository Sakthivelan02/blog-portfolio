import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api, { errorText } from "../api";
import { formatDate } from "../utils/format";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    setLoading(true);
    setError("");
    setBlog(null);

    api
      .get(`/blogs/${id}`)
      .then((res) => {
        if (active) setBlog(res.data);
      })
      .catch((err) => {
        if (active) {
          setError(errorText(err, "Could not load this article."));
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <p className="text-mist animate-pulse">
          Loading article...
        </p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-20 text-center">
        <h1 className="text-3xl font-bold text-snow">
          Article unavailable
        </h1>
        <p className="mt-3 text-mist">
          {error || "This article could not be found."}
        </p>
        <Link
          to="/blog"
          className="mt-6 inline-block text-volt underline"
        >
          Back to all articles
        </Link>
      </div>
    );
  }

  const readingTime = Math.max(
    1,
    Math.ceil((blog.content || "").trim().split(/\s+/).filter(Boolean).length / 200)
  );

  return (
    <main className="min-h-screen px-5 py-12 md:py-20">
      <article className="mx-auto max-w-3xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-mist transition hover:text-volt"
        >
          <span aria-hidden="true">←</span>
          All articles
        </Link>

        <header className="mt-10">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full border border-volt/30 bg-volt/10 px-3 py-1 font-medium text-volt">
              {blog.category || "Development"}
            </span>

            <span className="text-mist">
              {formatDate(blog.createdAt)}
            </span>

            <span className="text-mist">
              {readingTime} min read
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-snow md:text-6xl">
            {blog.title}
          </h1>

          {blog.excerpt && (
            <p className="mt-6 text-lg leading-8 text-mist md:text-xl">
              {blog.excerpt}
            </p>
          )}

          <div className="mt-8 flex items-center gap-3 border-b border-line pb-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-volt/30 bg-volt/10 font-bold text-volt">
              SA
            </div>

            <div>
              <p className="font-semibold text-snow">
                {blog.author || "Sakthivel Arumugam"}
              </p>
              <p className="text-sm text-mist">
                Python & Full-Stack Web Developer
              </p>
            </div>
          </div>
        </header>

        {blog.imageUrl && (
          <figure className="mt-8 overflow-hidden rounded-2xl border border-line bg-white/5">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="max-h-[480px] w-full object-cover"
              loading="eager"
            />
          </figure>
        )}

        <div className="prose prose-invert mt-10 max-w-none whitespace-pre-line break-words text-base leading-8 text-snow/85 md:text-lg">
          {blog.content}
        </div>

        <footer className="mt-14 border-t border-line pt-8">
          <p className="text-sm text-mist">
            Thanks for reading. I share practical lessons from web
            development, Python, real projects, and my developer journey.
          </p>

          <Link
            to="/blog"
            className="mt-5 inline-flex items-center gap-2 font-semibold text-volt hover:underline"
          >
            <span aria-hidden="true">←</span>
            Explore more articles
          </Link>
        </footer>
      </article>
    </main>
  );
}