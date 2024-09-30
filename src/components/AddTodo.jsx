import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodos = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input)) //DISPATCH LE REDUCER LAI CALL ANI REDUCER LE STATE CHANGE GARXA
    setInput('')
  }
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
        }}
      />
      <button
        type="submit"
        className="text-gray-100 bg-indigo-500 border-0 py-2 px-6 focus:outline-none rounded hover:bg-indigo-600 text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodos
