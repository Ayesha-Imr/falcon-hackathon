// pages/_app.js
import '../app/globals.css'; // Import global CSS (if any)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
