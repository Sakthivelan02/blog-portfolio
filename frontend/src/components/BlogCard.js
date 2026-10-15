import { Link } from "react-router-dom";
import { formatDate } from "../utils/format";

export default function BlogCard({ blog, featured = false }) {
  const imgH = featured ? "h-64 md:h-full md:min-h-[18rem]" : "h-44";
  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-line bg-panel transition-colors hover:border-volt/50 ${
        featured ? "grid md:grid-cols-2" : ""
      }`}
    >
      <Link to={`/blog/${blog._id}`} className="block overflow-hidden bg-raised">
        {blog.imageUrl ? (
          <img
            src={blog.imageUrl}
            alt=""
            loading="lazy"
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${imgH}`}
          />
        ) : (
          <div className={`bg-raised ${imgH}`} />
        )}
      </Link>

      <div className={`p-6 ${featured ? "flex flex-col justify-center" : ""}`}>
        <p className="text-sm text-mist">
          <span className="font-medium text-volt">{blog.category}</span> · {formatDate(blog.createdAt)}
        </p>
        <h2 className={`mt-2 font-bold leading-tight ${featured ? "text-3xl" : "text-xl"}`}>
          <Link to={`/blog/${blog._id}`} className="hover:text-volt">{blog.title}</Link>
        </h2>
        {blog.excerpt && <p className="mt-3 text-mist">{blog.excerpt}</p>}
      </div>
    </article>
  );
}
