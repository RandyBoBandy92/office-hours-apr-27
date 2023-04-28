// {
//     "postId": 5,
//     "id": 21,
//     "name": "aliquid rerum mollitia qui a consectetur eum sed",
//     "email": "Noemie@marques.me",
//     "body": "deleniti aut sed molestias explicabo\ncommodi odio ratione nesciunt\nvoluptate doloremque est\nnam autem error delectus"
//     },

const Comment = ({ commentData }) => {
  return (
    <div>
      <h4>{commentData.name}</h4>
      <h5>{commentData.email}</h5>
      <p>{commentData.body}</p>
    </div>
  );
};

export default Comment;
