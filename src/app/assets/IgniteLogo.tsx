import * as React from 'react'

export function IgniteLogo() {
  return (
    <strong className="flex items-center gap-4 whitespace-nowrap text-sm font-bold text-gray-7 lg:text-2xl">
      <svg
        width={41}
        height={38}
        viewBox="0 0 41 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity={0.5}
          d="M40.065.257L30.26 34.992a.224.224 0 01-.366.094l-6.564-6.228 4.92-17.407c.05-.157-.1-.3-.267-.252L9.636 15.866 3.105 9.67c-.116-.11-.066-.3.1-.347L39.799.004c.166-.031.316.11.266.253z"
          fill="#00B37E"
        />
        <path
          opacity={0.5}
          d="M23.33 28.858l-2.526 8.987a.224.224 0 01-.366.095L.063 18.625c-.116-.11-.066-.3.1-.347l9.473-2.412L23.33 28.858z"
          fill="#00B37E"
        />
        <path
          d="M28.248 11.451L23.33 28.858 9.635 15.866l18.348-4.667c.166-.047.315.094.265.252z"
          fill="#00B37E"
        />
      </svg>

      <span>DT Money</span>
    </strong>
  )
}
