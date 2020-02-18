import React, { Component } from "react";

import "./Comment.css";

function Comment({ c }) {
  return (
    <li>
      <div>
        <img id="avatar" src={c.author.avatar} />
        <div className="comentario">
          <span className="post_author">{c.author.name}</span>
          <span className="content">{c.content}</span>
        </div>
      </div>
    </li>
  );
}

export default Comment;
