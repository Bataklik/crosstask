import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

const rootReducer = combineReducers({
    tasks: taskReducer,
});

export function setupStore(preloadedState?: PreloadedState) {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
}

export type PreloadedState = Parameters<typeof rootReducer>[0];
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export const store = setupStore();
