import Head from 'next/head';
import Image from 'next/image';
// import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Bio({ children }) {
    return (
        <section className={utilStyles.headingMd}>
        <p>
        I'm a software engineer at{" "}
        <a href="https://www.asana.com/">Asana</a>. I'm the tech lead of
        the Workflow Pillar, which has three main areas of focus: enabling
        Asana customers to orchestrate end-to-end workflows, connect & automate
        with their favorite tools, and expand Asana by building on top of the
        Asana developer platform.
        </p>
        { children }
        </section>
    );
};
