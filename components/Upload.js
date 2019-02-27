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
                <i class="fas fa-file-upload" />
                <p>
                  Drag and drop your file(s) here, <span>or browse</span>
                </p>
              </div>
            )}

            <style jsx>{`
              .dropzone {
                cursor: pointer;
                height: 150px;
                margin: 0 auto;
                border: 3.5px dashed #eef0f5;
                border-radius: 5px;
                padding: 10px;
              }

              .dropzone-content {
                display: flex;
                justify-content: center;
              }

              .dropzone-content p {
                font-size: 18px;
              }

              .fa-file-upload {
                font-size: 72px;
                color: #eef0f5;
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
