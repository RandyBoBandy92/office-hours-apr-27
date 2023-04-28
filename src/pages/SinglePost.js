import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByPostId, getPostById } from "../api/api";
import Post from "../components/Post";
import Comment from "../components/Comment";

const SinglePost = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState({});
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    getPostById(id).then((postData) => setPostData(postData));
    getCommentsByPostId(id).then((postComments) => {
      setPostComments(postComments);
    });
  }, []);

  return (
    <div>
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
