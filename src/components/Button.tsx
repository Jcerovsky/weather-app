interface Props {
  onClick: () => void;
  value: string;
}

function Button({ onClick, value }: Props) {
  return (
    <button className="btn" onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;
