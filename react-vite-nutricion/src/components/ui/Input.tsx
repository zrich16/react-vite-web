interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        {...props}
        className="rounded-lg border border-slate-300 px-3 py-2
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

export default Input
