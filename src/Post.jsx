import React, { useEffect, useState } from "react";

function Post() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((Response) => Response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="d-flex justify-content-center">
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <div className="d-flex">
                <img className=" db rounded-circle" src={post.profilePic} />
                <h5 className="m-3">{post.username}</h5>
              </div>
              <img className="image m-3" src={post.image} />
              <div>
                <i className="bi bi-heart"></i>
                <i className="bi bi-send"></i>
                <i className="bi bi-chat"></i>
              </div>
              <div>
                <b>{post.likes}</b>
              </div>
              <p>{post.caption}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading Posts</div>
      )}
    </div>
  );
}

export default Post;
