// css
import './button.css';

// ============================== BUTTON PROPS ============================== //

interface ButtonProps {
  text: string;
  active?: boolean;
  onClick?: () => void;
}

// ============================== BUTTON ============================== //

export const Button = (props: ButtonProps) => {
  const { text, active = false, onClick } = props;

  // RENDER
  return (
    <button
      className={`btn btn-outline-secondary my-button ${active ? 'active' : ''}`}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
