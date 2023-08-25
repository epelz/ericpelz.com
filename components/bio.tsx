import Image from "next/image";
import styles from "./bio.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Bio() {
  return (
    <section className={`${utilStyles.headingMd} ${styles.bio}`}>
      <span className={styles.avatar}>
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={50}
          width={50}
          alt=""
        />
      </span>
      <small>
        Hello! I work at <a href="https://www.asana.com/">Asana</a>, where
        I&apos;m the tech lead across our AI initiatives.
      </small>
    </section>
  );
}
