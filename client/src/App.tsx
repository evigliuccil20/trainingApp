import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Post, PostsResponse, User } from "./interface";

function App() {
  //State
  const [user, setUser] = useState<User>();
  const [posts, setPosts] = useState<Post[]>([]);

  //Effects
  useEffect(() => {
    if (!user) {
      axios
        .get("http://localhost:3000/user")
        .then((x) => {
          setUser(x.data);
        })
        .catch((x) => {
          console.log(x);
        });
    }
  });

  useEffect(() => {
    if (!!user?.userId && posts?.length === 0) {
      axios
        .get<PostsResponse>(`http://localhost:3000/user/${user.userId}/posts`)
        .then((x) => {
          setPosts(x.data.posts);
        })
        .catch((x) => {
          console.log(x);
        });
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {user?.name}
        <br />
        {posts.map((post) => (
          <>
            {post.title}
            <br />
          </>
        ))}
      </header>
    </div>
  );
}

export default App;
