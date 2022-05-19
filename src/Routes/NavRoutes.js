import { Routes, Route } from "react-router-dom";
import { Home, Explore, Bookmark } from "../Pages";
const NavRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/bookmark" element={<Bookmark />} />
    </Routes>
  );
};

export { NavRoutes };
