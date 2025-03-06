interface FormInputProps {
    label: string
    id: string
    type: string
    error?: string
}
  
export default function FormInput({
    label,
    id,
    type,
    error,
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
            {...inputProps}
            className="block w-full rounded-md border border-gray-300 p-2 shadow-sm text-black 
             focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600 focus:outline-none 
             sm:text-sm"
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