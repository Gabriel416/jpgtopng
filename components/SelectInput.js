export default ({ onSelect }) => {
  return (
    <div>
      <select
        className="cs-select cs-skin-elastic"
        onChange={e => onSelect(e.target.value)}
      >
        <option value="JPG">JPG</option>
        <option value="PNG">PNG</option>
      </select>
      <style jsx>{`
        select {
          background #ffffff;
          border: 2px solid #C1E4FE;
          border-radius: 6px;
          height: 50px;
          width: 300px;
          padding: 0px 10px;
          font-size: 20px;
          cursor: pointer;
        }

        @media screen and (max-width: 700px) {
          select {
            width: 200px;
            height: 40px;
            font-size: 18px;
          }
        }

        @media screen and (max-width: 480px) {
          select {
            width: 115px;
          }
        }
      `}</style>
    </div>
  );
};
