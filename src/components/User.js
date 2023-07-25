import axios from "axios";
import React, { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // axios("https://jsonplaceholder.typicode.com/users")
    //   //   .then((response) => response.json())  .json for fetch usage
    //   .then((response) => {
    //     setUsers(response.data);
    //     axios(
    //       `https://jsonplaceholder.typicode.com/posts?userId=${response.data[0].id}`
    //     ).then((response) => {
    //       setPosts(response.data);
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .finally(() => setLoading(false));
    getData();
  }, []);

  // ***  async/await  *** //

  const getData = async () => {
    try {
      const { data: users } = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      const { data: posts } = await axios(
        `https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`
      );
      setLoading(false);
      setUsers(users);
      setPosts(posts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Users</h2>
      {loading && <>Loading...</>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <h2>Posts</h2>
      {loading && <>Loading...</>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
