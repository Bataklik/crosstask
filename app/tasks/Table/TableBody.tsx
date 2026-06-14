import type { Task } from "~/types";
import { TableItem } from "./TableItem";

interface TableBodyProps {
    tasks: Task[];
    toggleTask: (id: string) => void;
    removeTask: (id: string) => void;
}

export function TableBody({ tasks, removeTask, toggleTask }: TableBodyProps) {
    return (
        <tbody className="divide-y divide-purple-700">
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
