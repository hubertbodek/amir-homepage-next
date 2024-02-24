export interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  label?: string | React.ReactNode
  containerClassName?: string
  overrideClassName?: string
}

export default function TextArea({
  label,
  overrideClassName,
  containerClassName = '',
  id,
  ...props
}: TextAreaProps) {
  return (
    <div className={`mb-4 flex flex-col ${containerClassName}`}>
      <label htmlFor={id} className="mb-1">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        className={`${
          overrideClassName ?? 'border-grey placeholder:text-grey rounded border px-4 py-2 md:py-3'
        } ${props.className ?? ''}`}
        {...props}
      />
    </div>
  )
}
