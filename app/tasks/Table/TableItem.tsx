import type { Task } from "~/types";

interface TableItemProps {
    task: Task;
    toggleTask: (taskId: number) => void;
}

export function TableItem({ task, toggleTask }: TableItemProps) {
    return (
        <tr className="border-b-2 border-purple-700">
            <td className="justify-center py-8 text-center ">
                <p>{task.id}.</p>
            </td>
            <td className="justify-center py-8 text-center">
                <p className="text-wrap">{task.title}</p>
            </td>
            <td className="justify-center py-8 text-center">
                <input
                    className="w-4 h-4"
                    type="checkbox"
                    checked={task.completed}
                    onChange={(e) => toggleTask(task.id)}
                />
            </td>
        </tr>
    );
}
