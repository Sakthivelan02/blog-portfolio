import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth, authMessage } from "../context/AuthContext";

export default function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [busy, setBusy] = useState(false);

  if (user) return <Navigate to="/" replace />;

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await login(form.email.trim(), form.password);
      toast.success("Logged in.");
      navigate("/");
    } catch (err) {
      toast.error(authMessage(err.code));
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={submit} className="card mx-auto mt-16 max-w-sm space-y-4">
      <h1 className="text-3xl font-extrabold">Welcome back</h1>
      <p className="text-sm text-mist">Log in to your account.</p>
      <div>
        <label className="label" htmlFor="email">Email</label>
        <input id="email" type="email" required autoComplete="email" className="field"
               value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      </div>
      <div>
        <label className="label" htmlFor="password">Password</label>
        <input id="password" type="password" required autoComplete="current-password" className="field"
               value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
      </div>
      <button className="btn btn-primary w-full" disabled={busy}>{busy ? "Logging in…" : "Log in"}</button>
      <p className="text-sm text-mist">
        New here? <Link to="/signup" className="font-medium text-volt underline">Create an account</Link>
      </p>
    </form>
  );
}
