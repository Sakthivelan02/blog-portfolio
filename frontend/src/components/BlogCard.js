import { Link } from "react-router-dom";
import { formatDate } from "../utils/format";

export default function BlogCard({ blog, featured = false }) {
  return (
    <article className={featured ? "grid gap-6 md:grid-cols-2" : ""}>
      <Link to={`/blog/${blog._id}`} className="block overflow-hidden rounded-lg bg-line">
        {blog.imageUrl ? (
          <img
            src={blog.imageUrl}
            alt=""
            loading="lazy"
            className={`w-full object-cover ${featured ? "h-64 md:h-full" : "h-44"}`}
          />
        ) : (
          <div className={`bg-ink ${featured ? "h-64 md:h-full" : "h-44"}`} />
        )}
      </Link>

      <div className={featured ? "flex flex-col justify-center" : "mt-3"}>
        <p className="text-sm text-muted">
          <span className="font-medium text-tide">{blog.category}</span> · {formatDate(blog.createdAt)}
        </p>
        <h2 className={`mt-1 font-bold leading-tight ${featured ? "text-3xl" : "text-xl"}`}>
          <Link to={`/blog/${blog._id}`} className="hover:text-tide">{blog.title}</Link>
        </h2>
        {blog.excerpt && <p className="mt-2 font-serif text-muted">{blog.excerpt}</p>}
      </div>
    </article>
  );
}
