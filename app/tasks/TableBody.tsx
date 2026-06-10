import type { Task } from "~/types";
import { TableItem } from "./TableItem";

export function TableBody({ tasks }: { tasks: Task[] }) {
    return (
        <tbody>
            {tasks.map((task) => (
                <TableItem task={task} />
            ))}
        </tbody>
    );
}
