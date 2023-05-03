import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function InboxIcon(props: QwikIntrinsicElements["svg"], key: string) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      {...props}
      key={key}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 16v8c0 1.5 1.5 3 3 3h16c1.5 0 3-1.5 3-3v-8M5 16h5.5s1.5 3.5 5.5 3.5s5.5-3.5 5.5-3.5H27M5 16L9 5h14l4 11M5 16v3.5M27 16v3.5"
      ></path>
    </svg>
  );
}
