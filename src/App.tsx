import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Charte from "./pages/charte";

function App() {
  return (
    <Router>
      <div className="flex h-screen flex-col px-40">
        <div className="flex flex-col items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/charte" element={<Charte />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
