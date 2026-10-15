import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Only logged-in admins get through. The API enforces the same rule server-side.
export default function AdminRoute({ children }) {
  const { user, isAdmin, loading } = useAuth();

  if (loading) return <p className="p-10 text-muted">Checking access…</p>;
  if (!user) return <Navigate to="/login" replace />;
  if (!isAdmin) return <Navigate to="/" replace />;
  return children;
}
