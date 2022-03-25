type Props = {
  onClick: () => void;
  buttonText: string;
};

function Button({ onClick, buttonText }: Props) {
  return <button onClick={onClick}>{buttonText}</button>;
}

export default Button;
