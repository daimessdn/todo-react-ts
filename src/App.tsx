import { useState } from "react"

import TodoItem from "./components/TodoItem"

import { dummyData } from "./data/todos"

function App() {
  const [todos, setTodos] = useState(dummyData);

  function setTodoCompleted(id: number, isCompleted: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, isCompleted } : todo))

    );
  }

  return (
    <main className="py-10 h-screen">
      <h1 className="font-bold text-3xl text-center">Manage Todos</h1>

      <div className="max-w-lg mx-auto">
        <div className="space-y-2">
          {
            todos.map(todo => (
              <TodoItem todo={todo} key={todo.id} onCompletedChange={setTodoCompleted} />
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default App
