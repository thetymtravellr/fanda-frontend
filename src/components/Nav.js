import { BiHeart, BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="border flex items-center px-8 py-2">
      <div className="">
        <Link to="/">
          <h1 className="text-3xl font-bold text-center">Fanda</h1>
        </Link>
      </div>
      <nav className="flex items-center justify-between px-4 w-full max-w-2xl ml-auto">
        <div className="flex w-full max-w-md bg-gray-100 p-1 rounded">
          <input type="text" className="bg-transparent outline-none w-full pl-4 text-base font-semibold uppercase" placeholder="search for items, brand" />
          <button className="w-12">
            <BiSearch className="text-xl mx-auto"/>
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/wishlist">
            <BiHeart className="text-xl" />
          </Link>
          <Link to="/cart">
            <BsCart2 className="text-xl" />
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
