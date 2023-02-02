import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Stevens from "./components/Stevens";
import Snoqualmie from "./components/Snoqualmie";
import Baker from "./components/Baker";
import Crystal from "./components/Crystal";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Stevens />}></Route>
        <Route path="/Snoqualmie" element={<Snoqualmie />}></Route>
        <Route path="/Crystal" element={<Crystal />}></Route>
        <Route path="/Baker" element={<Baker />}></Route>
      </Routes>
    </div>
  );
}

export default App;
