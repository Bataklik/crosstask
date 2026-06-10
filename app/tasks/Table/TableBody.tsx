import type { Task } from "~/types";
import { TableItem } from "./TableItem";

interface TableBodyProps {
    tasks: Task[];
    toggleTask: (taskId: number) => void;
}

export function TableBody({ tasks, toggleTask }: TableBodyProps) {
    return (
        <tbody>
            {tasks.map((task) => (
                <TableItem key={task.id} task={task} toggleTask={toggleTask} />
            ))}
        </tbody>
    );
}
