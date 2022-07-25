import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Account from "./pages/Account/Account";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Dashboard from "./pages/Dashboard/Dashboard";
import UsersList from "./pages/Dashboard/UsersList";
import HomePage from "./pages/HomePage/HomePage";
import ItemsByCategory from "./pages/ItemsByCategory/ItemsByCategory";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Store from "./pages/Store/Store";
import Wishlist from "./pages/Wishlist/Wishlist";
import RequireAuth from "./utilities/auth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/category/:title" element={<ItemsByCategory />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route
            path="/checkout"
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<UsersList />} />
          </Route>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
