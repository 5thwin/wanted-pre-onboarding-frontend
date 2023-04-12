import { FC } from 'react';
import withAuthRedirect from '../hoc/withAuthRedirect';

const TodoPage: FC = () => {
  return (
    <div className='pt-56 flex flex-col justify-center items-center'>
      <h1>Todo Page</h1>
      <li>
        <label>
          <input type="checkbox" />
          <span>TODO 1</span>
        </label>
        <button data-testid="modify-button">수정</button>
        <button data-testid="delete-button">삭제</button>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          <span>TODO 2</span>
        </label>
      </li>
      <input data-testid="new-todo-input" />
      <button data-testid="new-todo-add-button">추가</button>
    </div>
  );
};

export default withAuthRedirect(TodoPage);
