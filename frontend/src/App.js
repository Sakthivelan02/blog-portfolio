import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminRoute from "./components/AdminRoute";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import BlogDetail from "./pages/BlogDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import BlogForm from "./pages/BlogForm";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/blog" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="/admin/new" element={<AdminRoute><BlogForm /></AdminRoute>} />
          <Route path="/admin/edit/:id" element={<AdminRoute><BlogForm /></AdminRoute>} />
          <Route path="*" element={<p className="p-10 text-mist">Page not found.</p>} />
        </Routes>
      </main>
    </>
  );
}
