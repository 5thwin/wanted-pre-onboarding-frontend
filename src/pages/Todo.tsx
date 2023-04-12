import { FC } from 'react';
import withAuthRedirect from '../hoc/withAuthRedirect';
import useTodo from '../hooks/useTodo';

const TodoPage: FC = () => {
  const { todos, handleNewTodoChange, handleNewTodoSubmit } = useTodo();
  return (
    <div className='pt-56 flex flex-col justify-center items-center'>
      <h1>Todo Page</h1>
      <form className='flex' onSubmit={handleNewTodoSubmit}>
        <input data-testid="new-todo-input" onChange={handleNewTodoChange} />
        <button data-testid="new-todo-add-button">추가</button>
      </form>
      {todos.map((todo) => {
        return <li>
          <input type="checkbox" checked={todo.isCompleted} />
          <span>{todo.todo}</span>
          <button data-testid="modify-button">수정</button>
          <button data-testid="delete-button">삭제</button>
        </li>
      })}
    </div>
  );
};

export default withAuthRedirect(TodoPage);
