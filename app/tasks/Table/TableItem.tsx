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
                    onChange={() => toggleTask(task.id)}
                />
            </td>
            <td className="justify-center py-8 text-center">
                <button
                    type="button"
                    onClick={() => removeTask(task.id)}
                    aria-label={`Delete ${task.title}`}
                    data-testid={`TrashIcon ${task.title}`}
                    className="inline-flex justify-center items-center p-1 rounded hover:bg-red-100 text-red-600 transition-colors"
                >
                    <TrashIcon className="h-6 hover:cursor-pointer" />
                </button>
            </td>
        </tr>
    );
}
