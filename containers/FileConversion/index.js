import { useState, useEffect, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faExpandArrowsAlt
} from "@fortawesome/free-solid-svg-icons";
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
      case currentDomain:
        setFromFile("JPG");
        setToFile("PNG");
        break;

      default:
        break;
    }
  }, []);

  const processImage = async (fileMetaData, originalFile) => {
    // process.env.FIREBASE_CLOUD_IMAGE_API
    // http://localhost:5000/file-converter-bddf8/us-central1/processImage
    const payload = JSON.stringify({
      imageData: fileMetaData,
      fromFile,
      toFile
    });

    try {
      const { data } = await axios.post(
        "http://localhost:5000/file-converter-bddf8/us-central1/processImage",
        payload,
        {
          headers: { "Content-Type": "application/json" }
        }
      );
      console.log("HIT 2");
      return data[0].metadata;
    } catch (err) {
      // return err;
      throw new Error(err);
    }
  };

  const renderResults = files => {
    return Object.keys(files).map(fileIndex => {
      const file = files[fileIndex];
      return <FileResult file={file} key={file.id} />;
    });
  };

  const onDrop = (acceptedFiles, rejectedFiles) => {
    const storageRef = firebase.storage().ref();
    acceptedFiles.forEach(file => {
      console.log(file, "FILE");
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
          console.log(uploadPercentage, "HIT 1");
          dispatch({
            type: "updateFile",
            payload: {
              ...file,
              uploadPercentage
            }
          });
        },
        () => {
          dispatch({
            type: "updateFile",
            payload: {
              ...file,
              failed: true
            }
          });
        },
        () => {
          // succesful upload
          task.snapshot.ref
            .getMetadata()
            .then(metadata => processImage(metadata, file))
            .then(processedImageData => {
              dispatch({
                type: "updateFile",
                payload: {
                  ...file,
                  name: processedImageData.name,
                  size: processedImageData.size,
                  downloadUrl: processedImageData.mediaLink
                }
              });

              console.log("HIT 3, URL");
            })
            .catch(err => {
              dispatch({
                type: "updateFile",
                payload: {
                  ...file,
                  failed: true
                }
              });
            });
        }
      );
    });
  };

  return (
    <main className="file-conversion-wrapper">
      <h1>File Conversion App</h1>
      <section>
        <Upload onDrop={onDrop} />
        <div>file types here</div>
        <div className="file-picker-wrapper">
          <SelectInput selectedFile={fromFile} onSelect={setFromFile} />
          <p>
            <FontAwesomeIcon style={{ fontSize: "24px" }} icon={faArrowRight} />
          </p>
          <SelectInput selectedFile={toFile} onSelect={setToFile} />
        </div>
        {/* <div>download here</div> */}
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
        }
      `}</style>
    </main>
  );
};

export default FileConversion;
