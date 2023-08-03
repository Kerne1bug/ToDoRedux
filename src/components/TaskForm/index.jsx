// TaskForm.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TASK } from '../../actions';


function TaskForm() {
	const [newTask, setNewTask] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (newTask.trim() === '') return;
		dispatch({ type: ADD_TASK, payload: { id: Date.now(), text: newTask } });
		setNewTask('');
	};

	return (
		<div>
			<h2>Добавить задачу:</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
				/>
				<button type="submit">Добавить</button>
			</form>
		</div>
	);
}

export default TaskForm;
