import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	passes: [],
	pass: null,
	newPass: null,
};

const passSlice = createSlice({
	name: "pass",
	initialState,
	reducers: {
		getPasses: (state, action) => {
			state.passes = action.payload;
		},
		getPassById: (state, action) => {
			state.pass = action.payload.data;
		},
		createPass: (state, action) => {
			state.newPass = action.payload;
		},
		clearNewPass: (state, action) => {
			state.newPass = null;
		},
	},
});

export const { getPasses, getPassById, createPass, clearNewPass } =
	passSlice.actions;

export default passSlice.reducer;