import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TasksPage from "~/tasks/page";
import type { Task } from "~/types";
import { log } from "util";

describe("Tasks page", () => {
    describe("Tasks creation", () => {
        it("should add a new task", async () => {
            //* Arrange
            render(<TasksPage tasks={[]} setTasks={vi.fn()} />);
            let mockTask = `New Task ${Math.random()}`;
            const header = screen.getByRole("heading", {
                name: "CrossTasks",
            });
            const input = screen.getByPlaceholderText("Add new Task...");
            const addButton = screen.getByRole("button", {
                name: "Add new Task",
            });
            const taskList = screen.getByRole("table");
            //* Act
            await userEvent.type(input, mockTask);
            await userEvent.click(addButton);

            //* Assert
            expect(header).toBeInTheDocument();
            expect(input).toBeInTheDocument();
            expect(addButton).toBeInTheDocument();
            expect(taskList).toBeInTheDocument();
            expect(screen.getByText(mockTask)).toBeInTheDocument();
        });

        it("should not add a empty task", async () => {
            //* Arrange
            const alertMock = vi
                .spyOn(window, "alert")
                .mockImplementation(() => {});
            render(<TasksPage tasks={[]} setTasks={vi.fn()} />);
            const addButton = screen.getByRole("button", {
                name: "Add new Task",
            });
            //* Act
            await userEvent.click(addButton);

            //* Assert
            expect(alertMock).toHaveBeenCalledTimes(1);
            expect(alertMock).toHaveBeenCalledWith(
                "Task title cannot be empty",
            );
        });
    });

    describe("Tasks toggle", () => {
        it("should toggle a task", async () => {
            //* Arrange
            let mockTask: Task = {
                id: 1,
                title: "Toggle a task",
                completed: false,
            };
            const mockSetTasks = vi.fn();
            render(<TasksPage tasks={[mockTask]} setTasks={mockSetTasks} />);
            const checkbox = screen.getByRole("checkbox", {
                name: mockTask.title,
            });
            const taskList = screen.getByRole("table");

            //* Act
            await userEvent.click(checkbox);

            //* Assert
            expect(taskList).toBeInTheDocument();
            expect(screen.getByText(mockTask.title)).toBeInTheDocument();
            expect(mockSetTasks).toHaveBeenCalledTimes(1);
        });
    });

    describe("Tasks deletion", () => {
        it("should delete a task", async () => {
            //* Arrange
            let mockTask: Task = {
                id: 1,
                title: "Remove a task",
                completed: false,
            };
            const mockSetTasks = vi.fn();
            render(<TasksPage tasks={[mockTask]} setTasks={mockSetTasks} />);
            const testId = `TrashIcon ${mockTask.title}`;
            const taskList = screen.getByRole("table");
            const trashIcon = screen.getByTestId(testId);

            await userEvent.click(trashIcon);

            expect(taskList).toBeInTheDocument();
            expect(mockSetTasks).toHaveBeenCalledTimes(1);
        });
    });
});
