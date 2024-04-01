import "./App.css";
import { Routes, Route } from "react-router-dom";
import Domains from "./pages/Domains";
import Events from "./pages/Events";
import Members from "./pages/Members";
import Blog from "./pages/Blog";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { MainProject } from "./pages/Projects";

function App() {
  return (

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Domains" element={<Domains />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Projects" element={<MainProject />} />
      <Route path="/Members" element={<Members />} />
      <Route path="/Blogs" element={<Blog />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/*" element={<Error />} />

    </Routes>

  );
}

export default App;
