import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import WorkShop from "./pages/Workshop";
import Posts from "./pages/Posts";
import SinglePost from "./pages/SinglePost";

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
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/workshop" element={<WorkShop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
