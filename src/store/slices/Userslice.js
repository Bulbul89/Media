import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../../thunks/fetchUsers";

const usersSlice = createSlice( {
    name: "users",
    initialState: {
        data: [],
<<<<<<< HEAD
        isLoading:false,
=======
        isLoading: false,
>>>>>>> 0475022fb6b8f0e5b8d97232a00e06ed2901272a
        error:null,
    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled),(state,action)=> {
            state.isLoading = false;
            state.data = action.payload
            } ;
        builder.addCase(fetchUsers.rejected, (state,action)=> {
            state.isLoading = false;
            state.error = action.error
            });
    }
})


export const usersReducer = usersSlice.reducer;