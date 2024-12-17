"use server";

import { revalidateTag } from "next/cache";

const deleteTask = async (currentState, formData) => {
  const id = formData.get("id");
  const res = await fetch("http://localhost:3001/tasks/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "Application/json",
    },
  });
  if (res.ok) {
    revalidateTag("tasks");
  } else {
    console.log(res.statusText);
  }
};
export default deleteTask;
