import React from "react";

const NotesHeader = ({ title, date }) => {
  return (
    <>
      <h3 className="font-bold font-content text-black">{title}</h3>
      <h6 className="text-gray-600">{date}</h6>
    </>
  );
};

export default NotesHeader;
