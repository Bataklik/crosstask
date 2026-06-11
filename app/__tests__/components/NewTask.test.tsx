import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NewTask } from "~/tasks/NewTask";

describe("AddTask", () => {
    it("should add a task to the list", async () => {
        //? Mocks
        const taskMock = "test";
        const setTaskMock = vi.fn();
        const addTaskMock = vi.fn();

        render(
            <NewTask
                task={taskMock}
                setTask={setTaskMock}
                addTask={addTaskMock}
            />,
        );
        //? Elementen
        const input = screen.getByPlaceholderText("Add new Task...");
        const addButton = screen.getByRole("button", { name: "Add new Task" });

        await userEvent.type(input, "New Task");
        expect(setTaskMock).toHaveBeenCalled();

        await userEvent.click(addButton);
        expect(addTaskMock).toHaveBeenCalledWith("test");
    });
});
