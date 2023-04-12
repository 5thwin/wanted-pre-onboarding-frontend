import axios from 'axios';
import {
	API_URL,
	SignInRequestBody,
	SignInResponse,
	SignUpRequestBody,
	SignUpResponse,
} from '../constants';

const signIn = async (body: SignInRequestBody): Promise<SignInResponse> => {
	try {
		const response = await axios.post<SignInResponse>(
			`${API_URL}/auth/signin`,
			body,
			{ headers: { 'Content-Type': 'application/json' } }
		);
		const { access_token } = response.data;

		return { success: true, message: '로그인에 성공하였습니다.', access_token };
	} catch (error) {
		console.error(error);
		throw new Error('로그인에 실패하였습니다.');
	}
};

const signUp = async (body: SignUpRequestBody): Promise<SignUpResponse> => {
	try {
		const response = await fetch(`${API_URL}/auth/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});

		if (response.status === 201) {
			alert('회원가입에 성공하였습니다.');
			return { success: true, message: '회원가입에 성공하였습니다.' };
		} else {
			throw new Error('회원가입에 실패하였습니다.');
		}
	} catch (error) {
		console.error(error);
		throw new Error('회원가입에 실패하였습니다.');
	}
};

export { signIn, signUp };
