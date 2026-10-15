
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import api, { errorText } from "../api";

const CATEGORIES = [
  "Full-Stack Development",
  "React & Frontend",
  "Backend & Databases",
  "Python Development",
  "Projects & Case Studies",
  "Developer Journey",
  "Tools & Deployment",
  "LiDAR & Geospatial",
];

const EMPTY = {
  title: "",
  excerpt: "",
  content: "",
  imageUrl: "",
  category: "Full-Stack Development",
  author: "Sakthivel Arumugam",
};

export default function BlogForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState(EMPTY);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!id) return;

    let active = true;

    api
      .get(`/blogs/${id}`)
      .then((res) => {
        if (active) {
          setForm({
            ...EMPTY,
            ...res.data,
            category:
              res.data.category || EMPTY.category,
            author: res.data.author || EMPTY.author,
          });
        }
      })
      .catch((err) => {
        if (active) {
          toast.error(
            errorText(err, "Could not load the article.")
          );
          navigate("/admin");
        }
      });

    return () => {
      active = false;
    };
  }, [id, navigate]);

  const set = (key) => (event) => {
    setForm((current) => ({
      ...current,
      [key]: event.target.value,
    }));
  };

  const submit = async (event) => {
    event.preventDefault();

    if (busy) return;

    setBusy(true);

    const payload = {
      title: form.title.trim(),
      excerpt: form.excerpt.trim(),
      content: form.content.trim(),
      imageUrl: form.imageUrl.trim(),
      category: form.category,
      author:
        form.author.trim() || "Sakthivel Arumugam",
    };

    try {
      if (id) {
        await api.put(`/blogs/${id}`, payload);
        toast.success("Article updated successfully.");
      } else {
        await api.post("/blogs", payload);
        toast.success("Article published successfully.");
      }

      navigate("/admin");
    } catch (err) {
      toast.error(
        errorText(err, "Could not save the article.")
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      className="card mx-auto my-12 max-w-3xl space-y-6"
    >
      <div>
        <p className="text-sm font-medium text-volt">
          BLOG EDITOR
        </p>

        <h1 className="mt-2 text-3xl font-extrabold">
          {id ? "Edit Article" : "Create a New Article"}
        </h1>

        <p className="mt-2 text-sm text-mist">
          Share your development journey, practical coding
          lessons, projects, and technical knowledge.
        </p>
      </div>

      <div>
        <label className="label" htmlFor="title">
          Article Title
        </label>

        <input
          id="title"
          name="title"
          type="text"
          required
          maxLength={150}
          className="field"
          placeholder="e.g. My Journey into Full-Stack Development"
          value={form.title}
          onChange={set("title")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="category">
            Category
          </label>

          <select
            id="category"
            name="category"
            required
            className="field"
            value={form.category}
            onChange={set("category")}
          >
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="label" htmlFor="author">
            Author
          </label>

          <input
            id="author"
            name="author"
            type="text"
            required
            className="field"
            placeholder="Sakthivel Arumugam"
            value={form.author}
            onChange={set("author")}
          />
        </div>
      </div>

      <div>
        <label className="label" htmlFor="imageUrl">
          Cover Image URL (Optional)
        </label>

        <input
          id="imageUrl"
          name="imageUrl"
          type="url"
          className="field"
          placeholder="https://example.com/cover.jpg"
          value={form.imageUrl}
          onChange={set("imageUrl")}
        />

        {form.imageUrl.trim() && (
          <div className="mt-4">
            <p className="mb-2 text-sm text-mist">
              Image Preview
            </p>

            <img
              src={form.imageUrl}
              alt="Blog cover preview"
              className="max-h-64 w-full rounded-xl border border-line object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
              onLoad={(event) => {
                event.currentTarget.style.display = "block";
              }}
            />
          </div>
        )}
      </div>

      <div>
        <label className="label" htmlFor="excerpt">
          Article Summary
        </label>

        <textarea
          id="excerpt"
          name="excerpt"
          maxLength={300}
          rows={3}
          className="field"
          placeholder="Write a short introduction for the blog..."
          value={form.excerpt}
          onChange={set("excerpt")}
        />

        <p className="mt-1 text-xs text-mist">
          {form.excerpt.length}/300 characters
        </p>
      </div>

      <div>
        <label className="label" htmlFor="content">
          Article Content
        </label>

        <textarea
          id="content"
          name="content"
          required
          minLength={30}
          rows={16}
          className="field"
          placeholder={
            "Introduction\n\nWhat I learned\n\nImplementation\n\nChallenges and solutions\n\nConclusion"
          }
          value={form.content}
          onChange={set("content")}
        />

        <p className="mt-2 text-xs text-mist">
          Leave blank lines between paragraphs for easy reading.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={busy}
        >
          {busy
            ? "Saving..."
            : id
              ? "Save Changes"
              : "Publish Article"}
        </button>

        <Link to="/admin" className="btn btn-ghost">
          Cancel
        </Link>
      </div>
    </form>
  );
}
