import React from "react";

function SubmitButton({ val = "Submit", callback }) {
  return (
    <button
      onClick={callback}
      className="w-full mx-auto my-4 border-1 border-blue-800 hover:bg-blue-800 hover:text-white rounded p-2 text-blue-800"
      type={`${callback ? "button" : "submit"}`}
    >
      {val}
    </button>
  );
}

export default SubmitButton;
