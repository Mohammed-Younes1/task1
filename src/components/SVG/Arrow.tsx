import * as React from "react"
import { SVGProps } from "react"

const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg width={36} height={114} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M18 3v100M3 95.484l15 15 15-15"
      stroke="#FFF"
      strokeWidth={6}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Arrow
