import React, { Component } from "react";

import Comment from "./Comment";
import "./Post.css";

function Post({ post }) {
  return (
    <li>
      <div class="post">
        <div class="post-completo">
          <div class="who-post-data">
            <div class="imagem">
              <img src={post.author.avatar} />
            </div>
            <div class="who-post-data-text">
              <span class="post_author">{post.author.name}</span>
              <strong class="post_date">{post.date}</strong>
            </div>
          </div>
          <span class="content">{post.content}</span>
        </div>
        <ul class="post-comment-list">
          {post.comments.map(c => (
            <Comment key={c.id} c={c} />
          ))}
        </ul>
      </div>
    </li>
  );
}

export default Post;
