import CreateTaskForm from "@/components/CreateTaskForm";
import React, { lazy, Suspense } from "react";

const TasksList = lazy(() => import("@/components/TasksList"));
const Home = () => {
  return (
    <div className="max-w-[400px] mx-auto my-5">
      <h1 className="text-2xl">Next Todo</h1>
      <CreateTaskForm />
      <Suspense fallback={"Loading..."}>
        <TasksList />
      </Suspense>
    </div>
  );
};

export default Home;
