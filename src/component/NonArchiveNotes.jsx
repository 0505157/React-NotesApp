import React from "react";

const NonArchiveNotes = ({ children }) => {
  return (
    <div className="flex font-card card card-body mx-auto w-9/12 mt-5 bg-slate-600 max-sm:mt-5">
      {children}
    </div>
  );
};

export default NonArchiveNotes;
