import axios from "axios";
import React, { useState, useEffect } from "react";

const UserDetails = ({ activeID }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios(`https://jsonplaceholder.typicode.com/users/${activeID}`)
      .then((response) => setUser(response.data))
      .finally(() => setLoading(false));
  }, [activeID]);

  return (
    <div className="border-2 mt-3 p-4">
      <p className="text-4xl text-center font-bold mb-4">User Detail</p>
      {loading && <p>Loading...</p>}
      <pre>{!loading && JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default UserDetails;
