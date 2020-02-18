import React, { Component } from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <img id='logo' src="https://i.imgur.com/KDIDiSE.png" />
        <div>
          <span>Meu perfil</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
