import React from "react";

function form({label}) {
  return (
    <>
      <fieldset className="flex-col flex">
        <label htmlFor="" className="pb-2 pt-3">
          {label}
        </label>
        <input type="text" className="border-2 py-2 border-slate-700" />
      </fieldset>
    </>
  );
}

export default form;
