// ============================== ACCORDION HEADER ============================== //

export const AccordionHeader = () => {
  // RENDER
  return (
    <h2 className="accordion-header">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        What needs to be done?
      </button>
    </h2>
  );
};
