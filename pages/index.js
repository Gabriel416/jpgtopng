import { useEffect } from "react";
import firebase from "../libs/firebase";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import FileConversion from "../containers/FileConversion";

const Index = () => {
  useEffect(() => {
    document.getElementsByTagName("html")[0].setAttribute("lang", "en");
  }, []);

  return (
    <Layout>
      <Navbar />
      <FileConversion firebase={firebase} />
    </Layout>
  );
};

export default Index;
