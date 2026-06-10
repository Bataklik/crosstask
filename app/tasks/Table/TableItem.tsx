import type { Task } from "~/types";

export function TableItem({ task }: { task: Task }) {
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
                />
            </td>
        </tr>
    );
}
