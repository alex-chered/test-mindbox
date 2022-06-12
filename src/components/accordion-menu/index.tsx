// components
import { Button } from 'components';

// hooks
import { useAppState, useTasks } from 'hooks';

// css
import './accordion-menu.css';

// ============================== ACCORDION MENU ============================== //

export const AccordionMenu = () => {
  // hooks
  const { getActiveLength, currentTasks } = useAppState();
  const { setCurrentTasks, clearCompletedTasks } = useTasks();

  // BUTTON "ALL" -> CLICK
  const clickAllHandler = () => {
    setCurrentTasks('all');
  };

  // BUTTON "ACTIVE" -> CLICK
  const clickActiveHandler = () => {
    setCurrentTasks('active');
  };

  // BUTTON "COMPLETED" -> CLICK
  const clickCompletedHandler = () => {
    setCurrentTasks('completed');
  };

  // BUTTON "CLEAR COMPLETED" -> CLICK
  const clickClearCompletedHandler = () => {
    clearCompletedTasks();
  };

  // RENDER
  return (
    <div className="accordion-menu">

      <div className="d-flex justify-content-center align-items-center">
        <p className="text-secondary">
          {`${getActiveLength()} items left`}
        </p>
      </div>

      <div className="d-flex justify-content-center align-items-center gap-1">
        <Button
          text="All"
          active={currentTasks === 'all'}
          onClick={clickAllHandler}
        />
        <Button
          text="Active"
          active={currentTasks === 'active'}
          onClick={clickActiveHandler}
        />
        <Button
          text="Completed"
          active={currentTasks === 'completed'}
          onClick={clickCompletedHandler}
        />
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <Button
          text="Clear completed"
          onClick={clickClearCompletedHandler}
        />
      </div>

    </div>
  );
};
