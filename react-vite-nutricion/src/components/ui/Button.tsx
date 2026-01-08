interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="w-full rounded-lg bg-blue-600 py-2 text-white
                 font-semibold hover:bg-blue-700 transition"
    >
      {text}
    </button>
  )
}

export default Button
