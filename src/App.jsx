import { useCallback, useMemo, useState } from 'react'
import './App.css'
import TodoInput from 'src/components/TodoInput.jsx'
import TodoList from './components/Todolist'
import FilterButtons from './components/FilterButtons';



function App() {

  const [todo, setTodo] = useState("");
  const [filter, setFilter] = useState('All')
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback(() => {
    const todosArr = [...todos, {
      todo,
      id: Date.now(),
      completed: false,
    }]
    setTodos([...todosArr]);
    setTodo("");
  }, [todo]);

  const handleOnDelete = useCallback(
    (id) => {
      const filter = todos.filter((data) => data.id !== id);
      setTodos([...filter]);
    }, [todos]);


  const handleOnToggleTodo = useCallback(
    (id) => {
      const todosArr = [...todos];
      const todoInd = todosArr.findIndex((data) => data.id == id);
      todosArr[todoInd].completed = !todosArr[todoInd].completed;
      setTodos([...todosArr]);

    }, [todos]);

    const filteredTodos = useMemo(() => todos.filter((data) => {
      if (filter == "All") {
        return true;
      }
      if (filter == "completed" && data.completed) {
        return true;
      }
      if (filter == "UnCompeleted" && !data.completed) {
        return true;
      }
    }),[filter, todos]) 

  return (
    <div >
      <h1 className='font-bold text-3xl'>Todo App</h1>
      <TodoInput
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onClick={handleAddTodo}
      />
      <FilterButtons filter={filter} setFilter={setFilter}/>
      <TodoList
        toggleTodo={handleOnToggleTodo}
        todos={filteredTodos}
        onDelete={handleOnDelete} />
    </div>
  )
}

export default App
