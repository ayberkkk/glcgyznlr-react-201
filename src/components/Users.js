import React, { useState } from "react";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const User = () => {
  const [activeID, setActiveID] = useState(null);

  return (
    <div className="container mx-auto divide-x grid grid-cols-2">
      <div className="p-4">
        <UserList setActiveID={setActiveID} />
      </div>
      <div className="p-4">
        {activeID && <UserDetails activeID={activeID} />}
      </div>
    </div>
  );
};

export default User;
