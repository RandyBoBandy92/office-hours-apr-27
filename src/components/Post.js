// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }
const Post = ({ postData }) => {
  return (
    <div>
      <h2>{postData.title}</h2>
      <p>{postData.body}</p>
    </div>
  );
};

export default Post;
