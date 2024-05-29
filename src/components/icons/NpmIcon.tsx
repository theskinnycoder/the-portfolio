export const NpmIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M1 8h22v7h-12v2h-4v-2h-6z" />
      <path d="M7 8v7" />
      <path d="M14 8v7" />
      <path d="M17 11v4" />
      <path d="M4 11v4" />
      <path d="M11 11v1" />
      <path d="M20 11v4" />
    </svg>
  );
};
