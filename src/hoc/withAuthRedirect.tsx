import { ComponentType, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export interface AuthRedirectProps {
  isAuth: boolean;
}

const withAuthRedirect = <P extends object>(
  WrappedComponent: ComponentType<P>,
): ComponentType<P & AuthRedirectProps> => {
  const AuthRedirect: ComponentType<P & AuthRedirectProps> = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        navigate('/todo');
      } else if (location.pathname === '/todo') {
        navigate('/signin');
      }
    }, [navigate, location.pathname]);

    return props.isAuth ? <WrappedComponent {...(props as P)} /> : null;
  };

  return AuthRedirect;
};

export default withAuthRedirect;
