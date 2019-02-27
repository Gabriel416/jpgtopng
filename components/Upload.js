import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import Dropzone from "react-dropzone";
import classnames from "classnames";

export default ({ onDrop }) => {
  return (
    <Dropzone onDrop={onDrop}>
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
              <p>Drop files here...</p>
            ) : (
              <div className="dropzone-content">
                <FontAwesomeIcon
                  style={{ fontSize: "72px", color: "#e6e7e8" }}
                  icon={faFileUpload}
                />
                <p>
                  Drag and drop your file(s) here,{" "}
                  <span>or click to browse</span>
                </p>
              </div>
            )}

            <style jsx>{`
              .dropzone {
                cursor: pointer;
                height: 150px;
                margin: 0 auto;
                border: 6px dashed #e6e7e8;
                border-radius: 5px;
                padding: 10px;
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
            `}</style>
          </div>
        );
      }}
    </Dropzone>
  );
};
