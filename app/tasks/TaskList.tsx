import type { Task } from "~/types";
import { TableBody } from "./Table/TableBody";
import { TableCaption } from "./Table/TableCaption";
import { TableHead } from "./Table/TableHead";

interface TasksListProps {
    tasks: Task[];
    removeTask: (taskId: number) => void;
    toggleTask: (taskId: number) => void;
}

export function TaskList({ tasks, removeTask, toggleTask }: TasksListProps) {
    return (
        <div className="flex mx-4 justify-center ">
            <table className="w-full ">
                <TableCaption />
                <TableHead />
                <TableBody tasks={tasks} toggleTask={toggleTask} />
            </table>
        </div>
    );
}
