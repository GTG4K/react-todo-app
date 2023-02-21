import Card from '../Card/Card';
import Checkbox from '../Checkbox/Checkbox';
import './Input.css';

const Input = (props) => {
  const updateValue = (e) => {
    props.onChange(e.target.value);
  };

  const submitValue = (e) => {
    if (e.key === 'Enter') {
      props.onSubmit();
      props.onChange('');
    }
  };

  return (
    <Card className="todo-input" theme={props.theme}>
      <Checkbox theme={props.theme} />
      <input
        type="text"
        placeholder="Learn Svelte..."
        onChange={updateValue}
        value={props.value}
        onKeyDown={submitValue}
      />
    </Card>
  );
};

export default Input;
