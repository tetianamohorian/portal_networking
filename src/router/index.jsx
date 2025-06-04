import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Works from "../pages/Works";
import BotGuide from "../pages/BotGuide";


export default function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/bot" element={<BotGuide />} />
      </Routes>
  );
}
