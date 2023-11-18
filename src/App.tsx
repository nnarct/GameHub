import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/static/Home";
import AboutUs from "./pages/static/AboutUs";
import Contact from "./pages/static/Contact";
import PuzzleHouse from "./pages/games/PuzzleHouse";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="puzzle-house" element={<PuzzleHouse />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
{
  /* <Route path="contact" element={<Contact />} /> */
}
{
  /* <Route path="*" element={<NoPage />} /> */
}
