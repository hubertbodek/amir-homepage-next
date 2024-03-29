interface SvgProps {
  fill?: string
}

export default function PerforationPattern({ fill = 'fill-black' }: SvgProps) {
  return (
    <svg width="100%" height="100%">
      <pattern
        id="pattern-circles"
        x="0"
        y="0"
        width="15"
        height="15"
        patternUnits="userSpaceOnUse"
        patternContentUnits="userSpaceOnUse"
      >
        <circle id="pattern-circle" cx="10" cy="10" r="1.5" className={fill}></circle>
      </pattern>
      <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
    </svg>
  )
}
