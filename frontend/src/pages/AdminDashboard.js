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
    <div className="mx-auto max-w-6xl px-5 py-12">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-volt">Admin</p>
          <h1 className="mt-1 text-3xl font-extrabold">Manage posts</h1>
        </div>
        <Link to="/admin/new" className="btn btn-primary">New post</Link>
      </div>

      {loading && <p className="mt-8 text-mist">Loading posts…</p>}
      {!loading && blogs.length === 0 && (
        <p className="mt-8 text-mist">No posts yet. Select "New post" to write the first one.</p>
      )}

      {blogs.length > 0 && (
        <div className="mt-8 overflow-x-auto rounded-2xl border border-line bg-panel">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-line text-mist">
              <tr>
                <th className="px-5 py-3.5 font-medium">Title</th>
                <th className="px-5 py-3.5 font-medium">Category</th>
                <th className="px-5 py-3.5 font-medium">Published</th>
                <th className="px-5 py-3.5 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((b) => (
                <tr key={b._id} className="border-b border-line last:border-0 hover:bg-raised">
                  <td className="px-5 py-3.5 font-medium">{b.title}</td>
                  <td className="px-5 py-3.5 text-mist">{b.category}</td>
                  <td className="px-5 py-3.5 text-mist">{formatDate(b.createdAt)}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex justify-end gap-2">
                      <Link to={`/blog/${b._id}`} className="btn btn-ghost !px-4 !py-1.5">View</Link>
                      <Link to={`/admin/edit/${b._id}`} className="btn btn-ghost !px-4 !py-1.5">Edit</Link>
                      <button onClick={() => remove(b)} className="btn btn-danger !px-4 !py-1.5">Delete</button>
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
