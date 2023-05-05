import { useContext, useEffect, useState } from "react";
import { getPosts, getPostsAsync } from "../api/api";
import Post from "../components/Post";
import { AppContext } from "../context/AppProvider";

function Posts() {
  const { state } = useContext(AppContext);
  const { settings } = state;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // getPosts().then((data) => {
    //   setPosts(data);
    // });
    // TODO async error handling

    // in order to use async for setting our state, we have to wrap the code which does so
    // in an async function, otherwise we cannot use the special 'await' keyword
    // const setPostsAsync = async () => {
    //   const data = await getPostsAsync();
    //   setPosts(data);
    // };

    // ALTERNATIVE: you can write an async function in api.js but then the final state setting, can be done with promises
    getPostsAsync().then((data) => {
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
