import { ComponentType, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getItem } from '../utils/storage';

const withAuthRedirect = <P extends object>(
  WrappedComponent: ComponentType<P>,
): ComponentType<P> => {
  const AuthRedirect: ComponentType<P> = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      /*토큰이 있는 상태일 때, /todo 경로로 리다이렉트 */
      const token = getItem('token');

      if (token) {
        navigate('/todo');
      } else if (location.pathname === '/todo') {
        /*토큰이 없는 상태에서 /todo 페이지 접속 시 /signin 경로로 리다이렉트 */
        navigate('/signin');
      }
    }, [navigate, location.pathname]);

    return <WrappedComponent {...(props as P)} />;
  };

  return AuthRedirect;
};

export default withAuthRedirect;
