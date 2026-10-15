import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth, authMessage } from "../context/AuthContext";

export default function Signup() {
  const { user, signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [busy, setBusy] = useState(false);

  if (user) return <Navigate to="/" replace />;

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      return toast.error("Passwords do not match.");
    }
    setBusy(true);
    try {
      await signup(form.name.trim(), form.email.trim(), form.password);
      toast.success("Account created. Welcome!");
      navigate("/");
    } catch (err) {
      toast.error(authMessage(err.code));
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={submit} className="card mx-auto my-16 max-w-sm space-y-4">
      <h1 className="text-3xl font-extrabold">Create an account</h1>
      <div>
        <label className="label" htmlFor="name">Name</label>
        <input id="name" required autoComplete="name" className="field" value={form.name} onChange={set("name")} />
      </div>
      <div>
        <label className="label" htmlFor="email">Email</label>
        <input id="email" type="email" required autoComplete="email" className="field" value={form.email} onChange={set("email")} />
      </div>
      <div>
        <label className="label" htmlFor="password">Password</label>
        <input id="password" type="password" required minLength={6} autoComplete="new-password" className="field"
               value={form.password} onChange={set("password")} />
      </div>
      <div>
        <label className="label" htmlFor="confirm">Confirm password</label>
        <input id="confirm" type="password" required autoComplete="new-password" className="field"
               value={form.confirm} onChange={set("confirm")} />
      </div>
      <button className="btn btn-primary w-full" disabled={busy}>{busy ? "Creating account…" : "Sign up"}</button>
      <p className="text-sm text-mist">
        Already registered? <Link to="/login" className="font-medium text-volt underline">Log in</Link>
      </p>
    </form>
  );
}
