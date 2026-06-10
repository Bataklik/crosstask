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
        { id: 2, title: "Cleaning the bathroom", completed: false },
        { id: 1, title: "Cleaning the bedroom", completed: false },
    ]);
    const [task, setTask] = useState<null | string>(null);
    const addTaskHandler = (newTask: string | null) => {
        if (newTask == null) return;
        let newTaskId = tasks.sort((a, b) => b.id - a.id)[0].id + 1;
        tasks.push({ id: newTaskId, title: newTask, completed: false });
        console.log(tasks);
    };
    const removeTaskHandler = (taskId: number) => {};
    const toggleTaskHandler = (taskId: number) => {
        let newTasks = tasks.map((_task) =>
            _task.id != taskId
                ? _task
                : {
                      id: _task.id,
                      title: _task.title,
                      completed: !_task.completed,
                  },
        );
        setTasks(newTasks);
    };
    return (
        <div className="mx-12 h-screen">
            {/* Header */}
            <TaskHeader />
            {/* Add new Task  */}
            <NewTask task={task} setTask={setTask} addTask={addTaskHandler} />
            {/* List of Tasks */}
            <TaskList
                tasks={tasks}
                removeTask={removeTaskHandler}
                toggleTask={toggleTaskHandler}
            />
        </div>
    );
}
