// TaskList.js

import { useSelector, useDispatch } from 'react-redux';
import { DELETE_TASK } from '../../actions';

function TaskList() {
	const tasks = useSelector((state) => state.tasks);
	const dispatch = useDispatch();

	const handleDelete = (taskId) => {
		dispatch({ type: DELETE_TASK, payload: taskId });
	};

	return (
		<div>
			<h2>Список задач:</h2>
			<ul>
				{tasks.map((task) => (
					<li key={task.id}>
						{task.text}
						<button onClick={() => handleDelete(task.id)}>Удалить</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default TaskList;
