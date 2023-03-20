import { useState } from 'react'
import Header from './Header'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([
    { id: '1', text: 'groceries' },
    { id: '2', text: 'laundry' },
    { id: '3', text: 'homework' },
  ])

  console.log(todos)

  // pass in the ID of the one we want to delete
  // loop through each item in our todo list
  // run a check on each item in the loop: if the item id does not match the id of the ID we clicked/passed in, it remains in the array

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className='App'>
      <Header />
      <TodoList todos={todos} handleDelete={deleteTodo} />
    </div>
  )
}

export default App
