import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import type { RootState } from "~/redux/store";
import { addTask, removeTask, toggleTask } from "~/redux/taskSlice";

export const useTaskService = () => {
    const tasks = useAppSelector((state: RootState) => state.tasks);
    const dispatch = useAppDispatch();

    const addTaskHandler = (title: string) => {
        if (title.trim() === "") {
            alert("Task title cannot be empty.");
            return;
        }
        dispatch(addTask(title));
    };
    const removeTaskHandler = (id: string) => {
        console.log(id);
        dispatch(removeTask(id));
    };
    const toggleTaskHandler = (id: string) => {
        console.log(id);
        dispatch(toggleTask(id));
    };
    return { tasks, addTaskHandler, removeTaskHandler, toggleTaskHandler };
};
