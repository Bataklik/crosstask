import type { Task } from "~/types";
import { TableBody } from "./Table/TableBody";
import { TableCaption } from "./Table/TableCaption";
import { TableHead } from "./Table/TableHead";

interface TasksListProps {
    tasks: Task[];
    removeTask: (taskId: string) => void;
    toggleTask: (taskId: string) => void;
}

export function TaskList({ tasks, removeTask, toggleTask }: TasksListProps) {
    return (
        <div className="flex mx-4 justify-center ">
            <table className="w-full ">
                <TableCaption />
                <TableHead />
                <TableBody
                    tasks={tasks}
                    removeTask={removeTask}
                    toggleTask={toggleTask}
                />
            </table>
        </div>
    );
}
