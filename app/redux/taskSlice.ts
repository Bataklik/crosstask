import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "~/types";
import type { RootState } from "./store";

export interface TaskState extends Array<Task> {}

const initialState: TaskState = [];

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: {
            prepare: (title: string) => {
                return {
                    payload: {
                        id: crypto.randomUUID(),
                        title,
                        completed: false,
                    },
                };
            },
            reducer: (
                state,
                action: PayloadAction<{
                    id: string;
                    title: string;
                    completed: boolean;
                }>,
            ) => {
                state.push(action.payload);
            },
        },
        removeTask: (state, action: PayloadAction<string>) => {
            return state.filter((tasks) => tasks.id != action.payload);
        },
        toggleTask: (state, action: PayloadAction<string>) => {
            state.map((task) =>
                task.id == action.payload
                    ? (task.completed = !task.completed)
                    : null,
            );
        },
    },
});

export const { addTask, removeTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
