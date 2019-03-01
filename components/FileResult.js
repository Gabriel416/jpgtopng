export default ({ file }) => {
  console.log(file, "FILE IN RENDER HERERERERER");
  return (
    <div>
      <section className="file-result-wrapper">{file.name}</section>
      <style jsx>{`
        .file-result-wrapper {
          padding: 20px;
          margin: 20px 0px;
          border-radius: 5px;
          border: 2px solid rgba(56, 153, 236, 0);
          box-shadow: rgba(22, 45, 61, 0.1) 0px 1px 2px 0px;
          background-color: #ffffff;
        }

        @media screen and (max-width: 500px) {
          .file-result-wrapper {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
};
