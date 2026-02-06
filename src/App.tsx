import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Home, About, Blog, Post, Search, Dashboard } from "./pages/pages";
import Navbar from "./components/layout/Navbar";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Post />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
