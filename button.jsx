// write button card here
// src/components/button.jsx
import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-700">
      {text}
    </button>
  );
};

export default Button;
