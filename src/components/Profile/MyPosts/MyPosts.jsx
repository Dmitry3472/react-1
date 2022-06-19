import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "MyMessage1", likeCounts: "15" },
    { id: 2, message: "MyMessage2", likeCounts: "23" },
    { id: 3, message: "MyMessage3", likeCounts: "33" },
    { id: 4, message: "MyMessage4" },
    { id: 5, message: "MyMessage5" },
    { id: 6, message: "MyMessage6" },
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} likeCounts={p.likeCounts} />
  ));

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
