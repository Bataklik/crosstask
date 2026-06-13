import { beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import TasksPage from "~/tasks/page";
import type { Task } from "~/types";
import { render, screen } from "~/test_utils";

describe("Tasks page", () => {
    let mockAdd: import("vitest").Mock;
    let mockRemove: import("vitest").Mock;
    let mockToggle: import("vitest").Mock;

    beforeEach(() => {
        mockAdd = vi.fn();
        mockRemove = vi.fn();
        mockToggle = vi.fn();
    });

    describe("Tasks creation", () => {
        it("should add a new task", async () => {
            //* Arrange
            render(
                <TasksPage
                    tasks={[]}
                    addTask={mockAdd}
                    removeTask={mockRemove}
                    toggleTask={mockToggle}
                />,
            );
            let mockNewTask = `New Task ${Math.random()}`;
            const header = screen.getByRole("heading", {
                name: "CrossTasks",
            });
            const input = screen.getByPlaceholderText("Add new Task...");
            const addButton = screen.getByRole("button", {
                name: "Add new Task",
            });
            //* Act
            await userEvent.type(input, mockNewTask);
            await userEvent.click(addButton);

            //* Assert
            expect(mockAdd).toHaveBeenCalledTimes(1);
            expect(mockAdd).toHaveBeenCalledWith(mockNewTask);
        });

        it("should not add a empty task", async () => {
            //* Arrange
            const emptyText = "*Title is required";
            render(
                <TasksPage
                    tasks={[]}
                    addTask={mockAdd}
                    removeTask={mockRemove}
                    toggleTask={mockToggle}
                />,
            );
            const addButton = screen.getByRole("button", {
                name: /add new task/i,
            });

            //* Act
            await userEvent.click(addButton);

            //* Assert
            const alertParagraph = screen.getByRole("alert");
            expect(alertParagraph).toHaveTextContent(emptyText);
            expect(mockAdd).not.toHaveBeenCalled();
        });
    });

    describe("Tasks toggle", () => {
        it("should toggle a task", async () => {
            //* Arrange
            let mockAdd = vi.fn();
            let mockRemove = vi.fn();
            let mockToggle = vi.fn();
            let mockTask: Task = {
                id: "1",
                title: "Toggle a task",
                completed: false,
            };
            let mockTasks: Task[] = [mockTask];

            render(
                <TasksPage
                    tasks={mockTasks}
                    addTask={mockAdd}
                    removeTask={mockRemove}
                    toggleTask={mockToggle}
                />,
            );
            const testId = `test toggle ${mockTask.title}`;

            const checkbox = screen.getByRole("checkbox", {
                name: testId,
            });
            const taskList = screen.getByRole("table");

            //* Act
            await userEvent.click(checkbox);

            //* Assert
            expect(taskList).toBeInTheDocument();
            expect(mockToggle).toHaveBeenCalledTimes(1);
        });
    });

    describe("Tasks deletion", () => {
        it("should delete a task", async () => {
            //* Arrange
            let mockAdd = vi.fn();
            let mockRemove = vi.fn();
            let mockToggle = vi.fn();
            let mockTask: Task = {
                id: "1",
                title: "Remove a task",
                completed: false,
            };
            let mockTasks: Task[] = [mockTask];

            render(
                <TasksPage
                    tasks={mockTasks}
                    addTask={mockAdd}
                    removeTask={mockRemove}
                    toggleTask={mockToggle}
                />,
            );
            const testId = `test remove ${mockTask.title}`;
            const taskList = screen.getByRole("table");

            const trashButton = screen.getByRole("button", {
                name: testId,
            });

            await userEvent.click(trashButton);

            expect(taskList).toBeInTheDocument();
            expect(mockRemove).toHaveBeenCalledTimes(1);
        });
    });
});
