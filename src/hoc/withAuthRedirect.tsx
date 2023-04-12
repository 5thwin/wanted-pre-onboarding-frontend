import { ComponentType, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';

export interface AuthRedirectProps {
  isAuth: boolean;
}

const withAuthRedirect = <P extends object>(
  WrappedComponent: ComponentType<P>,
): ComponentType<P & AuthRedirectProps> => {
  const AuthRedirect: ComponentType<P & AuthRedirectProps> = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { accessToken } = useAuth(); // useAuth()를 사용하여 accessToken을 가져옵니다.

    useEffect(() => {
      /*토큰이 있는 상태일 때, /todo 경로로 리다이렉트 */
      if (accessToken) {
        navigate('/todo');
      } else if (location.pathname === '/todo') {
        /*토큰이 없는 상태에서 /todo 페이지 접속 시 /signin 경로로 리다이렉트 */
        navigate('/signin');
      }
    }, [navigate, location.pathname, accessToken]);

    return props.isAuth ? <WrappedComponent {...(props as P)} /> : null;
  };

  return AuthRedirect;
};

export default withAuthRedirect;
