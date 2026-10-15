import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, displayName, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out.");
      navigate("/");
    } catch {
      toast.error("Could not log out. Try again.");
    }
  };

  const link = ({ isActive }) =>
    `text-sm font-medium ${isActive ? "text-tide" : "text-ink hover:text-tide"}`;

  return (
    <header className="border-b border-line bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link to="/" className="font-display text-xl font-extrabold tracking-tight">
          Sakthivel A.
        </Link>

        <div className="flex items-center gap-5">
          <NavLink to="/" end className={link}>Portfolio</NavLink>
          <NavLink to="/blog" className={link}>Blog</NavLink>
          {isAdmin && <NavLink to="/admin" className={link}>Admin panel</NavLink>}

          {user ? (
            <>
              <span className="hidden text-sm text-muted sm:inline">
                {displayName || user.email}
              </span>
              <button onClick={handleLogout} className="btn btn-ghost">Log out</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={link}>Log in</NavLink>
              <Link to="/signup" className="btn btn-primary">Sign up</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
