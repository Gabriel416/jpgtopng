import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import Dropzone from "react-dropzone";
import classnames from "classnames";

const Upload = ({ onDrop }) => {
  const acceptedFileTypes =
    "image/x-png, image/png, image/jpg, image/jpeg, image/gif";
  return (
    <Dropzone
      onDrop={e => onDrop(e)}
      maxSize={31457280}
      accept={acceptedFileTypes}
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
                margin: 0 auto;
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
                color: #3899ec;
              }

              .dropzone:hover,
              .dropzone--isActive {
                border-color: #c1e4fe;
              }
            `}</style>
          </div>
        );
      }}
    </Dropzone>
  );
};

export default Upload;
