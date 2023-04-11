import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import { useCallback, useState } from 'react';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsValid(email.includes('@') && password.length >= 8);
  }, [email, password.length]);

  const handlePasswordChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsValid(email.includes('@') && password.length >= 8);
  }, [email, password.length]);

  return <div className='pt-56 flex flex-col justify-center items-center'>
    <form className='my-4 p-3 w-1/2 max-w-sm text-md'>
      <div className='flex items-center h-14'>
        <label htmlFor="email-input" className='sign-label'>
          <FaUser className='text-white font-bold' />
        </label>
        <input
          data-testid="email-input"
          id='email-input'
          className='sign-input'
          placeholder='Email address'
          onChange={handleEmailChange}
        />
      </div>
      <div className='flex items-center h-14 mt-4'>
        <label htmlFor="password-input" className='sign-label'>
          <FaLock className='text-white font-bold' />
        </label>
        <input
          data-testid="password-input"
          id='password-input'
          type='password'
          className='sign-input'
          placeholder='Password'
          onChange={handlePasswordChange}
        />
      </div>
      <button
        data-testid="signin-button"
        type='submit'
        className='mt-5 w-full bg-primary p-4 text-white font-bold rounded-md disabled:bg-gray-400'
        disabled={!isValid}
      >SIGN IN</button>
    </form>
    <p className='font-semibold text-secondary'>Not a member? <Link to={'/signup'} className="text-anchor hover:underline">Sign up now</Link></p>
  </div>
}
