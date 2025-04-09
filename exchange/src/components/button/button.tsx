// interface ButtonProps {
//   name: string;
//   onClick?: () => void;
// }

const Button = ({
  name,
  onClick,
  selected,
}: {
  name: string;
  onClick: () => void;
  selected?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: selected ? "#ccc" : "#fff" }}
    >
      {name}
    </button>
  );
};
export default Button;
