// hooks
import { useAppState } from 'hooks';

// components
import { ListItem } from 'components';

// css
import './list.css';

// ============================== LIST ============================== //

export const List = () => {
  const { getTodos } = useAppState();

  const todos = getTodos();

  // RENDER
  return (
    <div
      id="collapseOne"
      className="accordion-collapse collapse show"
    >
      <div className="accordion-body">

        {/* NO DATA */}
        { todos.length === 0 && <p className="text-danger"><strong>No todos</strong></p> }

        {/* DATA */}
        { todos.length > 0 && (
          <div>
            {
              todos.map((item) => (
                <ListItem key={item.id} item={item} />
              ))
            }
          </div>
        ) }

      </div>
    </div>
  );
};
