import { useEffect, useState } from 'react';
import { getTodos } from 'src/api/todo';
import { Todo } from 'src/constants';

export default function useTodo() {
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

	return { todos };
}
