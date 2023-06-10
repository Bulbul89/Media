import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/Userslice";

export const store = configureStore( {
    reducer: {
        users: usersReducer,

    },
})