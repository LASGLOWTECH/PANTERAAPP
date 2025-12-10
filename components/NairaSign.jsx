// QuickFlipNaira.jsx
export default function QuickFlipNaira({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* flip horizontally and translate back into view */}
      <g transform="scale(-1 1) translate(-20 0)">
        <path d="M4 2v16h2l8-12v12h2V2h-2L6 14V2H4zm-2 5v2h16V7H2zm0 4v2h16v-2H2z" />
      </g>
    </svg>
  );
}
