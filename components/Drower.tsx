import React from "react";

interface DrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  className: string;
}

const Drawer: React.FC<DrawerProps> = ({
  children,
  isOpen,
  className = "",
}) => {
  return (
    <div className={`root ${className} ${isOpen ? "isOpen" : ""}`}>
      <style jsx>{`
        .root {
          background-color: #141b1e;
          position: absolute;
          width: 100vw;
          height: 100vh;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          transform: translateY(-100%);
          transition: transform 300ms;
          z-index: 2;
        }
        .isOpen {
          transform: translateY(0);
        }
        @media (max-width: 480px) {
          .root {
            font-weight: 900;
            font-size: 3rem;
            display: flex;
            flex-direction: column;
            height: 100vh;
            width: 100%;
            text-align: center;
            margin: 0 auto;
          }
          .isOpen ul {
            width: 100%;
            display: flex;
            height: 80%;
            align-items: center;
            background-color: #141b1e;
            line-height: 3;
            justify-content: center;
          }
        }
        ${isOpen ? `:global(body) { overflow: hidden; } ` : ``}
      `}</style>
      {children}
    </div>
  );
};

export default Drawer;
