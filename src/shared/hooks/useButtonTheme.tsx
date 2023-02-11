const styles = {
  primary:
    'bg-gray-900 text-gray-100 text-light transition hover:opacity-90 px-4 shadow-lg shadow-sky-900/20',
  light: 'bg-gray-100 text-gray-900 transition hover:opacity-90 px-4 shadow-inner',
  secondary: 'btn-secondary text-light',
  filled:
    'text-xl px-4 py-2 border border-secondary bg-gradient-to-r from-primary-100 to-secondary transition-[background-size] ease-out duration-200 bg-no-repeat bg-[length:0%_100%] hover:bg-[length:100%_100%]',
} as const

export default function useButtonTheme(theme: keyof typeof styles) {
  return styles[theme]
}
