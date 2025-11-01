import { Activity } from 'react'

function LogoSvg() {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <>
    <svg
      width={29}
      height={20}
      viewBox="0 0 49 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 0a1 1 0 011 1v7.396c0 .223.27.335.427.177L26.414.586A2 2 0 0127.828 0h8.758a1 1 0 01.707.293l3 3a1 1 0 010 1.414l-3.866 3.866a.25.25 0 00.176.427h7.983a1 1 0 01.707.293l3 3a1 1 0 010 1.414l-3.94 3.94a.5.5 0 000 .707l3.233 3.232a4.828 4.828 0 010 6.828l-11 11a2 2 0 01-1.414.586H32a1 1 0 01-1-1v-7.396a.25.25 0 00-.427-.177l-7.987 7.987a2 2 0 01-1.414.586h-8.758a1 1 0 01-.707-.293l-3-3a1 1 0 010-1.414l3.866-3.866a.25.25 0 00-.177-.427H4.414a1 1 0 01-.707-.293l-3-3a1 1 0 010-1.414l3.94-3.94a.5.5 0 000-.707l-3.233-3.232a4.829 4.829 0 010-6.828l11-11A2 2 0 0113.828 0H17zm3.071 9a5.002 5.002 0 00-3.536 1.465L5.854 21.146a.5.5 0 00.353.854h14.586a.5.5 0 01.354.854l-7.293 7.293a.5.5 0 00.353.853h14.722a5.002 5.002 0 003.536-1.465l10.681-10.681a.5.5 0 00-.272-.848L42.793 18H28.207a.5.5 0 01-.354-.854l7.294-7.292A.5.5 0 0034.793 9H20.071z"
        fill="#6366f1"
      />
    </svg>
  )
}

interface LogoProps {
  size?: 'sm' | 'default'
}

export function Logo({ size = 'default' }: LogoProps) {
  return (
    <div className="flex items-center gap-x-3">
      <LogoSvg />

      <Activity mode={size === 'sm' ? 'hidden' : 'visible'}>
        <span className="text-xl font-bold tracking-wider">PSoft Hub</span>
      </Activity>
    </div>
  )
}
