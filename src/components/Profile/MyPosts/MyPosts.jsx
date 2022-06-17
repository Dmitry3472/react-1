import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  return (
    <div>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message="Hi, first message" likecounts="15" />
        <Post message="second post" likecounts="22" />
        <Post message="3" likecounts="33" />
        <Post message="4" />
        <Post message="five" />
        <Post message="SIX" />
      </div>
    </div>
  );
};

export default MyPosts;
