import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="border flex items-center px-8 py-2 bg-blue-300 text-white">
      <div className="">
        <Link to="/">
          <h1 className="text-3xl font-bold text-center">Fanda</h1>
        </Link>
      </div>
      <nav className="flex items-center justify-between px-4 w-full max-w-2xl ml-auto">
        <div className="flex w-full max-w-md bg-blue-400 rounded h-10">
          <input
            type="text"
            className="bg-transparent outline-none w-full px-3 text-base-100 text-sm uppercase"
            placeholder="search for items, brand"
          />
          <button className="w-20 rounded-r hover:bg-blue-600 h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center space-x-4 text-white">
          <Link to="/wishlist">
            <HiOutlineHeart className="text-xl" />
          </Link>
          <Link to="/cart">
            <HiOutlineShoppingCart className="text-xl" />
          </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="cursor-pointer">
              <div className="w-12 rounded-full border-2  border-gray-300">
                <img
                  className="rounded-full"
                  src="https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg"
                  alt=""
                />
              </div>
            </label>
            <ul className="dropdown-content menu bg-gray-200 w-40 mt-2 rounded-md font-semibold">
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button>Log Out</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
