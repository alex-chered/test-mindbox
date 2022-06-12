// components
import {
  AccordionHeader,
  List,
  AccordionMenu,
  AddInput
} from 'components';

// css
import './main.css';

// ============================== MAIN ============================== //

export const Main = () => {
  // RENDER
  return (
    <div className="container-sm">
      <h1 className="d-flex justify-content-center">
        todos
      </h1>
      <div className="d-flex flex-column align-items-center">
        <div className="accordion content">

          <div className="accordion-item">
            <AccordionHeader />
            <List />
            <AccordionMenu />
          </div>

          <AddInput />

        </div>

      </div>
    </div>
  );
};
