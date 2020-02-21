import React, { Component } from "react";

import Post from "./Post";
import "./PostList.css";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Tania da letra T",
          avatar: "https://i.imgur.com/FHJXMiHl.jpg" //Tania
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Gabriel da letra G",
              avatar: "https://i.imgur.com/zyJ8Fjxl.jpg" // Gabriel
            },
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, \
              e geralmente ficamos de olho em quem se destaca no Bootcamp, \
              inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. \
              Além disso, se você tem vontade de ensinar gravando vídeos e criando \
              posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://i.imgur.com/zyJ8Fjxl.jpg" // Gabriel
        },
        date: "03 Jun 2019",
        content: 
          "Fala galera, beleza? \
          Estou fazendo o Bootcampo GoStack da Rocketseat e está sendo muito massa! \
          Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.", 
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://i.imgur.com/DADEHpHl.jpg" //Diego Rocketseat
            },
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, \
              e geralmente ficamos de olho em quem se destaca no Bootcamp, \
              inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. \
              Além disso, se você tem vontade de ensinar gravando vídeos e criando \
              posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          },
          {
            id: 2,
            author: {
              name: "Julio da letra J",
              avatar: "http://i.imgur.com/9TsHjARl.jpg" //Julio
            },
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, \
              e geralmente ficamos de olho em quem se destaca no Bootcamp, \
              inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. \
              Além disso, se você tem vontade de ensinar gravando vídeos e criando \
              posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"


          }

        ]
      },
      {
        id: 3,
        author: {
          name: "Julio Alcantara",
          avatar: "http://i.imgur.com/9TsHjARl.jpg" //Julio
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: 
        [
          {
            id: 1,
            author: {
              name: "Tania Comte",
              avatar: "https://i.imgur.com/FHJXMiHl.jpg" //Tania
            },
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, \
              e geralmente ficamos de olho em quem se destaca no Bootcamp, \
              inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. \
              Além disso, se você tem vontade de ensinar gravando vídeos e criando \
              posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
    ]
  };

  render() {
    return (
      <>
        <ul class="post-list">
          {this.state.posts.map(p => (
            <Post key={p} post={p} />
          ))}
        </ul>
      </>
    );
  }
}

export default PostList;
