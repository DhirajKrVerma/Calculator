import React from "react";
import { keydata, symbolData } from "./KeyData";
const KeyPad = (props) => {
  const { handleKeyDown } = props;
  console.log("keydata", keydata);
  return (
    <div className="flex p-5">
      <div className="flex flex-wrap w-60">
        {keydata.map((item, index) => (
          <div
          onClick={() => handleKeyDown(item.keycode, item.label)}
            key={index}
            className=" cursor-pointer hover:opacity-70 flex-1 p-4 text-2xl bg-blue-600 text-center text-white m-2 rounded-2xl shadow-lg"
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="w-20">
        {symbolData.map((item, index) => (
          <div
            key={index}
            onClick={() => handleKeyDown(item.keycode, item.value)}
            className="p-3 text-2xl bg-blue-600 text-center text-white m-2 rounded-2xl shadow-lg"
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyPad;
