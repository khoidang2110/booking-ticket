import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./component/Header/Header";
import DatVeBaiHai from "./page/DatVeBaiHai/DatVeBaiHai";
import DatVeBaiMot from "./page/DatVeBaiMot/DatVeBaiMot";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/datvebaimot" element={<DatVeBaiMot/>} />
        <Route path="/datvebaihai" element={<DatVeBaiHai />} />
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
