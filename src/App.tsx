import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Agents from "./pages/Agents";
import Contact from "./pages/Contact";
import Abouts from "./pages/Abouts";

const App = () => {
  return (
    <div className=" ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
