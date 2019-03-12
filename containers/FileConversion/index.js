import { useState, useEffect, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import Upload from "../../components/Upload";
import SelectInput from "../../components/SelectInput";
import FileResult from "../../components/FileResult";

const FileConversion = ({ firebase }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "setFiles": {
        return {
          files: {
            ...state.files,
            [action.payload.id]: action.payload
          }
        };
      }

      case "updateFile": {
        state.files[action.payload.id] = {
          ...state.files[action.payload.id],
          ...action.payload
        };
        return {
          ...state
        };
      }

      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, { files: {} });
  const [fromFile, setFromFile] = useState("");
  const [toFile, setToFile] = useState("");

  useEffect(() => {
    const currentDomain = window.location.hostname;
    switch (currentDomain) {
      case "jpgtopng.co":
        setFromFile("JPG");
        setToFile("PNG");
        break;
      case "pngtojpg.co":
        setFromFile("PNG");
        setToFile("JPG");
        break;
      default:
        setFromFile("JPG");
        setToFile("PNG");
        break;
    }
  }, []);

  const processImage = fileMetaData => {
    const payload = JSON.stringify({
      imageData: fileMetaData,
      fromFile,
      toFile
    });

    return new Promise((resolve, reject) => {
      axios
        .post(process.env.FIREBASE_CLOUD_IMAGE_API, payload, {
          headers: { "Content-Type": "application/json" }
        })
        .then(({ data }) => {
          resolve(data[0].metadata);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  const renderResults = files => {
    return Object.keys(files).map(fileIndex => {
      const file = files[fileIndex];
      return <FileResult file={file} key={file.id} />;
    });
  };

  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  const onDrop = async (acceptedFiles, rejectedFiles) => {
    const storageRef = firebase.storage().ref();

    await asyncForEach(acceptedFiles, async file => {
      file.id = Date.now();
      const metaData = {
        contentType: file.type,
        size: file.size,
        lastModified: `${new Date(file.lastModified).toLocaleDateString(
          "en-US"
        )} ${new Date(file.lastModified).toLocaleTimeString("en-US")}`
      };

      const task = storageRef.child(file.name).put(file, metaData);

      task.on(
        "state_changed",
        snapshot => {
          let uploadPercentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          dispatch({
            type: "updateFile",
            payload: {
              ...file,
              uploadPercentage
            }
          });
        },
        err => {
          console.log(err, "err");
          dispatch({
            type: "updateFile",
            payload: {
              ...file,
              failed: true
            }
          });
        }
      );

      try {
        const { metadata } = await task;
        const processedImageData = await processImage(metadata);
        dispatch({
          type: "updateFile",
          payload: {
            ...file,
            name: processedImageData.name,
            size: processedImageData.size,
            downloadUrl: processedImageData.mediaLink
          }
        });
      } catch (error) {
        console.error(error);
        dispatch({
          type: "updateFile",
          payload: {
            ...file,
            failed: true
          }
        });
      }
    });
  };

  return (
    <main className="file-conversion-wrapper">
      <h1>
        Convert your {fromFile} to {toFile} files completely free.
      </h1>
      <h3>
        Simply upload your files below and wait for the file conversion to
        complete to download (up to 50mb per upload).
      </h3>
      <section>
        <Upload onDrop={onDrop} fromFile={fromFile} />
        <div className="file-picker-wrapper">
          <SelectInput selectedFile={fromFile} onSelect={setFromFile} />
          <p>
            <FontAwesomeIcon style={{ fontSize: "24px" }} icon={faArrowRight} />
          </p>
          <SelectInput selectedFile={toFile} onSelect={setToFile} />
        </div>
      </section>
      {Object.keys(state.files).length > 0 && renderResults(state.files)}
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

          h1 {
            font-size 1.4em;
          }

          h3 {
            font-size: 0.9em;
          }
        }
      `}</style>
    </main>
  );
};

export default FileConversion;
