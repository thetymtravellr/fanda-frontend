import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label
            for="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <div className="menu w-40 p-4 bg-blue-400 flex flex-col items-center justify-between">
            <div className="text-center text-white">
              <h1 className="text-xl">Welcome!</h1>
              <h2 className="text-lg">Robiul</h2>
            </div>
            <ul className=" flex flex-col items-center  text-3xl text-white">
              <li className="">
                <Link to="/">
                  <AiFillHome />
                </Link>
              </li>
              <li>
                <Link to="/dashboard/users">
                  <FaUserFriends />
                </Link>
              </li>
            </ul>
            <div>
                <button className="text-3xl hover:bg-black/10 p-4 duration-200 rounded-xl">
                    <TbLogout className="text-white"/>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
