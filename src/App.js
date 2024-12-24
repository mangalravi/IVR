import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import ViewComplent from "./pages/ViewComplent";
import RegisterComplement from "./pages/RegisterComplement";
import EntryList from "./pages/EntryList";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="app-body d-flex">
        <Sidebar />
        <main className="main bg-white w-100 h-100 mb-3">
          <Routes>
            <Route path="/" element={<ViewComplent />} />
            <Route path="/register" element={<RegisterComplement />} />
            <Route path="/entrylist" element={<EntryList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
