export const API_URL = 'https://www.pre-onboarding-selection-task.shop';

/*로그인, 회원가입 요청 및 응답 */
export interface SignInRequestBody {
	email: string;
	password: string;
}

export interface SignInResponse {
	success: boolean;
	message: string;
	access_token: string;
}

export interface SignUpRequestBody {
	email: string;
	password: string;
}

export interface SignUpResponse {
	success: boolean;
	message: string;
}

/*Todo 요청 및 응답 */
export type Todo = {
	id: number;
	todo: string;
	isCompleted: boolean;
	userId: number;
};

export type CreateTodoRequestBody = {
	todo: string;
};

export type UpdateTodoRequestBody = {
	todo: string;
	isCompleted: boolean;
};

export type CreateTodoResponse = Todo;
export type GetTodosResponse = Todo[];
export type UpdateTodoResponse = Todo;
export type DeleteTodoResponse = void;
