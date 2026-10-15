import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import api, { errorText } from "../api";
import { formatDate } from "../utils/format";

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () =>
    api
      .get("/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => toast.error(errorText(err, "Could not load posts.")))
      .finally(() => setLoading(false));

  useEffect(() => {
    load();
  }, []);

  const remove = async (blog) => {
    if (!window.confirm(`Delete "${blog.title}"? This cannot be undone.`)) return;
    try {
      await api.delete(`/blogs/${blog._id}`);
      toast.success("Post deleted.");
      load();
    } catch (err) {
      toast.error(errorText(err, "Could not delete the post."));
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-5 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold">Admin panel</h1>
        <Link to="/admin/new" className="btn btn-primary">New post</Link>
      </div>

      {loading && <p className="mt-8 text-muted">Loading posts…</p>}
      {!loading && blogs.length === 0 && (
        <p className="mt-8 text-muted">No posts yet. Select "New post" to write the first one.</p>
      )}

      {blogs.length > 0 && (
        <div className="mt-8 overflow-x-auto rounded-lg border border-line bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-line bg-paper text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Category</th>
                <th className="px-4 py-3 font-medium">Published</th>
                <th className="px-4 py-3 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((b) => (
                <tr key={b._id} className="border-b border-line last:border-0">
                  <td className="px-4 py-3 font-medium">{b.title}</td>
                  <td className="px-4 py-3 text-muted">{b.category}</td>
                  <td className="px-4 py-3 text-muted">{formatDate(b.createdAt)}</td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      <Link to={`/blog/${b._id}`} className="btn btn-ghost">View</Link>
                      <Link to={`/admin/edit/${b._id}`} className="btn btn-ghost">Edit</Link>
                      <button onClick={() => remove(b)} className="btn btn-danger">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
