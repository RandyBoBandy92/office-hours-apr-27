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

export { getPosts };

// ASYNC ALTERNATIVE
// const fetchPosts = async () => {
//   const response = await fetch(`${ROOT_URL}/posts`);
//   const data = await response.json();
//   return data;
// };
