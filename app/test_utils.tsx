import React, { type PropsWithChildren, type ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Provider } from "react-redux";

import type { AppStore, RootState, PreloadedState } from "./redux/store";
import { setupStore } from "./redux/store";
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return <body>{children}</body>;
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as preloadedState, store.
interface ExtendedRenderOptions extends Omit<
    RenderOptions,
    "queries" | "wrapper"
> {
    preloadedState?: PreloadedState;
    store?: AppStore;
}

export function renderWithProviders(
    ui: React.ReactElement,
    extendedRenderOptions: ExtendedRenderOptions = {},
) {
    const {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        store = setupStore(preloadedState),
        ...renderOptions
    } = extendedRenderOptions;

    const Wrapper = ({ children }: PropsWithChildren) => (
        <Provider store={store}>{children}</Provider>
    );

    // Return an object with the store, user, and all of RTL's query functions
    return {
        store,
        user: userEvent.setup(),
        ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    };
}

export * from "@testing-library/react";
export { customRender as render };
