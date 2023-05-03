import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function CrownIcon(props: QwikIntrinsicElements["svg"], key: string) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
      key={key}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19.2 17L21 7l-6.3 3L12 7l-2.7 3L3 7l1.8 10h14.4Z"
      ></path>
    </svg>
  );
}
