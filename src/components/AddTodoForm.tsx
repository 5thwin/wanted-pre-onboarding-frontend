import { ChangeEvent, FormEvent } from 'react';

interface AddTodoFormProps {
  newTodo: string
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function AddTodoForm(props: AddTodoFormProps) {
  const { newTodo, handleSubmit, handleChange } = props;
  return <form onSubmit={handleSubmit}>
    <p className='text-lg py-1'>Add to the todo list</p>
    <div className='h-12 w-full flex'>
      <input
        data-testid="new-todo-input"
        onChange={handleChange}
        value={newTodo}
        className='h-full px-4 w-full text-black'
      />
      <button
        data-testid="new-todo-add-button"
        className='h-full px-4 w-24 border border-solid border-white'
      >추가</button>
    </div>
  </form>
}
