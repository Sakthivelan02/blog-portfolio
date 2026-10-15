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
    `text-sm font-medium transition-colors ${isActive ? "text-volt" : "text-mist hover:text-snow"}`;

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-night/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="h-2.5 w-2.5 rounded-full bg-volt" />
          Sakthivel A.
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <NavLink to="/" end className={link}>Portfolio</NavLink>
          <NavLink to="/blog" className={link}>Blog</NavLink>
          {isAdmin && <NavLink to="/admin" className={link}>Admin</NavLink>}

          {user ? (
            <>
              <span className="hidden text-sm text-mist md:inline">{displayName || user.email}</span>
              <button onClick={handleLogout} className="btn btn-ghost !px-4 !py-2">Log out</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={link}>Log in</NavLink>
              <Link to="/signup" className="btn btn-primary !px-4 !py-2">Sign up</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
