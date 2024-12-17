"use client";

import deleteTask from "@/actions/deleteTask";
import React, { useActionState } from "react";

const DeleteTaskForm = ({ id }) => {
  const [state, formAction, isPending] = useActionState(deleteTask);
  return (
    <div>
      <form action={formAction}>
        <input type="text" className="hidden" name="id" defaultValue={id} />
        <button type="submit">{isPending ? "Deleting..." : "Delete"}</button>
      </form>
    </div>
  );
};

export default DeleteTaskForm;
