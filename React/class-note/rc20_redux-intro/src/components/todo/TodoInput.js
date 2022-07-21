import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addTodo } from '../../redux/actions/todoActions';

const TodoInput = () => {
  const [text, setText] = useState('');
  const disPatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    disPatch(addTodo(text));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
