import { describe, expect, it, vi } from "vitest";
import { TaskList } from "~/tasks/TaskList";
import { render, screen } from "~/test_utils";
import type { Task } from "~/types";

describe("TaskList", () => {
    it("should show a list of tasks", () => {
        //? Mocks
        const tasksMock: Task[] = [
            { id: "1", title: "Task 1", completed: false },
            { id: "2", title: "Task 2", completed: true },
        ];
        const removeTaskMock = vi.fn();
        const toggleTaskMock = vi.fn();

        render(
            <TaskList
                tasks={tasksMock}
                removeTask={removeTaskMock}
                toggleTask={toggleTaskMock}
            />,
        );
        //? Elementen
        const task1 = screen.getByText("Task 1");
        const task2 = screen.getByText("Task 2");

        // ? Expects
        expect(task1).toBeInTheDocument();
        expect(task2).toBeInTheDocument();
    });
    it("should show tasks as completed", () => {
        //? Mocks
        const tasksMock: Task[] = [
            { id: "1", title: "Task 1", completed: true },
            { id: "2", title: "Task 2", completed: true },
        ];
        const removeTaskMock = vi.fn();
        const toggleTaskMock = vi.fn();

        render(
            <TaskList
                tasks={tasksMock}
                removeTask={removeTaskMock}
                toggleTask={toggleTaskMock}
            />,
        );
        //? Elementen
        const checkbox1 = screen.getByRole("checkbox", {
            name: "test toggle Task 1",
        });
        const checkbox2 = screen.getByRole("checkbox", {
            name: "test toggle Task 2",
        });

        // ? Expects
        expect(checkbox1).toBeChecked();
        expect(checkbox2).toBeChecked();
    });
});
