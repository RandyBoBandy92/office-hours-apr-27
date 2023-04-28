import { useEffect, useState } from "react";
import { getPosts } from "../api/api";
import Post from "../components/Post";

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.length > 0 &&
        posts.map((postData) => <Post key={postData.id} postData={postData} />)}
    </div>
  );
}

export default Posts;
