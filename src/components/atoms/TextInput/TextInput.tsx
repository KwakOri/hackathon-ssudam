interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextInput = ({ ...props }: TextInputProps) => {
  return (
    <input
      type="text"
      className={
        " text-label-strong placeholder-label-alternative bg-transparent outline-none"
      }
      {...props}
    />
  );
};

export default TextInput;
