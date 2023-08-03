// TaskForm.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TASK } from '../../actions';


const TaskForm = () => {
	const [newTask, setNewTask] = useState("");
	const dispatch = useDispatch();

	const handleInputChange = (e) => {
		setNewTask(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const trimmedTask = newTask.trim();
		if (!trimmedTask) return; // Проверка на пустую строку

		dispatch({ type: ADD_TASK, payload: { id: Date.now(), text: trimmedTask } });
		setNewTask("");
	};

	return (
		<div>
			<h2>Добавить задачу:</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={newTask}
					onChange={handleInputChange} // Используем функцию handleInputChange
				/>
				<button type="submit">Добавить</button>
			</form>
		</div>
	);
};

export default TaskForm;
