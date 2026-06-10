import { TableItem } from "./TableItem";

export function TableBody() {
    return (
        <tbody>
            <TableItem
                task={{
                    id: 1,
                    title: "Cleaning the bathroom",
                    completed: false,
                }}
            />

            <TableItem
                task={{
                    id: 2,
                    title: "Cleaning the hall",
                    completed: false,
                }}
            />
        </tbody>
    );
}
