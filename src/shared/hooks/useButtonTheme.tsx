const styles = {
  primary: 'bg-tertiary text-light transition hover:opacity-80 px-4',
  secondary: 'btn-secondary text-light',
  filled:
    'text-xl px-4 py-2 border border-light bg-gradient-to-r from-primary-100 to-tertiary transition-[background-size] ease-out duration-200 bg-no-repeat bg-[length:0%_100%] hover:bg-[length:100%_100%]',
} as const

export default function useButtonTheme(theme: keyof typeof styles) {
  return styles[theme]
}
