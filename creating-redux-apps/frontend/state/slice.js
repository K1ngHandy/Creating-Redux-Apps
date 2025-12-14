import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
	name: 'app_state',
	initialState: {
		count: 0,
		day: 0,
	},
	reducers: {
		increment(state) {
			state.count++;
		},
		nextDay(state, action) {
			debugger;
		},
	},
});

export default slice.reducer;

export const { increment, nextDay } = slice.actions;
