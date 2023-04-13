import { useEffect, useState } from 'react';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../api/todo';
import { Todo } from '../constants';
import { useNavigate } from 'react-router-dom';

export default function useTodo() {
	const navigate = useNavigate();
	const [todos, setTodos] = useState<Todo[]>([]);
	const [newTodo, setNewTodo] = useState<string>('');
	const [error, setError] = useState<null | string>(null);
	const [accessToken, setAccessToken] = useState<string | null>(null);

	useEffect(() => {
		const token = localStorage.getItem('token');
		setAccessToken(token);
	}, []);

	useEffect(() => {
		if (accessToken) {
			const fetchTodos = async () => {
				try {
					const todos = await getTodos(accessToken);
					setTodos(todos);
				} catch (error) {
					setError('할 일 목록을 불러오는 데 실패하였습니다.');
				}
			};
			fetchTodos();
		}
	}, [accessToken]);
	const handleNewTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNewTodo(event.target.value);
	};
	/*새로운 todo 추가 핸들러 */
	const handleNewTodoSubmit = async (
		event: React.FormEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		try {
			if (!accessToken) {
				setError('로그인을 해주세요');
				return;
			}
			const todo = await createTodo(accessToken, { todo: newTodo });
			setTodos((todos) => [...todos, todo]);
			setNewTodo('');
		} catch (error) {
			setError('할 일을 추가하는데 실패하였습니다.');
		}
	};

	/*TODO: 삭제 */
	const handleDeleteTodo = async (id: number) => {
		try {
			if (!accessToken) {
				setError('로그인을 해주세요');
				return;
			}
			await deleteTodo(accessToken, id);
			setTodos((todos) => todos.filter((todo) => todo.id !== id));
		} catch (error) {
			setError('할 일을 삭제하는 데 실패하였습니다.');
		}
	};

	const handleUpdateTodo = async (updatedTodo: Todo) => {
		try {
			if (!accessToken) {
				setError('로그인을 해주세요');
				return;
			}
			const todo = await updateTodo(accessToken, updatedTodo.id, {
				todo: updatedTodo.todo,
				isCompleted: updatedTodo.isCompleted,
			});
			console.log(todo);
			setTodos((todos) =>
				todos.map((todo) =>
					todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo
				)
			);
		} catch (error) {
			setError('할 일을 수정하는 데 실패하였습니다.');
		}
	};

	const handleLogout = () => {
		localStorage.removeItem('token');
		navigate('/signin');
	};

	return {
		todos,
		newTodo,
		handleNewTodoChange,
		handleNewTodoSubmit,
		handleDeleteTodo,
		handleUpdateTodo,
		handleLogout,
		error,
	};
}
