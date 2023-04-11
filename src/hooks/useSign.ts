import { useCallback, useMemo, useState, ChangeEvent } from 'react';

export function useSign() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const validateEmail = useCallback((email: string) => {
		return email.includes('@');
	}, []);

	const validatePassword = useCallback((password: string) => {
		return password.length >= 8;
	}, []);

	const handleSubmitSignUp = useCallback(
		(email: string, password: string) => {},
		[]
	);

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

	return { email, password, isValid, handleChange };
}
