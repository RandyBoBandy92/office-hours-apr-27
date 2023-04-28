// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"

import { Link } from "react-router-dom";

// }
const Post = ({ postData, useLink }) => {
  return (
    <div>
      {useLink ? (
        <Link to={`/posts/${postData.id}`}>
          <h2>{postData.title}</h2>
        </Link>
      ) : (
        <h2>{postData.title}</h2>
      )}

      <p>{postData.body}</p>
    </div>
  );
};

export default Post;
