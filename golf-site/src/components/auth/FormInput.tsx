interface FormInputProps {
    label?: string
    id: string
    type: string
    placeholder?: string
    error?: string
}
  
export default function FormInput({
    label,
    id,
    type,
    error,
    placeholder,
    ...inputProps
}: FormInputProps) {
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="mt-1">
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            {...inputProps}
            className="block w-full rounded-full border border-gray-300 py-3 pr-35 pl-1.5 shadow-sm text-black 
             focus:border-emerald-200 focus:ring-2 focus:ring-emerald-200 focus:outline-none text-sm"
          />
        </div>
        {error && (
        <p className="mt-1 text-xs text-red-500" role="alert">
          {error}
        </p>
        )}
      </div>
    )
}