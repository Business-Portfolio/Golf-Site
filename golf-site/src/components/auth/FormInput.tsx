interface FormInputProps {
    label: string
    id: string
    name: string
    type: string
    autoComplete?: string
    required?: boolean
    placeholder?: string
}
  
export default function FormInput({
    label,
    id,
    name,
    type,
    autoComplete,
    required = false,
    placeholder,
}: FormInputProps) {
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="mt-1">
          <input
            id={id}
            name={name}
            type={type}
            autoComplete={autoComplete}
            required={required}
            placeholder={placeholder}
            className="block w-full rounded-md border-gray-300 p-2 shadow-sm text-black focus:ring-emerald-600 sm:text-sm"
          />
        </div>
      </div>
    )
}