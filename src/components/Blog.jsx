import { Route, Link, useRouteMatch } from "react-router-dom";
import BlogPost from "./BlogPost";
const blogPosts = [];

const Blog = () => {
  const { url, path } = useRouteMatch();
  return (
    <>
      <h1>Blog Page</h1>
      <nav>
        <ul>
          {blogPosts.map((post, index) => {
            return (
              <li key={index}>
                <Link to={`${url}/${index}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Route exact path={path}>
        <h2>Please Choose a Blog Post</h2>
      </Route>
      <Route path={`${url}/:id`}>
        <BlogPost path={blogPosts} />
      </Route>
    </>
  );
};

export default Blog;
