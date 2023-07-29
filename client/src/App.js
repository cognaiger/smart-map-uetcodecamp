import G2 from "./pages/FloorLayout/G2";
import MainPage from "./pages/MainPage/MainPage";
import { Register } from "./pages/Register/Register";
import G2F1 from "./pages/FloorLayout/G2F1";
import G2F2 from "./pages/FloorLayout/G2F2";
import G2F3 from "./pages/FloorLayout/G2F3";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/8" element={<G2 />}>
          <Route path="/8/1" element={<G2F1 />} />
          <Route path="/8/2" element={<G2F2 />} />
          <Route path="/8/3" element={<G2F3 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
