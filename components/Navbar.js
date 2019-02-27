export default () => {
  return (
    <nav>
      <div className="logo">hello world</div>
      <style jsx>{`
        nav {
          background: #ffffff;
          border-bottom: 1px solid #dfe5eb;
          height: 48px;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          margin: 0;
          display: -ms-flexbox;
          display: flex;
          z-index: 9999991;
          -ms-flex-align: center;
          align-items: center;
          -ms-flex-pack: justify;
          justify-content: space-between;
          padding: 0;
        }
        .logo {
          display: -ms-flexbox;
          display: flex;
          -ms-flex-direction: row;
          flex-direction: row;
          width: 84px;
          -ms-flex-pack: center;
          justify-content: center;
          -ms-flex-align: center;
          align-items: center;
          height: 100%;
          border-right: 1px solid #dfe5eb;
          border-right: none;
        }
      `}</style>
    </nav>
  );
};
