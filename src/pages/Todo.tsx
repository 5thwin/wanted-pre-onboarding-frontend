import { FC } from 'react';
import withAuthRedirect from '../hoc/withAuthRedirect';

const TodoPage: FC = () => {
  return (
    <div>
      <h1>Todo Page</h1>
      {/* Todo 관련 컴포넌트들 */}
    </div>
  );
};

export default withAuthRedirect(TodoPage);
