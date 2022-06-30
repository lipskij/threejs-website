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
          transform: translateX(-100%);
          transition: transform 300ms;
          z-index: 2;
        }
        .isOpen {
          transform: translateY(0);
        }
        ${isOpen ? `:global(body) { overflow: hidden; } ` : ``}
      `}</style>
      {children}
    </div>
  );
};

export default Drawer;
