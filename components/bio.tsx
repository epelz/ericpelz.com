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
        Hello! I&apos;m a software engineer at{" "}
        <a href="https://www.asana.com/">Asana</a>. I&apos;m the tech lead of
        the Workflow Pillar, which has three main areas of focus: enabling Asana
        customers to orchestrate end-to-end workflows, connect & automate with
        their favorite tools, and expand Asana by building on top of the Asana
        developer platform.
      </small>
    </section>
  );
}
