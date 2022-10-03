import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from './date';

export default function PostSection({ sectionTitle, postsData, children}) {
    return (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>{sectionTitle}</h2>
        <ul className={utilStyles.list}>
        {postsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
                <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
                <Date dateString={date} />
            </small>
            </li>
        ))}
        </ul>
        {children}
        </section>
    );
}
