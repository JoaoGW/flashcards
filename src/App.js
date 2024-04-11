import { BrowserRouter, Routes, Route } from "react-router-dom";

import Principal from "./pages/Menu Principal/principal";
import Jogo from "./pages/O Jogo/jogo";
import Editar from "./pages/Editar/editar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index path="/principal" element={<Principal />} />
          <Route path="/jogo" element={<Jogo />} />
          <Route path="/editar" element={<Editar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
