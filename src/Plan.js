


import React from "react";
// import { useState } from "react";

const Plan = ({ props, value, handleDelete, id, i }) => {
  return (
    <div>
      <li className="shadow-lg  p-2 my-3 col-sm-9 "> {value}</li>
      <button
        className="btn btn-danger my-2 col-sm-2 offset-1"
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Plan;