import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import FileConversion from "../containers/FileConversion";

export default () => {
  return (
    <div>
      <Layout>
        <Navbar />
        <FileConversion />
      </Layout>
    </div>
  );
};
