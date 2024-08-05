import React from "react";
import { useState } from "react";
import Button from "./button.jsx";

export default function Item({ task, isActive, toggleActive, id, del }) {
  return (
    <li className="w-2/5 max-xl:w-4/5 max-md:w-full text-xl text-black font-semibold px-5 py-3 bg-white flex justify-between items-center">
      {isActive === true ? <span>{task}</span> : <s>{task}</s>}

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id={"toggleActive" + id.toString()}
          name={"toggleActive" + id.toString()}
          onClick={() => {
            toggleActive(id);
          }}
        />
        <div className="my-3 font-medium">
          <Button
            text="delete"
            func={() => {
              del(id);
            }}
          />
        </div>
      </div>
    </li>
  );
}
