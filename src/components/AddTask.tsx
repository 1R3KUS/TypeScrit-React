import React, { FunctionComponent } from 'react';

type AddTaskProps = {
  addTodo(title: string): void;
};

const AddTask: FunctionComponent<AddTaskProps> = ({ addTodo }) => {
  const [inputText, setInputText] = React.useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const onAdd = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      addTodo(inputText);
      setInputText('');
    }
  };

  return (
    <div className="AddTask">
      <label>Введите название задачи:</label>
      <input
        onChange={changeHandler}
        type="text"
        placeholder="Введите текст..."
        value={inputText}
        onKeyPress={onAdd}
      />
    </div>
  );
};

export default AddTask;
