import React from "react";
import { useState } from "react";

export default function Button({ text, func }) {
  return (
    <a
      onClick={func}
      className="text-xl hover:cursor-pointer px-5 py-3 border-2 border-black bg-white text-black hover:bg-black hover:text-white hover:border-white transition duration-100"
    >
      {text}
    </a>
  );
}
