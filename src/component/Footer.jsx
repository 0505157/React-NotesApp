import React from "react";

const Footer = ({ name }) => {
  return (
    <>
      <footer className="bottom-0 bg-gray-700 mt-5">
        <p className="text-lg text-center">©Copyright {name}</p>
      </footer>
    </>
  );
};

export default Footer;
