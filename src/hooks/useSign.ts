import axios from 'axios';
import { useCallback, useMemo, useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../constants';

export function useSign() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<null | string>(null);

	const validateEmail = useCallback((email: string) => {
		return email.includes('@');
	}, []);

	const validatePassword = useCallback((password: string) => {
		return password.length >= 8;
	}, []);

	const signIn = useCallback(async () => {
		try {
			const response = await axios.post(
				`${API_URL}/auth/signin`,
				{ email, password },
				{ headers: { 'Content-Type': 'application/json' } }
			);
			const { access_token } = response.data;
			console.log('access_token:', access_token);
			localStorage.setItem('token', access_token);
			navigate('/todo');
		} catch (error) {
			console.error(error);
			setError('로그인에 실패하였습니다.');
		}
	}, [email, password]);

	const signUp = async () => {
		try {
			const response = await fetch(`${API_URL}/auth/signup`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});

			if (response.status === 201) {
				alert('회원가입에 성공하였습니다.');
				navigate('/signin');
			} else {
				setError('회원가입에 실패하였습니다.');
			}
		} catch (error) {
			setError('회원가입에 실패하였습니다.');
		}
	};

	const isValid = useMemo(() => {
		return validateEmail(email) && validatePassword(password);
	}, [email, password, validateEmail, validatePassword]);

	const handleChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = event.target;

			if (name === 'email') {
				setEmail(value);
			} else if (name === 'password') {
				setPassword(value);
			}
		},
		[setEmail, setPassword]
	);

	return { email, password, isValid, handleChange, signIn, signUp, error };
}
