import { useEffect, useState } from "react";

interface NewTaskProps {
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    addTask: (task: string) => void;
}
export function NewTask({ task, setTask, addTask }: NewTaskProps) {
    const [isEmpty, setIsEmpty] = useState(false);
    const handleInputChange = (value: string) => {
        setTask(value);
        if (value.trim() !== "") {
            setIsEmpty(false);
        }
    };

    const handleAddTask = () => {
        if (task.trim() === "") {
            setIsEmpty(true);
            return;
        }

        addTask(task);
        setTask("");
        setIsEmpty(false);
    };

    return (
        <div className="flex px-4 items-center justify-center my-6">
            <div className="relative flex-3 flex flex-col justify-center items-center">
                {isEmpty && (
                    <p
                        role="alert"
                        className="absolute top-10 right-0 text-red-700"
                    >
                        *Title is required
                    </p>
                )}
                <input
                    type="text"
                    placeholder="Add new Task..."
                    className="flex-3 border w-full border-purple-700 sm:px-4 sm:py-3 md:px-2 md:py-2 rounded-md"
                    value={task}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
            </div>

            <button
                className="flex-1 bg-purple-700 text-white sm:py-3 md:px-4 md:py-2 rounded-md ml-2 hover:bg-purple-600 hover:cursor-pointer"
                onClick={handleAddTask}
            >
                Add new Task
            </button>
        </div>
    );
}
