import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import Dropzone from "react-dropzone";
import Modal from "react-responsive-modal";
import classnames from "classnames";

const Upload = ({ onDrop, fromFile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const acceptedFileTypes =
    fromFile === "JPG" ? "image/jpg, image/jpeg" : "image/x-png, image/png";

  const dropRejected = rejectedFiles => {
    let errorMessage = "";
    rejectedFiles.forEach(rejectedFile => {
      errorMessage += `${rejectedFile.name}, `;
    });

    errorMessage +=
      "have been rejected because it did not match the correct to file format.";
    setModalMessage(errorMessage);
    setIsOpen(true);
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          setModalMessage("");
        }}
        center
      >
        <h2 style={{ color: "#fd6f46" }}>Error</h2>
        <p style={{ lineHeight: "22px" }}>{modalMessage}</p>
      </Modal>
      <Dropzone
        onDrop={e => onDrop(e)}
        onDropRejected={e => dropRejected(e)}
        maxSize={50457280}
        accept={acceptedFileTypes}
        multiple={true}
      >
        {({ getRootProps, getInputProps, isDragActive }) => {
          return (
            <div
              {...getRootProps()}
              className={classnames("dropzone", {
                "dropzone--isActive": isDragActive
              })}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <div className="dropzone-content">
                  <FontAwesomeIcon
                    style={{ fontSize: "72px", color: "#ccc" }}
                    icon={faFileUpload}
                  />
                  <p>Drop files here...</p>
                </div>
              ) : (
                <div className="dropzone-content">
                  <FontAwesomeIcon
                    style={{ fontSize: "72px", color: "#ccc" }}
                    icon={faFileUpload}
                  />
                  <p>
                    Drag and drop your file(s) here,{" "}
                    <span>or click to browse.</span>
                  </p>
                </div>
              )}

              <style jsx>{`
                .dropzone {
                  cursor: pointer;
                  height: 150px;
                  margin: 0px auto 25px auto;
                  border: 6px dashed #ccc;
                  border-radius: 5px;
                  padding: 10px;
                  transition: 0.3s ease;
                }

                .dropzone-content {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-direction: column;
                  padding: 10px;
                }

                .dropzone-content p {
                  font-size: 18px;
                  margin-top: 25px;
                }

                span {
                  text-decoration: underline;
                  color: blue;
                }

                .dropzone:hover,
                .dropzone--isActive {
                  border-color: #c1e4fe;
                }

                @media screen and (max-width: 580px) {
                  .dropzone-content p {
                    font-size: 14px;
                    margin-top: 25px;
                  }
                }

                @media screen and (max-width: 450px) {
                  .dropzone-content p {
                    font-size: 16px;
                    margin-top: 25px;
                  }
                }
              `}</style>
            </div>
          );
        }}
      </Dropzone>
    </div>
  );
};

export default Upload;
