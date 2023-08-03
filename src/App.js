// App.js

import { Provider } from 'react-redux';

import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<div>
				<h1>Приложение To-Do List</h1>
				<TaskForm />
				<TaskList />
			</div>
		</Provider>
	);
}

export default App;
