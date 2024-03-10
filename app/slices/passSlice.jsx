import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	passes: [],
	pass: null,
	newPass: null,
	adminPasses: [],
	approvedAdminPasses: [],
	rejectedAdminPasses: [],
	pendingAdminPasses: [],
	userAdminPasses: [],
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

		getAdminPasses: (state, action) => {
			state.adminPasses = action.payload;
		},
		getAdminApprovedPasses: (state, action) => {
			state.approvedAdminPasses = action.payload;
		},
		getAdminRejectedPasses: (state, action) => {
			state.rejectedAdminPasses = action.payload;
		},
		getAdminPendingPasses: (state, action) => {
			state.pendingAdminPasses = action.payload;
		},
		getAdminUserPasses: (state, action) => {
			state.userAdminPasses = action.payload;
		},
		resetPasses: (state) => (state = initialState),
	},
});

export const {
	getPasses,
	getPassById,
	createPass,
	clearNewPass,
	getAdminPasses,
	getAdminApprovedPasses,
	getAdminRejectedPasses,
	getAdminPendingPasses,
	getAdminUserPasses,
	resetPasses,
} = passSlice.actions;

export default passSlice.reducer;
