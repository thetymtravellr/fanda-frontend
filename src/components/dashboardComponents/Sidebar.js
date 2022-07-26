import React from 'react';
import { AiFillHome, AiFillShopping } from "react-icons/ai";
import { BiStats } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import CustomDLink from './CustomDLink';

const Sidebar = () => {
    return (
        <nav>
              <ul className="flex flex-col items-center  text-2xl text-white">
              <li className="">
                <CustomDLink to="/">
                  <AiFillHome />
                </CustomDLink>
              </li>
              <li className="">
                <CustomDLink to="/dashboard">
                  <BiStats />
                </CustomDLink>
              </li>
              <li>
                <CustomDLink to="/dashboard/users">
                  <FaUserFriends />
                </CustomDLink>
              </li>
              <li>
                <CustomDLink to="/dashboard/orders">
                  <AiFillShopping />
                </CustomDLink>
              </li>
            </ul>
        </nav>
    );
};

export default Sidebar;