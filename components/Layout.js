import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossOrigin="anonymous"
      />
    </Head>
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
    {children}
  </div>
);
