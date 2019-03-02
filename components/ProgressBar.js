export default ({ file }) => {
  console.log(file, "FILE");
  return (
    <div>
      <div className="loader">
        <div className="progress-bar success" />
      </div>
      <p>
        {file.uploadPercentage < 100 || !file.downloadUrl
          ? `Loading... ${file.uploadPercentage}%`
          : `Finished ${file.uploadPercentage}%`}
      </p>
      {file.downloadUrl && <img src={file.downloadUrl} alt="preview image" />}

      <a download href={file.downloadUrl}>
        Download
      </a>
      <style jsx>{`
        .loader {
          width: 60%;
          height: 25px;
          border-radius: 14px;
          background: #ccc;
          overflow: hidden;
          position: relative;
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
            rgba(192, 57, 43, 0, 7) 10px,
            rgba(192, 57, 43, 0.7) 20px
          );
        }

        .progress-bar {
          width: ${file.uploadPercentage}%;
          height: 25px;
          border-radius: 14px;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};
// #2ecc71
