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
    setTasks,
}: {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) {
    const [task, setTask] = useState<string>("");
    const addTaskHandler = (newTask: string) => {
        if (newTask == "") {
            alert("Task title cannot be empty");
            return;
        }
        let newTaskId: number =
            tasks.length == 0 ? 1 : tasks.sort((a, b) => b.id - a.id)[0].id + 1;

        tasks.push({ id: newTaskId, title: newTask, completed: false });
        setTask("");
    };
    const removeTaskHandler = (taskId: number) => {
        setTasks(tasks.filter((_task) => (_task.id != taskId ? _task : null)));
    };
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
