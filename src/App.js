import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { SignupPage } from "./pages/SignupPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";

import { Routes, Route } from "react-router-dom";

import { SideBar } from "./components/SideBar";
import { Explore } from "./pages/Explore";
import { ProfilePage } from "./pages/ProfilePage";
import { Bookmark } from "./pages/BookmarkPage";
import { PostDetail } from "./pages/PostDetail";
import { Search } from "./components/Search";
import { Follow } from "./components/Follow";
import { Like } from "./components/LikeComponent";
import { BookmarkComponent } from "./components/BookmarkComponent";
import { PostCard } from "./components/PostCard";
import { MobileNavbar } from "./components/MobileNavbar";
import toast, { Toaster } from "react-hot-toast";
import { MobileSearchBar } from "./components/MobileSearchBar";
import { SearchPage } from "./pages/SearchPage";

// export
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="*"
          element={
            <div className="pages">
              <div className="sidebar">
                <SideBar />
              </div>
              <main>
                <div>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/bookmark" element={<Bookmark />} />
                    <Route
                      path="/profile/:username"
                      element={<ProfilePage />}
                    />
                    <Route path="/post/:id" element={<PostDetail />} />
                    {/* <Route path="/postCard" element={<PostCard />} /> */}
                  </Routes>
                </div>
                <div className="mobileNav">
                  <MobileNavbar />
                </div>
              </main>
              <aside className="asidebarstyle">
                <div className="asideBar">
                  <Search />
                  <Follow />
                </div>
              </aside>
            </div>
          }
        />
      </Routes>
      <Toaster />
    </div>
  );
}
// );
// }

export default App;
