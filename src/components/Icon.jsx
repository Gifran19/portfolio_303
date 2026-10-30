const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

const paths = {
  code: <><path d="m8 8-4 4 4 4" /><path d="m16 8 4 4-4 4" /><path d="m13.5 5-3 14" /></>,
  design: <><path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-.9 2-1.8 0-1.3-1-1.4-1-2.5 0-.9.7-1.7 1.7-1.7H17a4 4 0 0 0 4-4C21 6.5 17 3 12 3Z" /><circle cx="7.5" cy="11" r=".6" /><circle cx="10" cy="7.5" r=".6" /><circle cx="14.5" cy="7.5" r=".6" /></>,
  tools: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 21h8M12 18v3" /><path d="m8 11 2.5 2.5L16 8" /></>,
  people: <><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17" cy="9" r="2.3" /><path d="M16.5 14.2c2.6.3 4.5 2.4 4.5 5.1" /></>,
  build: <><path d="M14 6 18 10" /><path d="m4 20 1-4 10-10 3 3L8 19l-4 1Z" /></>,
  learn: <><path d="M3 7l9-4 9 4-9 4-9-4Z" /><path d="M7 9.5V15c0 1.5 2.2 3 5 3s5-1.5 5-3V9.5" /></>,
  grow: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
  open: <><circle cx="12" cy="12" r="9" /><path d="m9 12 2 2 4-4" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 11v6M8 7.5v.01M12 17v-6m0 3c0-2 1-3 2.5-3s2.5 1 2.5 3v3" /></>,
  github: <><path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.2c0-1 .1-1.4-.5-2 2.800-.3 5.500-1.400 5.500-6a4.600 4.600 0 0 0-1.300-3.200 4.300 4.300 0 0 0-.1-3.200s-1-.3-3.400 1.300a11.700 11.700 0 0 0-6.200 0C6.600 3.100 5.600 3.400 5.600 3.400a4.300 4.300 0 0 0-.1 3.200A4.600 4.600 0 0 0 4.200 9.800c0 4.600 2.700 5.700 5.500 6-.6.600-.6 1.200-.5 2V21" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.500 6.500v.01" /></>,
  copy: <><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a2 2 0 0 1 2-2h9" /></>,
  arrowUp: <><path d="M12 19V5M5 12l7-7 7 7" /></>,
  arrowRight: <><path d="M5 12h14M13 5l7 7-7 7" /></>,
  close: <><path d="M6 6l12 12M18 6 6 18" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  download: <><path d="M12 4v11M7 11l5 5 5-5M5 20h14" /></>,
  external: <><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></>,
  video: <><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></>,
  pdf: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="13" y2="17" /></>,
  document: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></>,
  presentation: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>,
  link: <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></>,
  calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>,
}

export default function Icon({ name, size = 22, ...props }) {
  return (
    <svg {...base} width={size} height={size} {...props}>
      {paths[name] ?? null}
    </svg>
  )
}

