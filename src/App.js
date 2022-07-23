import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Account from "./pages/Account/Account";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import HomePage from "./pages/HomePage/HomePage";
import ItemsByCategory from "./pages/ItemsByCategory/ItemsByCategory";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Store from "./pages/Store/Store";
import Wishlist from "./pages/Wishlist/Wishlist";
import WorksPage from "./pages/WorksPage";
import RequireAuth from "./utilities/auth/RequireAuth";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/new" element={<WorksPage />} />
          <Route path="/category/:title" element={<ItemsByCategory />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Account />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
