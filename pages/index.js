import firebase from "../libs/firebase";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import FileConversion from "../containers/FileConversion";

const Index = () => {
  return (
    <div>
      <Layout>
        <Navbar />
        <FileConversion firebase={firebase} />
      </Layout>
    </div>
  );
};

export default Index;
