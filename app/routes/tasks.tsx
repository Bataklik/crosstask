import { useState } from "react";
import type { Route } from "./+types/tasks";
import Tasks from "~/tasks/page";
import type { Task } from "~/types";
import type { RootState } from "~/redux/store";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { addTask, removeTask, toggleTask } from "~/redux/taskSlice";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "CrossTask" },
        { name: "description", content: "Welcome to CrossTask!" },
    ];
}

export default function TasksRoute() {
    const tasks = useAppSelector((state: RootState) => state.tasks);
    const dispatch = useAppDispatch();
    const [localTasks, setTasks] = useState<Task[]>([
        { id: "2", title: "Cleaning the bathroom", completed: false },
        { id: "1", title: "Cleaning the bedroom", completed: false },
    ]);

    const addTaskHandler = (title: string) => {
        if (title.trim() === "") {
            alert("Task title cannot be empty.");
            return;
        }
        dispatch(addTask(title));
    };
    const removeTaskHandler = (id: string) => {
        dispatch(removeTask(id));
    };
    const toggleTaskHandler = (id: string) => {
        dispatch(toggleTask(id));
    };
    return (
        <Tasks
            tasks={tasks}
            addTask={addTaskHandler}
            removeTask={removeTaskHandler}
            toggleTask={toggleTaskHandler}
        />
    );
}
