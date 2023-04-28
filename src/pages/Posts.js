import { useContext, useEffect, useState } from "react";
import { getPosts } from "../api/api";
import Post from "../components/Post";
import { AppContext } from "../context/AppProvider";

function Posts() {
  const { state } = useContext(AppContext);
  const { settings } = state;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div>
      <h1 style={{ color: settings.color }}>Posts</h1>
      {posts.length > 0 &&
        posts.map((postData) => (
          <Post key={postData.id} postData={postData} useLink={true} />
        ))}
    </div>
  );
}

export default Posts;
