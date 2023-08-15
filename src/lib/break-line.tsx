export const handleBreakLine = (text: string) => {
  const lines = text.split('\n')

  if (lines.length === 1) return text

  return lines.map((line, idx) => (
    <span key={`line--${idx}`} className="block mb-4">
      {line}
      <br />
    </span>
  ))
}
