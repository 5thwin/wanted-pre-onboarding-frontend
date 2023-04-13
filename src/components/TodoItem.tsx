import { Todo } from '../constants';
import useTodo from '../hooks/useTodo';
import { useState, useRef } from 'react';


export interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { handleDeleteTodo, handleUpdateTodo } = useTodo();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEditMode, SetIsEditMode] = useState<boolean>(false);
  return <li className='flex w-full h-12 bg-bright my-2 p-3 items-center'>
    <input type="checkbox" defaultChecked={todo.isCompleted} id="todo-check" />
    {
      !isEditMode ?
        <div className='flex w-full justify-between'>
          <span className='ml-2'>{todo.todo}</span>
          <div>
            <button data-testid="modify-button" className='' onClick={() => SetIsEditMode(true)}>수정</button>
            <button data-testid="delete-button" className='ml-2' onClick={() => { handleDeleteTodo(todo.id) }}>삭제</button>
          </div>
        </div> :
        <form className='flex w-full justify-between'>
          <input data-testid="modify-input" defaultValue={todo.todo} ref={inputRef} className='ml-2' />
          <div>
            <button data-testid="submit-button" onClick={() => handleUpdateTodo({ ...todo, todo: inputRef.current ? inputRef.current.value : todo.todo })}>제출</button>
            <button data-testid="cancel-button" onClick={() => SetIsEditMode(false)} className='ml-2'>취소</button>
          </div>
        </form>
    }
  </li >
}
