import React, { Component } from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <img class="logo" src="https://i.imgur.com/KDIDiSE.png" />
        <div>
          <strong>Meu perfil</strong>
        </div>
      </nav>
    </header>
  );
}

export default Header;
