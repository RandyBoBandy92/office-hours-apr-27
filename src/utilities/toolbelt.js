// Destructuring

const firstName = "Randy";
const lastName = "Gulak";

// goal: make a function, where I can pass these two variables in, and end up with
// an object containing them both

const createNameObject = (firstName, lastName) => {
  const obj = {
    firstName,
    lastName,
  };
  // obj = {
  // firstName: "Randy",
  // lastName: "Gulak"
  //   }
  return obj;
};

const createNameArray = (firstName, lastName) => {
  const array = [firstName, lastName];
  return array;
};

const nameObject = createNameObject(firstName, lastName);
const nameArray = createNameArray(firstName, lastName);
// ["Randy", "Gulak"]

// nameObject.firstName => "Randy"
// nameObject.lastName => "Gulak"

// "unpackage" an object (or an array) via "destructuring"

const { firstName, lastName } = nameObject;
const [firstName, lastName] = nameArray;
// declaring two variables on one line
// the { } on either side, is a way of saying:
// nameObject is a javaScript object, and inside it, these are the two properties I want to "unpackage"

// generating a bunch of Post components
// you are passing in several props, postData, useLink
// {posts.length > 0 &&
//     posts.map((postData) => (
//       <Post key={postData.id} postData={postData} useLink={true} />
//     ))}

const Post = ({ postData, useLink }) => {
  // props.postData
  // props.useLink
  const { state } = useContext(AppContext);
  const { settings } = state;
  return (
    <div style={{ color: settings.color }}>
      {useLink ? (
        <Link to={`/posts/${postData.id}`}>
          <h2>{postData.title}</h2>
        </Link>
      ) : (
        <h2>{postData.title}</h2>
      )}

      <p>{props.postData.body}</p>
    </div>
  );
};

export default Post;
