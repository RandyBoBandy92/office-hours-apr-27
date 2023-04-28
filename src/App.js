import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import WorkShop from "./pages/Workshop";
import Posts from "./pages/Posts";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to={"/workshop"}>WorkShop</Link>
            </li>
            <li>
              <Link to={"/posts"}>Posts</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/workshop" element={<WorkShop />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
