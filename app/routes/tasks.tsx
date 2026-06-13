import type { Route } from "./+types/tasks";
import Tasks from "~/tasks/page";
import { useTaskService } from "~/services/taskService";
export function meta({}: Route.MetaArgs) {
    return [
        { title: "CrossTask: ToDo app" },
        { name: "description", content: "Welcome to CrossTask!" },
    ];
}

export default function TasksRoute() {
    const { tasks, addTaskHandler, removeTaskHandler, toggleTaskHandler } =
        useTaskService();

    return (
        <Tasks
            tasks={tasks}
            addTask={(title: string) => addTaskHandler(title)}
            removeTask={(id: string) => removeTaskHandler(id)}
            toggleTask={(id: string) => toggleTaskHandler(id)}
        />
    );
}
