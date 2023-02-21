import { useEffect, useState } from 'react';
import Card from './UI/Card/Card';
import Input from './UI/Input/Input';
import Todo from './UI/Todo/Todo';
import Filters from './UI/Filters/Filters';
import './App.css';

// images
import sun from './assets/images/icon-sun.svg';
import moon from './assets/images/icon-moon.svg';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, completed: true, message: 'Learn HTML & CSS' },
    { id: 2, completed: true, message: 'Learn Javascript' },
    { id: 3, completed: true, message: 'Learn Vue' },
    { id: 4, completed: false, message: 'Learn React' },
    { id: 5, completed: false, message: 'Learn Angular' },
  ]);

  const [value, setValue] = useState('');
  const [filterBy, setFilterBy] = useState('All');
  const [theme, setTheme] = useState('dark');

  // set body style
  document.body.style = 'background: hsl(240, 20%, 12%);';

  const submitValue = () => {
    setTodos((oldTodos) => [
      ...oldTodos,
      { id: oldTodos[oldTodos.length - 1].id + 1, completed: false, message: value },
    ]);
  };

  const updateValue = (value) => {
    setValue(value);
  };

  const toggleCheckedHandler = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    // const newTodos = todos.slice(todoIndex, 1);
    setTodos(newTodos);
  };

  const deleteHandler = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    const newTodos = [...todos];
    const clearedTodos = newTodos.filter((todo) => todo.completed === false);
    setTodos(clearedTodos);
  };

  const updatefilterBy = (filter) => {
    setFilterBy(filter);
  };

  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  const filteredTodos = () => {
    const filteredTodos = [...todos];

    if (filterBy === 'All') {
      return filteredTodos;
    } else if (filterBy === 'Active') {
      return filteredTodos.filter((todo) => todo.completed === false);
    } else {
      return filteredTodos.filter((todo) => todo.completed === true);
    }
  };

  const ThemeIcon = () => {
    if (theme === 'dark') {
      document.body.style = 'background: hsl(240, 20%, 12%);;';
    } else {
      document.body.style = 'background: hsl(0, 0%, 98%);';
    }
    return theme === 'dark' ? moon : sun;
  };

  return (
    <div className="App">
      <div className="header">
        <h2>TODO</h2>
        <img src={ThemeIcon()} onClick={toggleTheme} alt="" />
      </div>
      <Input theme={theme} onChange={updateValue} value={value} onSubmit={submitValue} />
      <Card theme={theme}>
        {filteredTodos().map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            message={todo.message}
            completed={todo.completed}
            onToggleChecked={toggleCheckedHandler}
            onDelete={deleteHandler}
            theme={theme}
          />
        ))}
        <div className="todos-last-row">
          <p>{todos.length} items left</p>
          <Filters filter={filterBy} onFilterBy={updatefilterBy} />
          <p id="clear-completed" onClick={clearCompleted}>
            Clear completed
          </p>
        </div>
      </Card>
    </div>
  );
}

export default App;
