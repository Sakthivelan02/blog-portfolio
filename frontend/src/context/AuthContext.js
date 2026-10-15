import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import api from "../api";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

// Turns Firebase error codes into messages a person can act on
export const authMessage = (code) =>
  ({
    "auth/email-already-in-use": "That email is already registered. Try logging in instead.",
    "auth/invalid-email": "Enter a valid email address.",
    "auth/weak-password": "Choose a password with at least 6 characters.",
    "auth/missing-password": "Enter your password.",
    "auth/invalid-credential": "Incorrect email or password.",
    "auth/user-not-found": "No account uses that email.",
    "auth/wrong-password": "Incorrect email or password.",
    "auth/too-many-requests": "Too many attempts. Wait a few minutes and try again.",
    "auth/network-request-failed": "Network error. Check your connection and try again.",
    "auth/operation-not-allowed": "Email/password sign-in is not enabled in Firebase.",
  }[code] || "Something went wrong. Please try again.");

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [nameOverride, setNameOverride] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        try {
          const { data } = await api.get("/auth/admin-check");
          setIsAdmin(Boolean(data.isAdmin));
        } catch {
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signup = async (name, email, password) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName: name });
    setNameOverride(name); // onAuthStateChanged does not fire on profile updates
  };

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const logout = async () => {
    await signOut(auth);
    setNameOverride(null);
  };

  return (
    <AuthContext.Provider value={{ user, displayName: nameOverride || user?.displayName || "", isAdmin, loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
