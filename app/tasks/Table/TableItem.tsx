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
            <td className="py-8 w-1/12 text-center ">
                <p className="md:text-lg sm:text-sm">{task.id}.</p>
            </td>
            <td className="py-8 w-1/2 text-center">
                <p className="text-wrap">{task.title}</p>
            </td>

            <td className="py-8 w-1/4 text-center">
                <input
                    className="w-4 h-4"
                    type="checkbox"
                    aria-label={`test toggle ${task.title}`}
                    data-testid={`test toggle ${task.title}`}
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                />
            </td>
            <td className="justify-center py-8 text-center">
                <button
                    type="button"
                    onClick={() => removeTask(task.id)}
                    aria-label={`test remove ${task.title}`}
                    data-testid={`test remove ${task.title}`}
                    className="inline-flex justify-center items-center p-1 rounded hover:bg-red-100 text-red-600 transition-colors"
                >
                    <TrashIcon className="h-6 hover:cursor-pointer" />
                </button>
            </td>
        </tr>
    );
}
