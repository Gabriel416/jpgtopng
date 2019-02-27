import { useState } from "react";
import Upload from "../../components/Upload";
import SelectInput from "../../components/SelectInput";

export default () => {
  const [files, setFiles] = useState([]);
  const [fromFile, setFromFile] = useState(null);
  const [toFile, setToFile] = useState(null);
  const onDrop = (acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles, "accepted files");
    setFiles(acceptedFiles);
    // Do something with files
  };

  return (
    <main className="file-conversion-wrapper">
      <h1>File Conversion App</h1>
      <section>
        <div>dropzone here</div>

        <Upload onDrop={onDrop} />
        <div>file types here</div>
        <SelectInput onSelect={setFromFile} />
        <SelectInput onSelect={setToFile} />
        <div>download here</div>
      </section>
      <style jsx>{`
        main {
          margin: 70px auto;
          width: 80%;
        }

        section {
          padding: 20px;
          border-radius: 5px;
          border: 2px solid rgba(56, 153, 236, 0);
          box-shadow: rgba(22, 45, 61, 0.1) 0px 1px 2px 0px;
          background-color: #ffffff;
        }
      `}</style>
    </main>
  );
};
