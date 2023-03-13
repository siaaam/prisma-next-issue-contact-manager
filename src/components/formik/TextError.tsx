import React from "react";

const TextError = (props: any) => {
  return <div className="text-red-600 mb-2 mt-1">{props.children}</div>;
};

export default TextError;
