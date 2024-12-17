"use server";

import next from "next";
const getTasks = async () => {
  let res = await fetch("http://localhost:3001/tasks", {
    next: {
      tags: ["tasks"],
    },
  });
  if (res.ok) {
    let data = await res.json();
    return data;
  } else {
    console.log(res.statusText);
  }
};

export default getTasks;
