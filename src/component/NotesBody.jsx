import React from "react";

const NotesBody = ({ desc }) => {
  return (
    <>
      <p className="text-black font-content text-wrap max-sm:overflow-hidden text-ellipsis">
        {desc}
      </p>
    </>
  );
};

export default NotesBody;
