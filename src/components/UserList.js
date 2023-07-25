import axios from "axios";
import React, { useEffect, useState } from "react";

const UserList = ({ setActiveID }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="border-2 mt-3 p-4">
      <p className="text-4xl text-center font-bold mb-4">Users</p>
      {loading && <p>Loading...</p>}
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setActiveID(user.id)}
            className="hover:underline cursor-pointer transition duration-300 ease-in-out"
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
