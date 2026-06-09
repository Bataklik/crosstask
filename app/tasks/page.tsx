import React from "react";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Tasks() {
    return <div>Tasks</div>;
}
