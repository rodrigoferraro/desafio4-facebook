import React, { Component } from "react";

import Comment from "./Comment";
import "./Post.css";

function Post({ post }) {
  return (
    <li>
      <div className="post">
        <img id="avatar" src={post.author.avatar} />
        <span className="post_author">{post.author.name}</span>
        <span className="post_date">{post.date}</span>
        <span className="content">{post.content}</span>
        <ul>
          {post.comments.map(c => (
            <Comment key={c.id} c={c} />
          ))}
        </ul>
      </div>
    </li>
  );
}

export default Post;
