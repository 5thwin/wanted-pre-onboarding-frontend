import { useCallback, useMemo, useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../api/auth';
import { useAuth } from './useAuth';

export function useSign() {
	const navigate = useNavigate();
	const { saveToken } = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<null | string>(null);

	const validateEmail = useCallback((email: string) => {
		return email.includes('@');
	}, []);

	const validatePassword = useCallback((password: string) => {
		return password.length >= 8;
	}, []);

	const handleSignIn = async () => {
		try {
			const { success, message, access_token } = await signIn({
				email,
				password,
			});
			if (success) {
				saveToken(access_token);
				alert('환영합니다');
				navigate('/todo');
			} else {
				setError(message);
			}
		} catch (error) {
			console.error(error);
			setError('로그인에 실패하였습니다.');
		}
	};

	const handleSignUp = async () => {
		try {
			const { success, message } = await signUp({ email, password });
			if (success) {
				navigate('/signin');
			} else {
				setError(message);
			}
		} catch (error) {
			console.error(error);
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

	return {
		email,
		password,
		isValid,
		handleChange,
		handleSignIn,
		handleSignUp,
		error,
	};
}
