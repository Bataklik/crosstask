import type { Task } from "~/types";

interface TasksListProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function TableCaption({ title }: { title?: string }) {
    return (
        <caption className="caption-top font-medium text-lg">
            {title ? title : "List of Tasks"}
        </caption>
    );
}

function TableItem({ task }: { task: Task }) {
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

function TableBody() {
    return (
        <tbody>
            <TableItem
                task={{
                    id: 1,
                    title: "Cleaning the bathroom",
                    completed: false,
                }}
            />

            <TableItem
                task={{
                    id: 2,
                    title: "Cleaning the hall",
                    completed: false,
                }}
            />
        </tbody>
    );
}

export function TaskList({ tasks, setTasks }: TasksListProps) {
    return (
        <div className="flex mx-4 justify-center ">
            <table className="w-full ">
                <TableCaption />
                <TableHead />
                <TableBody />
            </table>
        </div>
    );
}
