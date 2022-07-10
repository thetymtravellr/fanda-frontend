import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import HomePage from "./pages/HomePage/HomePage";
import WorksPage from "./pages/WorksPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
