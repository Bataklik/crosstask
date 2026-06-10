import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TasksPage from "~/tasks/page";
describe("Tasks page", () => {
    it("should render the Tasks page", async () => {
        //* Arrange
        render(<TasksPage />);
        const mockTask = `New Task ${Math.random()}`;
        const header = screen.getByText("CrossTasks");
        const input = screen.getByPlaceholderText("Add new Task...");
        const addButton = screen.getByRole("button", { name: "Add new Task" });
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
});
