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
          background-color: #ecf0f1;
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
            font-weight: 200;
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
            align-items: center;
            background-color: #ecf0f1;
            justify-content: spece-evenly;
          }
        }
        ${isOpen ? `:global(body) { overflow: hidden; } ` : ``}
      `}</style>
      {children}
    </div>
  );
};

export default Drawer;
