import type { Task } from "~/types";
import { TableItem } from "./TableItem";

interface TableBodyProps {
    tasks: Task[];
    toggleTask: (id: string) => void;
    removeTask: (id: string) => void;
}

export function TableBody({ tasks, removeTask, toggleTask }: TableBodyProps) {
    return (
        <tbody>
            {tasks.map((task) => (
                <TableItem
                    key={task.id}
                    task={task}
                    removeTask={removeTask}
                    toggleTask={toggleTask}
                />
            ))}
        </tbody>
    );
}
