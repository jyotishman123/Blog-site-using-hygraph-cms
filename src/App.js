import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/:slug" element={ <Blog/> } />
    </Routes>

    </div>
  );
}

export default App;
