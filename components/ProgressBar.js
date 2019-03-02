import classnames from "classnames";

export default ({ file }) => {
  console.log(file, "file herererere");

  const statusText = () => {
    if (file.failed) {
      return "Error occurred when processing file.";
    } else if (file.uploadPercentage < 100) {
      return `Uploading... ${file.uploadPercentage}%`;
    } else if (!file.downloadUrl) {
      return "Processing...";
    } else {
      return `Finished ${file.uploadPercentage}%`;
    }
  };
  return (
    <div className="progress-bar-wrapper">
      <div className="loader-wrapper">
        <div className="loader">
          <div
            className={classnames(
              "progress-bar",
              file.failed ? "error" : "success"
            )}
          />
        </div>
        <p className="status-text">{statusText()}</p>
      </div>
      {file.downloadUrl && (
        <div className="file-preview-wrapper">
          <div className="image-preview">
            <img src={file.downloadUrl} alt="preview image" />
          </div>
          <span>
            {file.name}
            <hr />
            {`${(file.size / 1000).toFixed(2)}KB`}
          </span>
          <a download href={file.downloadUrl}>
            Download
          </a>
        </div>
      )}

      <style jsx>{`
        .progress-bar-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          width: 100%;
        }

        .loader-wrapper {
          width: 50%;
        }

        .status-text {
          text-align: center;
          margin: 2px 0px;
        }

        .loader {
          height: 25px;
          border-radius: 14px;
          background: #ccc;
          overflow: hidden;
          position: relative;
        }

        .file-preview-wrapper {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          width: 40%;
        }

        .image-preview {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }

        .image-preview img {
          height: 60px;
          width: 60px;
        }

        .success {
          background: repeating-linear-gradient(
            45deg,
            rgb(46, 204, 113),
            rgb(46, 204, 113) 10px,
            rgba(46, 204, 113, 0.7) 10px,
            rgba(46, 204, 113, 0.7) 20px
          );
        }

        .error {
          background: repeating-linear-gradient(
            45deg,
            rgb(192, 57, 43),
            rgb(192, 57, 43) 10px,
            rgba(192, 57, 43, 0.8) 10px,
            rgb(192, 57, 43, 0.8) 20px
          );
        }

        .progress-bar {
          width: ${file.uploadPercentage}%;
          height: 25px;
          border-radius: 14px;
          overflow: hidden;
        }

        @media screen and (max-width: 700px) {
          .loader-wrapper {
            width: 40%;
          }

          .file-preview-wrapper {
            width: 50%;
          }

          .image-preview img {
            display: none;
          }
        }

        @media screen and (max-width: 500px) {
          .progress-bar-wrapper {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};
