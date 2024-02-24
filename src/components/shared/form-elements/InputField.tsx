export interface FieldInputProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string | React.ReactNode
  containerClassName?: string
  overrideClassName?: string
}

export default function InputField({
  label,
  overrideClassName,
  containerClassName = '',
  id,
  type,
  ...props
}: FieldInputProps) {
  return (
    <div className={`mb-4 flex flex-col ${containerClassName}`}>
      <label htmlFor={id} className="mb-1">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type ?? 'text'}
        className={`${
          overrideClassName ?? 'border-grey placeholder:text-grey rounded border px-4 py-2 md:py-3'
        } ${props.className ?? ''}`}
        {...props}
      />
    </div>
  )
}
