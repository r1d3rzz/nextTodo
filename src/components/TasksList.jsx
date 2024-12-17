"use server";

import React from "react";
import SingleTask from "./SingleTask";
import getTasks from "@/actions/getTasks";

const TasksList = async () => {
  const tasks = await getTasks();
  return (
    <div>
      {tasks.map((task) => (
        <SingleTask key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;
