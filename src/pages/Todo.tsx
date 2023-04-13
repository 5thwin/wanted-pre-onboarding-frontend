import { FC } from 'react';
import TodoItem from '../components/TodoItem';
import withAuthRedirect from '../hoc/withAuthRedirect';
import useTodo from '../hooks/useTodo';
import AddTodoForm from '../components/AddTodoForm';

const TodoPage: FC = () => {
  const { todos, newTodo, handleNewTodoChange, handleNewTodoSubmit, handleDeleteTodo, handleUpdateTodo } = useTodo();
  return (
    <div className='pt-36 flex flex-col justify-center items-center text-white'>
      <div className='bg-primary p-12 w-full max-w-xl'>
        <h1 className=' text-6xl font-light'>Todo List</h1>
        <hr className='my-3 border-white' />
        <AddTodoForm
          newTodo={newTodo}
          handleSubmit={handleNewTodoSubmit}
          handleChange={handleNewTodoChange} />
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} handleDelete={handleDeleteTodo} handleUpdate={handleUpdateTodo} />
        })}
      </div>
    </div>
  );
};

export default withAuthRedirect(TodoPage);
