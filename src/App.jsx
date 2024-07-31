import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Homepage/Layout";
import { FloatingNav } from "./components/ui/navbar";
import { navItems } from "./lib/utils";
import COP from "./components/LendingBorrowing/COP";
import LayoutLB from "./components/LendingBorrowing/LayoutLB";
import AboutUs from "./components/About/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen w-screen overflow-auto no-scrollbar">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/product" element={<LayoutLB />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
