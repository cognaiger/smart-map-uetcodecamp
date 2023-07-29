import G2 from "./pages/FloorLayout/G2";
import G3 from "./pages/FloorLayout/G3";
import E3 from "./pages/FloorLayout/E3";
import MainPage from "./pages/MainPage/MainPage";
import { Register } from "./pages/Register/Register";
import G2F1 from "./pages/FloorLayout/G2F1";
import G2F2 from "./pages/FloorLayout/G2F2";
import G2F3 from "./pages/FloorLayout/G2F3";
import Login from "./pages/Login/Login";
import G3F1 from "./pages/FloorLayout/G3F1";
import E3F1 from "./pages/FloorLayout/E3F1";
import E3F2 from "./pages/FloorLayout/E3F2";
import E3F3 from "./pages/FloorLayout/E3F3";
import E3F4 from "./pages/FloorLayout/E3F4";
import E3F5 from "./pages/FloorLayout/E3F5";
import E3F6 from "./pages/FloorLayout/E3F6";
import E3F7 from "./pages/FloorLayout/E3F7";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element = {<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/8" element={<G2 />}>
          <Route path="/8/1" element={<G2F1 />} />
          <Route path="/8/2" element={<G2F2 />} />
          <Route path="/8/3" element={<G2F3 />} />
        </Route>

        <Route path="/10" element={<G3 />}>
          <Route path="/10/1" element={<G3F1 />} />
        </Route>

        <Route path="/9" element={<E3 />}>
          <Route path="/9/1" element={<E3F1 />} />
          <Route path="/9/2" element={<E3F2 />} />
          <Route path="/9/3" element={<E3F3 />} />
          <Route path="/9/4" element={<E3F4 />} />
          <Route path="/9/5" element={<E3F5 />} />
          <Route path="/9/6" element={<E3F6 />} />
          <Route path="/9/7" element={<E3F7 />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
