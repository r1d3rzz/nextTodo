import React from "react";
import DeleteTaskForm from "./DeleteTaskForm";

const SingleTask = ({ task: { id, title, isComplete } }) => {
  return (
    <div className="flex justify-between items-center border-white border px-5 py-2 last:mb-0 mb-5">
      <div>{title}</div>
      <div>
        <DeleteTaskForm id={id} />
      </div>
    </div>
  );
};

export default SingleTask;
