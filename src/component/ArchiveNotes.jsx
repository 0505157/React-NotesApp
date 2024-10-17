import React from "react";

const ArchiveNotes = ({ children }) => {
  return (
    <div className="flex font-card card card-body mx-auto w-9/12 bg-slate-600 max-sm:mt-4">
      {children}
    </div>
  );
};

export default ArchiveNotes;
