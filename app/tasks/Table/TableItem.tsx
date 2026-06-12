import { TrashIcon } from "~/icons/TrashIcon";
import type { Task } from "~/types";

interface TableItemProps {
    task: Task;
    removeTask: (taskId: string) => void;
    toggleTask: (taskId: string) => void;
}

export function TableItem({ task, removeTask, toggleTask }: TableItemProps) {
    return (
        <tr className="border-b-2 border-purple-700">
            <td className="py-8 text-center ">
                <p>{task.id}.</p>
            </td>
            <td className="py-8 text-center">
                <p className="text-wrap">{task.title}</p>
            </td>

            <td className="py-8 text-center">
                <input
                    className="w-4 h-4"
                    type="checkbox"
                    aria-label={`${task.title}`}
                    checked={task.completed}
                    onChange={(e) => toggleTask(task.id)}
                />
            </td>
            <td className="justify-center py-8 text-center">
                <TrashIcon
                    className="h-6 hover:cursor-pointer"
                    onClick={() => removeTask(task.id)}
                    aria-label={task.title}
                />
            </td>
        </tr>
    );
}
