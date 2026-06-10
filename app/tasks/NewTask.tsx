import { useEffect, useState } from "react";

interface NewTaskProps {
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    addTask: (task: string) => void;
}
export function NewTask({ task, setTask, addTask }: NewTaskProps) {
    return (
        <div className="flex px-4 items-center justify-center my-6">
            <input
                type="text"
                placeholder="Add new Task..."
                className="flex-3 border w-full border-purple-700 sm:px-4 sm:py-3 md:px-2 md:py-2 rounded-md"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button
                className="flex-1 bg-purple-700 text-white sm:py-3 md:px-4 md:py-2 rounded-md ml-2 hover:bg-purple-600 hover:cursor-pointer"
                onClick={() => addTask(task)}
            >
                Add new Task
            </button>
        </div>
    );
}
