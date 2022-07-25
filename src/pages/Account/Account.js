import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Account = () => {
  const [user, loading, error] = useAuthState(auth);
  const [userDb, setUserDb] = useState({});

  useEffect(() => {
    const fetchUser = () => {
      fetch(`http://localhost:8080/user?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setUserDb(data));
    };
    fetchUser();
  }, [user]);

  return (
    <div className="max-w-6xl mx-auto px-8">
      <div className="w-full">
        <h1 className="text-4xl font-semibold">Welcome {user?.displayName}</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-12">
        <div className="">
          <p className="text-2xl  border-b">Account Details</p>
          <div className="max-w-sm mt-6 flex flex-col space-y-4">
            <div className="flex justify-between space-x-8">
              <p>Display Name:</p>
              <p>{user?.displayName}</p>
            </div>
            <div className="flex justify-between space-x-8">
              <p>Phone:</p>
              <p>+88017111111</p>
            </div>
            <div className="flex justify-between space-x-8">
              <p>Gender:</p>
              <p>Male</p>
            </div>
            <div>
              <button className="btn-custom hover:border-black hover:bg-black hover:text-white">
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3 mt-8">
          {userDb.role === "admin" ? (
            <Link to="/dashboard"><button className="btn-custom hover:text-black w-full">Dashboard</button></Link>
          ) : (
            <Link to="/my-orders">
              <button className="btn-custom hover:text-black w-full">My Orders</button>
            </Link>
          )}
          <button
            onClick={() => signOut(auth)}
            className="btn-custom hover:text-black"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
