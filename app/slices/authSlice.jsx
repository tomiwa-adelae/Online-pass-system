import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userInfo:
		typeof window !== "undefined" && localStorage.getItem("userInfo")
			? JSON.parse(localStorage.getItem("userInfo"))
			: null,
	adminUsers: [],
	adminUser: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			state.userInfo = action.payload;
			localStorage.setItem("userInfo", JSON.stringify(action.payload));
		},
		logout: (state, action) => {
			state.userInfo = null;
			localStorage.removeItem("userInfo");
		},
		getUsers: (state, action) => {
			state.adminUsers = action.payload;
		},
		getUser: (state, action) => {
			state.adminUser = action.payload;
		},
	},
});

export const { setCredentials, logout, getUsers, getUser } = authSlice.actions;

export default authSlice.reducer;
