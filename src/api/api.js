const ROOT_URL = "https://jsonplaceholder.typicode.com";
// TODO API KEYS how to store SAFELY

const getPosts = () => {
  // fetch https://jsonplaceholder.typicode.com/posts
  // fetch returns a PROMISE - which represents some future work which will be
  // completed in the future, when it is completed (either successfully or unsuccessfully)
  // we can use .then or .catch to write further code meant to handle those two possibilities

  // a promise can be in 1 of 3 states:
  // pending (not done yet)
  // fulfilled (done, and things went good)
  // rejected (done, but things went bad)

  return fetch(`${ROOT_URL}/posts`) // returns a promise
    .then((response) => {
      return response.json(); // converts the plain text
      // which was sent to us over the internet
      // into a javascript object we can use
      // and finally, returns another promise
    })
    .then((data) => {
      // now we have a javascript object we can use
      return data; // we return this to wherever the function is called
      // this returned data, is still "wrapped" in a promise
    });
};

const getPostsAsync = async () => {
  const response = await fetch(`${ROOT_URL}/posts`);
  const data = await response.json();
  return data; // this data is actually "wrapped" in a promise
};

// async function getPostsAsyncFunc() {}

const getPostById = (id) => {
  const postPath = `${ROOT_URL}/posts/${id}`;
  return fetch(postPath)
    .then((response) => {
      if (response.status !== 200) {
        throw Error(`API failed to fetch: ${postPath}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

const getCommentsByPostId = (postId) => {
  return fetch(`${ROOT_URL}/posts/${postId}/comments`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

export { getPosts, getPostsAsync, getPostById, getCommentsByPostId };

// ASYNC ALTERNATIVE
// const fetchPosts = async () => {
//   const response = await fetch(`${ROOT_URL}/posts`);
//   const data = await response.json();
//   return data;
// };
