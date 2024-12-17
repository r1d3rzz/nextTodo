"use client";

import createTask from "@/actions/createTask";
import React, { useActionState } from "react";

const CreateTaskForm = () => {
  const [state, formAction, isPending] = useActionState(createTask);
  return (
    <div className="my-5">
      <form action={formAction}>
        <div className="flex">
          <input
            type="text"
            name="title"
            id="title"
            className="border px-3 py-2 w-full text-black outline-none"
            required
            placeholder="Type your new task here..."
          />
          <button type="submit" className="bg-blue-700 px-5 py-2">
            {isPending ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTaskForm;
