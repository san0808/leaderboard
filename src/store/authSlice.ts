import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

export interface AuthState {
    authState: boolean;
}

const initialState: AuthState = {
    authState: false,
};

type HydateAction = {
    type: typeof HYDRATE;
    payload: AppState;
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthState: (state, action) => {
            state.authState = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action: HydateAction) => {
            return {
                ...state,
                ...action.payload.auth,
            };
        });
    },
});

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;

export default authSlice.reducer;
