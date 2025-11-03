import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero =() => {
    return <section className={styles.container}>
        <img src={getImageUrl("hero/heroImage.png")} alt="HeroImage" className={styles.heroImg}/>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Huiting</h1>
            <p className={styles.description}>I’m a detail-oriented software developer skilled in object oriented programming, web development, and test automation. Don’t hesitate to reach out if you would like to learn more about me.</p>
            <a href="mailto:hhtbetty@outlook.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        
        </section>
};