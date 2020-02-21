import React, { Component } from "react";

import "./Comment.css";

function Comment({ c }) {
  return (
    <li class="comentarios">
      <div class="imagem">
        <img src={c.author.avatar} />
      </div>
        <div class="comentario">
          <span class="post_author">{c.author.name}</span>
          {c.content}
        </div>
    </li>
  );
}

export default Comment;
