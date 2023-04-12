import axios from 'axios';
import { API_URL } from '../constants';

type Todo = {
	id: number;
	todo: string;
	isCompleted: boolean;
	userId: number;
};

type CreateTodoRequestBody = {
	todo: string;
};

type UpdateTodoRequestBody = {
	todo: string;
	isCompleted: boolean;
};

type CreateTodoResponse = Todo;
type GetTodosResponse = Todo[];
type UpdateTodoResponse = Todo;
type DeleteTodoResponse = void;

export const createTodo = async (
	accessToken: string,
	requestBody: CreateTodoRequestBody
): Promise<CreateTodoResponse> => {
	const response = await axios.post(`${API_URL}/todos`, requestBody, {
		headers: { Authorization: `Bearer ${accessToken}` },
	});
	return response.data;
};

export const getTodos = async (
	accessToken: string
): Promise<GetTodosResponse> => {
	const response = await axios.get(`${API_URL}/todos`, {
		headers: { Authorization: `Bearer ${accessToken}` },
	});
	return response.data;
};

export const updateTodo = async (
	accessToken: string,
	id: number,
	requestBody: UpdateTodoRequestBody
): Promise<UpdateTodoResponse> => {
	const response = await axios.put(`${API_URL}/todos/${id}`, requestBody, {
		headers: { Authorization: `Bearer ${accessToken}` },
	});
	return response.data;
};

export const deleteTodo = async (
	accessToken: string,
	id: number
): Promise<DeleteTodoResponse> => {
	await axios.delete(`${API_URL}/todos/${id}`, {
		headers: { Authorization: `Bearer ${accessToken}` },
	});
};
