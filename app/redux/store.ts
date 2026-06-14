import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
    return {
        getItem(_key: any) {
            return Promise.resolve(null);
        },
        setItem(_key: any, value: any) {
            return Promise.resolve(value);
        },
        removeItem(_key: any) {
            return Promise.resolve();
        },
    };
};
const createBrowserStorage = () => {
    return {
        getItem(key: string) {
            return Promise.resolve(window.localStorage.getItem(key));
        },
        setItem(key: string, value: string) {
            window.localStorage.setItem(key, value);
            return Promise.resolve();
        },
        removeItem(key: string) {
            window.localStorage.removeItem(key);
            return Promise.resolve();
        },
    };
};

const rootReducer = combineReducers({
    tasks: taskReducer,
});

//! Redux Persist Configuration
const storage =
    typeof window !== "undefined"
        ? createBrowserStorage()
        : createNoopStorage();

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["tasks"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function setupStore(preloadedState?: Partial<RootState>, isTest = false) {
    return configureStore({
        reducer: (isTest
            ? rootReducer
            : persistedReducer) as typeof rootReducer,
        preloadedState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    // Ignore redux-persist actions
                    ignoredActions: [
                        FLUSH,
                        REHYDRATE,
                        PAUSE,
                        PERSIST,
                        PURGE,
                        REGISTER,
                    ],
                },
            }),
    });
}

export const store = setupStore();
export const persistor = persistStore(store);

export type PreloadedState = Parameters<typeof rootReducer>[0];
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
