import type { Task } from "~/types";
import { TableBody } from "./Table/TableBody";
import { TableCaption } from "./Table/TableCaption";
import { TableHead } from "./Table/TableHead";

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
                <TableBody tasks={tasks} />
            </table>
        </div>
    );
}
