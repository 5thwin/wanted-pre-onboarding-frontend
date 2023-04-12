import { useState, useEffect } from 'react';
import { getItem, removeItem, setItem } from '../utils/storage';

export const useAuth = () => {
	const [accessToken, setAccessToken] = useState<string | null>(null);

	useEffect(() => {
		const token = getItem('token');
		if (token) {
			setAccessToken(token);
		}
	}, []);

	const saveToken = (token: string) => {
		setItem('token', token);
		setAccessToken(token);
	};

	const clearToken = () => {
		removeItem('token');
		setAccessToken(null);
	};

	return {
		accessToken,
		saveToken,
		clearToken,
	};
};
