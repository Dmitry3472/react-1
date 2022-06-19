import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  let postData = [
    { id: 1, message: "MyMessage1", likeCounts: "15" },
    { id: 2, message: "MyMessage2", likeCounts: "22" },
    { id: 3, message: "MyMessage3", likeCounts: "33" },
    { id: 4, message: "MyMessage4" },
    { id: 5, message: "MyMessage5" },
    { id: 6, message: "MyMessage6" },
  ];

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
      <div className={s.posts}>
        <Post
          message={postData[0].message}
          likeCounts={postData[0].likeCounts}
        />
        <Post
          message={postData[1].message}
          likeCounts={postData[1].likeCounts}
        />
        <Post
          message={postData[2].message}
          likeCounts={postData[2].likeCounts}
        />
        <Post message={postData[3].message} />
        <Post message={postData[4].message} />
        <Post message={postData[5].message} />
      </div>
    </div>
  );
};

export default MyPosts;
