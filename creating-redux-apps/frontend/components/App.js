import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, nextDay } from '../state/slice';

export default function App() {
	const count = useSelector((st) => st.state.count);
	const day = 'Monday';
	const dispatch = useDispatch();
	return (
		<div>
			<h2>Hello, World!</h2>
			<button
				onClick={() => {
					dispatch(increment());
				}}
			>
				The count is {count}
			</button>

			<button
				onClick={() => {
					const action = nextDay();
					debugger;
					dispatch(action);
				}}
			>
				The day is {day}
			</button>
		</div>
	);
}
