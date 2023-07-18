import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { SignupPage } from "./pages/SignupPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";

import { Routes, Route } from "react-router-dom";

// import { SideBar } from "./components/SideBar";
import { Explore } from "./pages/Explore";
import { ProfilePage } from "./pages/ProfilePage";
import { Bookmark } from "./pages/BookmarkPage";
import { PostDetail } from "./pages/PostDetail";

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/post/:id" element={<PostDetail />} />{" "}
      </Routes>
    </div>
  );
}

export default App;
