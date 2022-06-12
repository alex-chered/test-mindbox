import { useState, ChangeEvent, KeyboardEvent } from 'react';

// hooks
import { useTasks } from 'hooks';

// css
import './add-input.css';

// ============================== ADD INPUT ============================== //

export const AddInput = () => {
  const [taskText, setTaskText] = useState<string>('');

  const { addTask } = useTasks();

  // The function adds task to the store
  const addTaskToStore = () => {
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText('');
    }
  };

  // BTN "ADD TASK" -> CLICK
  const clickAddTaskHandler = () => {
    addTaskToStore();
  };

  // INPUT "TASK TEXT" -> CHANGE
  const changeTaskTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  // INPUT "TASK TEXT" -> KEY DOWN
  const keyDownTaskTextHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTaskToStore();
    }
  };

  // RENDER
  return (
    <div className="add-input mb-3 mt-3">
      <div>
        <input
          className="form-control"
          placeholder="Enter a task"
          value={taskText}
          onChange={changeTaskTextHandler}
          onKeyDown={keyDownTaskTextHandler}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={clickAddTaskHandler}
      >
        Add
      </button>
    </div>
  );
};
