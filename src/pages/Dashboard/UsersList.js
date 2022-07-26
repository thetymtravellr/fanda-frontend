import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../store/actions/usersActions";

const UsersList = () => {
  const { users } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    const data = await axios.get('https://quiet-refuge-20911.herokuapp.com/users');
      dispatch(setUsers(data?.data))
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl mb-4 font-semibold">Manage Users</h1>
      {
        users.length > 0 && <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          {
            users.map((user,i) => <tbody>
              <tr>
                <td>
                {i + 1}
                </td>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">Hart Hagerty</div>
                      <div class="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="text-sm">{user.email}</p>
                </td>
                <td>Purple</td>
                <th>
                  <button class="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>)
          }
        </table>
      </div>
      }
    </div>
  );
};

export default UsersList;
