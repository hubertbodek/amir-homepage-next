import { cn } from 'lib/utils'

interface GridProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

export default function Grid({ children, className, ...props }: GridProps) {
  return (
    <div className={cn('grid grid-cols-2 gap-8 lg:grid-cols-3', className)} {...props}>
      {children}
    </div>
  )
}
