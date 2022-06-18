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
        <Post message="Hi, first message" likeCounts="15" />
        <Post message="second post" likecCounts="22" />
        <Post message="3" likeCounts="33" />
        <Post message="4" />
        <Post message="five" />
        <Post message="SIX" />
      </div>
    </div>
  );
};

export default MyPosts;
