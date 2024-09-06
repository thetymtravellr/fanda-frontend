import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import products from "./data/products.json";
import Account from "./pages/Account/Account";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Orders from "./pages/Dashboard/Orders";
import Overview from "./pages/Dashboard/Overview";
import UsersList from "./pages/Dashboard/UsersList";
import HomePage from "./pages/HomePage/HomePage";
import ItemsByCategory from "./pages/ItemsByCategory/ItemsByCategory";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Store from "./pages/Store/Store";
import Wishlist from "./pages/Wishlist/Wishlist";
import { setProducts } from "./store/actions/productsActions";
import RequireAuth from "./utilities/auth/RequireAuth";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(products));
  }, []);

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
            <Route index element={<Overview />} />
            <Route path="/dashboard/users" element={<UsersList />} />
            <Route path="/dashboard/orders" element={<Orders />} />
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
