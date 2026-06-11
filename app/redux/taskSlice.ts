import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "~/types";

export interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: [],
};

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {},
        removeTask: (state, action: PayloadAction<number>) => {},
        toggleTask: (state, action: PayloadAction<number>) => {},
    },
});

export const { addTask, removeTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
