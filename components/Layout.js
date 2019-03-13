import { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import ReactGA from "react-ga";

const Layout = ({ children }) => {
  useEffect(() => {
    ReactGA.initialize(
      [
        {
          trackingId: "UA-108879520-2",
          gaOptions: {
            name: "jpgtopng"
          }
        },
        {
          trackingId: "UA-108879520-3",
          gaOptions: { name: "pngtojpg" }
        }
      ],
      { debug: false, alwaysSendToDefaultTracker: false }
    );
    ReactGA.pageview(window.location.pathname + window.location.search, [
      "jpgtopng",
      "pngtojpg"
    ]);
  }, []);
  return (
    <div className="app-wrapper">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="google-site-verification"
          content="scLHat7SgnqWjlDdhQR0_u0VjSNw9lFncYK_DefGjRQ"
        />
        <meta
          name="Description"
          content="Convert your images from JPG to PNG or vice versa completely free."
        />
        <meta property="og:title" content="Convert JPG to PNG for Free/>" />
        <meta
          property="og:description"
          content="Convert your images from JPG to PNG or vice versa completely free."
        />
        <meta property="og:type" content="website" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/static/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>Convert JPG to PNG Free</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossOrigin="anonymous"
        />
      </Head>
      {children}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background-color: #f3f6f9;
          color: #162d3d;
          font-family: "Lato", "Lucida Grande", "Lucida Sans Unicode", "Tahoma",
            "Sans-Serif";
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Layout;
