// `pages/_app.js`
import "../styles/global.css";
import Typography from "typography";
import GithubTheme from "typography-theme-github";
import { AppProps } from "next/app";

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

// Syntax highlighting theme, for posts with code blocks
import "highlight.js/styles/mono-blue.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
