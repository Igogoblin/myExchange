interface ButtonProps {
  name: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
      {name}
    </button>
  );
};
export default Button;
