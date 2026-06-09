import type { Route } from "./+types/tasks";
import Tasks from "~/tasks/page";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "CrossTask" },
        { name: "description", content: "Welcome to CrossTask!" },
    ];
}

export default function TasksRoute() {
    return <Tasks />;
}
