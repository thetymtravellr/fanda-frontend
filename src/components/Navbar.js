import { useAuthState } from "react-firebase-hooks/auth";
import {
  HiOutlineHeart,
  HiOutlineSearch,
  HiOutlineShoppingCart,
  HiOutlineUser
} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import CustomLink from "./CustomLink";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  if (location.pathname.includes("/dashboard")) {
    return null
  }

  return (
    <header className="w-full py-4">
      <div className="container">
        <div className="w-full flex justify-between items-center px-8 py-2">
          <ul className="w-1/4 flex gap-3 font-medium uppercase">
            <li>
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink to="/store">Store</CustomLink>
            </li>
            <li>
              <CustomLink to="/blog">Blog</CustomLink>
            </li>
            <li>
              <CustomLink to="/contact">Contact</CustomLink>
            </li>
          </ul>
          <div className="w-full">
            <Link to="/">
              <h1 className="text-3xl font-bold text-center uppercase">Fanda</h1>
            </Link>
          </div>
          <div className="w-1/4 flex items-center justify-end space-x-4">
            <button>
              <HiOutlineSearch className="text-xl" />
            </button>
            <Link to="/wishlist">
              <HiOutlineHeart className="text-xl" />
            </Link>
            <Link to="/cart">
              <HiOutlineShoppingCart className="text-xl" />
            </Link>
            <Link to="/profile">
              <HiOutlineUser className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
