import { useState } from "react";
import type { Route } from "./+types/tasks";
import Tasks from "~/tasks/page";
import type { Task } from "~/types";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "CrossTask" },
        { name: "description", content: "Welcome to CrossTask!" },
    ];
}

export default function TasksRoute() {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 2, title: "Cleaning the bathroom", completed: false },
        { id: 1, title: "Cleaning the bedroom", completed: false },
    ]);
    return <Tasks tasks={tasks} setTasks={setTasks} />;
}
