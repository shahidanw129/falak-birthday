import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import GalleryPage from "./pages/GalleryPage";
import Memories from "./pages/Memories";
import LetterPage from "./pages/LetterPage";
import Surprise from "./pages/Surprise";
import BirthdayWishes from "./pages/BirthdayWishes";
import AboutFalak from "./pages/AboutFalak";
import NotFound from "./pages/NotFound";
import PrivateLayout from "./components/PrivateLayout";

function PrivateRoute({ children }) {
  return localStorage.getItem("birthdayLogin") ? children : <Navigate to="/" replace />;
}

function PrivatePage({ children }) {
  return (
    <PrivateRoute>
      <PrivateLayout>{children}</PrivateLayout>
    </PrivateRoute>
  );
}

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<PrivatePage><Dashboard /></PrivatePage>} />
      <Route path="/gallery" element={<PrivatePage><GalleryPage /></PrivatePage>} />
      <Route path="/memories" element={<PrivatePage><Memories /></PrivatePage>} />
      <Route path="/letter" element={<PrivatePage><LetterPage /></PrivatePage>} />
      <Route path="/surprise" element={<PrivatePage><Surprise /></PrivatePage>} />
      <Route path="/wishes" element={<PrivatePage><BirthdayWishes /></PrivatePage>} />
      <Route path="/about-falak" element={<PrivatePage><AboutFalak /></PrivatePage>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
