import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ContactUsPage from "./pages/ContactUsPage";
import HomePage from "./pages/HomePage/HomePage";
import ItemsByCategory from "./pages/ItemsByCategory/ItemsByCategory";
import WorksPage from "./pages/WorksPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<WorksPage />} />
          <Route path="/category/:title" element={<ItemsByCategory />} />
          <Route path="/cart" element={<ContactUsPage />} />
          <Route path="/wishlist" element={<ContactUsPage />} />
          <Route path="/login" element={<ContactUsPage />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
