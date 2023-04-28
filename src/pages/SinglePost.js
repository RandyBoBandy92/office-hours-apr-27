import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByPostId, getPostById } from "../api/api";
import Post from "../components/Post";
import Comment from "../components/Comment";

const SinglePost = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState({});
  const [postComments, setPostComments] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    getPostById(id)
      .then((postData) => {
        setPostData(postData);
      })
      .catch((error) => {
        setErrors([...errors, error.message]);
      });
    getCommentsByPostId(id)
      .then((postComments) => {
        setPostComments(postComments);
      })
      .catch((error) => {
        setErrors([...errors, error.message]);
      });
  }, []);

  return (
    <div>
      {errors.length > 0 &&
        errors.map((error) => <div key={error}>{error}</div>)}
      {postData?.id && <Post postData={postData} useLink={false} />}
      {postComments.length > 0 && (
        <section>
          <h3>Comments</h3>
          {postComments.map((commentData) => (
            <Comment key={commentData.id} commentData={commentData} />
          ))}
        </section>
      )}
    </div>
  );
};

export default SinglePost;
