import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Upload from "../../components/Upload";
import SelectInput from "../../components/SelectInput";
import FinishedFile from "../../components/FinishedFile";

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
        <Upload onDrop={onDrop} />
        <div>file types here</div>
        <div className="file-picker-wrapper">
          <SelectInput onSelect={setFromFile} />
          <p>
            <FontAwesomeIcon style={{ fontSize: "24px" }} icon={faArrowRight} />
          </p>
          <SelectInput onSelect={setToFile} />
        </div>
        <div>download here</div>
      </section>
      <style jsx>{`
        main {
          margin: 70px auto;
          padding: 0 10px;
          max-width: 800px;
        }

        section {
          padding: 20px;
          border-radius: 5px;
          border: 2px solid rgba(56, 153, 236, 0);
          box-shadow: rgba(22, 45, 61, 0.1) 0px 1px 2px 0px;
          background-color: #ffffff;
        }

        .file-picker-wrapper {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }

        @media screen and (max-width: 500px) {
          section {
            padding: 15px;
          }
        }
      `}</style>
    </main>
  );
};
