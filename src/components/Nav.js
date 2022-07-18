import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import {
  HiOutlineHeart,
  HiOutlineSearch,
  HiOutlineShoppingCart,
  HiOutlineUser
} from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import CustomLink from "./CustomLink";

const Nav = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <header className="w-full py-4">
      <div className="w-full flex justify-between items-center px-8 py-2 border-b">
        <div className="flex space-x-3">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <BsFacebook className="text-xl" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <AiOutlineInstagram className="text-xl" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <BsTwitter className="text-xl" />
          </a>
        </div>
        <div className="">
          <Link to="/">
            <h1 className="text-3xl font-bold text-center uppercase">Fanda</h1>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
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
      <nav className="w-full py-4">
        <ul className="w-full flex justify-center space-x-6 font-medium uppercase">
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/shop">Shop</CustomLink>
          </li>
          <li>
            <CustomLink to="/category">Category</CustomLink>
          </li>
          <li>
            <CustomLink to="/blog">Blog</CustomLink>
          </li>
          <li>
            <CustomLink to="/contact">Contact</CustomLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
