// `pages/_app.js`
import '../styles/global.css';
import Typography from "typography";
import GithubTheme from "typography-theme-github";

// Copied from Gatsby blog: inject styles from Typography
GithubTheme.overrideThemeStyles = () => {
  return {
    h2: {
      borderBottom: `none`,
    },
  };
};
delete GithubTheme.googleFonts;
const typography = new Typography(GithubTheme);
typography.injectStyles();

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}