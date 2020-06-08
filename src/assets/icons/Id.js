import * as React from 'react'

function SvgId(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <circle cx={256} cy={256} r={256} fill="#f0f0f0" />
      <path
        d="M0 256C0 114.616 114.616 0 256 0s256 114.616 256 256"
        fill="#a2001d"
      />
    </svg>
  )
}

export default SvgId