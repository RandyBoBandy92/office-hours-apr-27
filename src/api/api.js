const ROOT_URL = "https://jsonplaceholder.typicode.com";
// TODO API KEYS how to store SAFELY

const getPosts = () => {
  // fetch https://jsonplaceholder.typicode.com/posts
  return fetch(`${ROOT_URL}/posts`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

const getPostById = (id) => {
  return fetch(`${ROOT_URL}/posts/${id}`)
    .then((response) => {
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

export { getPosts, getPostById, getCommentsByPostId };

// ASYNC ALTERNATIVE
// const fetchPosts = async () => {
//   const response = await fetch(`${ROOT_URL}/posts`);
//   const data = await response.json();
//   return data;
// };
