import React from "react";
import logo from "../assets/images/on-air.png";
import Navbar from "./Navbar";

export default function Header({ supabase }) {
  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();
  }

  return (
    <header className="header">
      <div className="header--logo">
        <img src={logo} className="header--logo-img" />
        <h3 className="header--logo-name">
          On Air
          <br />
          Podcasts
        </h3>
      </div>
      <button onClick={handleSignOut} type="button" className="sign-out-button">
        Sign Out
      </button>
      <Navbar />
    </header>
  );
}
