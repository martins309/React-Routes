import { userParams } from "react-router-dom";

const BlogPost = (props) => {
  const { id } = userParams();
  const post = props.posts[id];

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </article>
  );
};

export default BlogPost;
