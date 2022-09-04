import React from "react";

function ImagePicker({ title }) {
  return (
    <div>
      <div className="flex flex-row space-x-2 mt-4">
        <h6 className="text-lg  font-semibold mt-1">{title}</h6>
        <button className="space-x-2 flex w-fit px-5 bg-violet-900 text-white h-10 rounded-md justify-center items-center">
          Choose file
        </button>
        <button className="space-x-2 flex w-fit px-5 bg-rose-500 text-white h-10 rounded-md justify-center items-center">
          Remove files
        </button>
      </div>
      <div className="w-32 h-20 mt-2 border" />
    </div>
  );
}

export default ImagePicker;
