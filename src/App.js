import { useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Lenis from "@studio-freight/lenis";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Industry from "./Pages/Industry/Industry";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/industries/:id" element={<Industry/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
