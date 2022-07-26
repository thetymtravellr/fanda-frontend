import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../store/actions/usersActions";

const UsersList = () => {
  const { users } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    const data = await axios.get(
      "https://quiet-refuge-20911.herokuapp.com/users"
    );
    dispatch(setUsers(data?.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl mb-4 font-semibold">Manage Users</h1>
      {users.length > 0 && (
        <div class="overflow-x-auto w-full">
          <table class="table w-full">
            <thead>
              <tr className="text-center">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            {users.map((user, i) => (
              <tbody>
                <tr className="text-center">
                  <td>{i + 1}</td>
                  <td>{user.name}</td>
                  <td>
                    <p className="text-sm">{user.email}</p>
                  </td>
                  <td>
                    {user.role && (
                      <p
                        className={`uppercase text-xs font-semibold w-fit mx-auto py-1 px-2 rounded-md text-white 
                        ${
                          user.role === "admin" && "bg-blue-400"
                        }
                        ${
                          user.role === "editor" && "bg-orange-400"
                        }
                        `}
                      >
                        {user.role}
                      </p>
                    )}
                  </td>
                  <th>
                    <button class="btn btn-ghost btn-xs">Action</button>
                  </th>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default UsersList;
