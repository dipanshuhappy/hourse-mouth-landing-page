import * as React from "react"
import { SVGProps } from "react"
const Tick = (props? : SVGProps<SVGSVGElement>) => (
<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    xmlSpace="preserve"
    width="1em"
    height="1em"
    {...props}
  >
    <circle
      style={{
        fill: "#25ae88",
      }}
      cx={25}
      cy={25}
      r={25}
    />
    <path
      style={{
        fill: "none",
        stroke: "#fff",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
      }}
      d="M38 15 22 33l-10-8"
    />
  </svg>
)

export default Tick
