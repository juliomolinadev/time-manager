import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	mobile: false,
};

export const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		setMobile: (state) => {
			state.mobile = true;
		},
	},
});

export const { setMobile } = uiSlice.actions;
