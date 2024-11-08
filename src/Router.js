import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Ground from "./pages/ground/Ground";
import Ending from "./pages/ending/Ending";
import PageNotFound from "./pages/PageNotFound";

const Router = () => {
  return (
    <HashRouter>
      {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ground" element={<Ground />} />
        <Route path="/Ending/:id" element={<Ending />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
