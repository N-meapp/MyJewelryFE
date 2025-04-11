import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Categories from "./Pages/Category/Categories";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}