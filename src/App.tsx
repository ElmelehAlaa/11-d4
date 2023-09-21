import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyHome from "./components/MyHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleDetail from "./components/ArticleDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyHome />} />
          <Route path="/:id" element={<ArticleDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
