import React from "react";

const Header = (props) => {
  const { expression, result } = props;
  return (
    <div className="text-2xl text-white pt-20">
      <div>{expression}</div>
      <div>{result}</div>
    </div>
  );
};

export default Header;
