import type { Task } from "~/types";
import { TableBody } from "./TableBody";
import { TableCaption } from "./TableCaption";
import { TableHead } from "./TableHead";

interface TasksListProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
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
