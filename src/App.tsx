import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className=" ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
