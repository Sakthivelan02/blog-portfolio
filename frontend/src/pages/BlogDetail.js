import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api, { errorText } from "../api";
import { formatDate } from "../utils/format";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get(`/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => setError(errorText(err, "Could not load this post.")));
  }, [id]);

  if (error)
    return (
      <div className="mx-auto max-w-2xl px-5 py-16">
        <p className="text-red-700">{error}</p>
        <Link to="/blog" className="mt-4 inline-block underline">Back to all posts</Link>
      </div>
    );

  if (!blog) return <p className="p-10 text-muted">Loading post…</p>;

  return (
    <article className="mx-auto max-w-2xl px-5 py-12">
      <Link to="/blog" className="text-sm text-muted hover:text-tide">Back to all posts</Link>
      <p className="mt-6 text-sm text-muted">
        <span className="font-medium text-tide">{blog.category}</span> · {formatDate(blog.createdAt)} · {blog.author}
      </p>
      <h1 className="mt-2 text-4xl font-extrabold leading-tight tracking-tight">{blog.title}</h1>

      {blog.imageUrl && (
        <img src={blog.imageUrl} alt="" className="mt-8 w-full rounded-lg object-cover" />
      )}

      <div className="mt-8 whitespace-pre-line font-serif text-lg leading-8">{blog.content}</div>
    </article>
  );
}
