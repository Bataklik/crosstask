import React from "react";
import type { Route } from "../+types/root";
import { TaskHeader } from "./TaskHeader";
import { NewTask } from "./NewTask";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Tasks() {
    return (
        <div className="bg-red-500 h-screen">
            {/* Header */}
            <TaskHeader />
            {/* Add new Task  */}
            <NewTask />
            {/* List of Tasks */}
            <div className="bg-yellow-500">
                <p>List of Tasks</p>
            </div>
        </div>
    );
}
