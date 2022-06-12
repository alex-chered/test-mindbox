// hooks
import { useTasks } from 'hooks';

// models
import { TodoModel } from 'models';

// ============================== LIST ITEM PROPS ============================== //

interface ListItemProps {
  item: TodoModel;
}

// ============================== LIST ITEM ============================== //

export const ListItem = (props: ListItemProps) => {
  const { item: { id, name, completed } } = props;

  const { setTaskCompleted } = useTasks();

  // CHECKBOX "COMPLETED" -> CHANGE
  const completedChangeHandler = () => {
    setTaskCompleted(id, !completed);
  };

  // RENDER
  return (
    <div className="form-check">

      {/* Input */}
      <input
        className="form-check-input"
        type="checkbox"
        checked={completed}
        id={`flexCheckDefault${id}`}
        onChange={completedChangeHandler}
      />

      {/* Label */}
      <label className="form-check-label" htmlFor={`flexCheckDefault${id}`}>
        { completed && <span className="text-secondary text-decoration-line-through">{name}</span> }
        { !completed && <span>{name}</span> }
      </label>

    </div>
  );
};
