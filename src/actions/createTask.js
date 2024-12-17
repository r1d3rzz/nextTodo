"use server";

import { revalidateTag } from "next/cache";

const createTask = async (currentState, formData) => {
  let res = await fetch("http://localhost:3001/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({
      title: formData.get("title"),
      isComplete: false,
      createdAt: new Date().toISOString(),
    }),
  });
  if (res.ok) {
    let data = await res.json();
    revalidateTag("tasks");
    return data;
  } else {
    console.log(res.statusText);
  }
};

export default createTask;
