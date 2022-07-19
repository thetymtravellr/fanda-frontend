import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import RequireAuth from "./components/RequireAuth";
import Cart from "./pages/Cart/Cart";
import ContactUsPage from "./pages/ContactUsPage";
import HomePage from "./pages/HomePage/HomePage";
import ItemsByCategory from "./pages/ItemsByCategory/ItemsByCategory";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Profile from "./pages/Profile/Profile";
import WorksPage from "./pages/WorksPage";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<WorksPage />} />
          <Route path="/category/:title" element={<ItemsByCategory />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<ContactUsPage />} />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
