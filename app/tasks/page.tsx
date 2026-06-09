import React, { useState } from "react";
import type { Route } from "../+types/root";
import { TaskHeader } from "./TaskHeader";
import { NewTask } from "./NewTask";
import { TaskList } from "./TaskList";
import type { Task } from "~/types";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Tasks() {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: "Cleaning the bathroom", completed: false },
    ]);
    const [task, setTask] = useState<null | string>(null);

    const addTaskHandler = (newTask: string | null) => {};
    return (
        <div className="mx-12 h-screen">
            {/* Header */}
            <TaskHeader />
            {/* Add new Task  */}
            <NewTask task={task} setTask={setTask} addTask={addTaskHandler} />
            {/* List of Tasks */}
            <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
    );
}
