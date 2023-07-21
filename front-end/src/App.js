// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

// PAGES
import Edit from "./pages/Edit";
import FourOFour from "./pages/Four0Four";
import Home from "./pages/Home"
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";

// COMPONENTS
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/new" element={<New />} />
            <Route exact path="/transactions/:index" element={<Show />} />
            <Route path="/transactions/:index/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;