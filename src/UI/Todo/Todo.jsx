import './Todo.css';
import Checkbox from '../Checkbox/Checkbox';
import cross from '../../assets/images/icon-cross.svg';

const Todo = (props) => {
  const toggleChecked = () => {
    props.onToggleChecked(props.id);
  };

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="todo-container">
      <Checkbox theme={props.theme} completed={props.completed} onClick={toggleChecked} />
      <p
        className={`todo-message ${props.completed && 'completed'} 
        ${props.theme === 'light'} && 'light'`}
      >
        {props.message}
      </p>
      <img src={cross} alt="" onClick={deleteHandler} />
    </div>
  );
};
export default Todo;
