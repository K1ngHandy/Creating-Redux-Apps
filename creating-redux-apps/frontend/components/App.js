import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, nextDay, save, spend } from '../state/slice';

export default function App() {
	const count = useSelector((st) => st.state.count);
	const day = useSelector((st) => {
		const days = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];
		return days[st.state.day];
	});
	const savings = useSelector((st) => st.state.savings);
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
					// debugger;
					dispatch(action);
				}}
			>
				The day is {day}
			</button>
			<h3>Savings are at ${savings}</h3>
			<button
				onClick={() => {
					const action = save(10);
					dispatch(action);
				}}
			>
				Save $10
			</button>
			<button
				onClick={() => {
					const action = spend(5);
					dispatch(action);
				}}
			>
				Spend $5
			</button>
		</div>
	);
}
