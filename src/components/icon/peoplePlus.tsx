import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function PeoplePlusIcon(
  props: QwikIntrinsicElements["svg"],
  key: string
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
      key={key}
    >
      <g fill="none">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14ZM4 40.8V42h30v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C27.92 28 25.68 28 21.2 28h-4.4c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C4 34.08 4 36.32 4 40.8Z"
        ></path>
        <path d="M38 13v12v-12Zm-6 6h12h-12Z" clipRule="evenodd"></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M38 13v12m-6-6h12"
        ></path>
      </g>
    </svg>
  );
}
