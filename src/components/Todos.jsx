import React from 'react'
import { removeTodo } from '../features/todo/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

const Todos = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  return (
    <>
      <div>Todos</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              className="mx-2 px-3 bg-gray-600 rounded"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
