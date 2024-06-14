import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
