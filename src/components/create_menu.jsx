import React from "react";
import { useState } from "react";
import Button from "./button";

export default function CreateMenu({ isOpen, create }) {
  let [text, changeText] = useState("");
  return isOpen ? (
    <div className="w-screen h-screen flex justify-center items-center absolute top-0 left-0">
      <div className="z-50 bg-black border-white border-2 px-10 py-7 w-1/4 max-lg:w-[50vw] max-md:w-[70vw] max-sm:w-[90vw] h-1/4 flex justify-center items-center flex-col gap-5">
        <input
          type="text"
          className="input"
          name="task"
          placeholder="task"
          value={text}
          onChange={(el) => changeText(el.target.value)}
        />
        <Button
          text="create"
          func={() => {
            create(text);
            changeText("");
          }}
        />
      </div>
    </div>
  ) : (
    <div></div>
  );
}
