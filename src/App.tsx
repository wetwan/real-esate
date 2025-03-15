import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Agents from "./pages/Agents";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className=" ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
};

export default App;
