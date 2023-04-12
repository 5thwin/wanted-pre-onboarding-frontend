import { FC } from 'react';
import TodoItem from '../components/TodoItem';
import withAuthRedirect from '../hoc/withAuthRedirect';
import useTodo from '../hooks/useTodo';

const TodoPage: FC = () => {
  const { todos, handleNewTodoChange, handleNewTodoSubmit } = useTodo();
  return (
    <div className='pt-36 flex flex-col justify-center items-center text-white'>
      <div className='bg-primary p-12 w-full max-w-xl'>
        <h1 className=' text-6xl font-light'>Todo List</h1>
        <hr className='my-3 border-white' />
        <form onSubmit={handleNewTodoSubmit}>
          <p className='text-lg py-1'>Add to the todo list</p>
          <div className='h-12 w-full flex'>
            <input
              data-testid="new-todo-input"
              onChange={handleNewTodoChange}
              className='h-full px-4 w-full text-black'
            />
            <button
              data-testid="new-todo-add-button"
              className='h-full px-4 w-24 border border-solid border-white'
            >추가</button>
          </div>
        </form>
        {todos.map((todo) => {
          return <TodoItem todo={todo} />
        })}
      </div>
    </div>
  );
};

export default withAuthRedirect(TodoPage);
