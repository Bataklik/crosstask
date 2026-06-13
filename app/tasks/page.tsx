import { useState } from "react";
import { TaskHeader } from "./TaskHeader";
import { NewTask } from "./NewTask";
import { TaskList } from "./TaskList";
import type { Route } from "../+types/root";
import type { Task } from "~/types";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Tasks({
    tasks,
    addTask,
    removeTask,
    toggleTask,
}: {
    tasks: Task[];
    addTask: (title: string) => void;
    removeTask: (id: string) => void;
    toggleTask: (id: string) => void;
}) {
    const [task, setTask] = useState<string>("");

    return (
        <div className="mx-12 h-screen">
            {/* Header */}
            <TaskHeader />
            {/* Add new Task  */}
            <NewTask task={task} setTask={setTask} addTask={addTask} />
            {/* List of Tasks */}
            <TaskList
                tasks={tasks}
                removeTask={removeTask}
                toggleTask={toggleTask}
            />
        </div>
    );
}
