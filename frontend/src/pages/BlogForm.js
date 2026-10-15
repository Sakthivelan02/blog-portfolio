import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import api, { errorText } from "../api";

const EMPTY = { title: "", excerpt: "", content: "", imageUrl: "", category: "", author: "" };

export default function BlogForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(EMPTY);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!id) return;
    api
      .get(`/blogs/${id}`)
      .then((res) => setForm({ ...EMPTY, ...res.data }))
      .catch((err) => {
        toast.error(errorText(err, "Could not load the post."));
        navigate("/admin");
      });
  }, [id, navigate]);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    const { title, excerpt, content, imageUrl, category, author } = form;
    const payload = { title, excerpt, content, imageUrl, category: category || "General", author: author || "Sakthivel Arumugam" };
    try {
      if (id) {
        await api.put(`/blogs/${id}`, payload);
        toast.success("Changes saved.");
      } else {
        await api.post("/blogs", payload);
        toast.success("Published.");
      }
      navigate("/admin");
    } catch (err) {
      toast.error(errorText(err, "Could not save the post."));
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={submit} className="mx-auto max-w-2xl space-y-4 px-5 py-10">
      <h1 className="text-3xl font-extrabold">{id ? "Edit post" : "New post"}</h1>

      <div>
        <label className="label" htmlFor="title">Title</label>
        <input id="title" required maxLength={150} className="field" value={form.title} onChange={set("title")} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="category">Category</label>
          <input id="category" className="field" placeholder="General" value={form.category} onChange={set("category")} />
        </div>
        <div>
          <label className="label" htmlFor="author">Author</label>
          <input id="author" className="field" placeholder="Sakthivel Arumugam" value={form.author} onChange={set("author")} />
        </div>
      </div>
      <div>
        <label className="label" htmlFor="imageUrl">Cover image URL</label>
        <input id="imageUrl" type="url" className="field" placeholder="https://…" value={form.imageUrl} onChange={set("imageUrl")} />
      </div>
      <div>
        <label className="label" htmlFor="excerpt">Summary</label>
        <textarea id="excerpt" maxLength={300} rows={2} className="field" value={form.excerpt} onChange={set("excerpt")} />
      </div>
      <div>
        <label className="label" htmlFor="content">Content</label>
        <textarea id="content" required rows={12} className="field font-serif" value={form.content} onChange={set("content")} />
        <p className="mt-1 text-xs text-muted">Leave a blank line between paragraphs.</p>
      </div>

      <div className="flex gap-3">
        <button className="btn btn-primary" disabled={busy}>
          {busy ? "Saving…" : id ? "Save changes" : "Publish"}
        </button>
        <Link to="/admin" className="btn btn-ghost">Cancel</Link>
      </div>
    </form>
  );
}
