interface Props extends React.HTMLAttributes<HTMLInputElement> {}

const Input: React.FC<Props> = ({ ...props }) => {
  return <input {...props} />;
};

export default Input;
