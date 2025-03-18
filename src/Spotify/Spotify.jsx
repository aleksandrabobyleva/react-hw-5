import React from "react";
import Logo from "../assets/Logo.svg";
import Icons from "./Icons";
import styles from "./Spotify.module.css";

export default function Spotify() {
  return (
    <div>
      
        <img src={Logo} alt="Logo" className={styles.logo} />

       <div className={styles.container}>
       <h1 className={styles.title}>LIFE IS WASTED ON THE LIVING</h1>
        <p className={styles.signin}>
          Sign in <br /> with
        </p>
     
      <Icons />
       </div>
    </div>
  );
}
