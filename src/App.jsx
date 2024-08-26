import { useState } from "react";
import "./App.css";
import Welcome from "./pages/Welcome";
import { HashRouter, Route, Router, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Discover from "./pages/Discover";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HashRouter>
        <div className="absolute z-50 w-full ">
        <Navigation />

        </div>
        <Routes>
          <Route path="/" exact element={<Welcome/>} />
          <Route path="/discover" element={<Discover/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
