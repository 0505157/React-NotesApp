import React from "react";

const Header = () => {
  return (
    <>
      <header className="flex justify-around py-5 bg-gray-700 content-center">
        <h1 className="text-4xl font-extrabold font-title align-middle text-slate-200">
          NOTES APP
        </h1>
        <input
          type="text"
          placeholder="Cari Catatan"
          className="input input-bordered rounded-full w-full max-w-xs bg-slate-300 placeholder-black hover:bg-transparent hover:placeholder-slate-300 hover:border-slate-300 max-sm:w-40"
        />
      </header>
    </>
  );
};

export default Header;
