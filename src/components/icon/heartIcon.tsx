import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function HeartIcon(
  props: QwikIntrinsicElements["svg"] & {
    variant?: "broken" | "empty" | "filled" | "ecg";
  },
  key: string
) {
  const { variant = "filled", ...rest } = props;

  switch (variant) {
    case "broken":
      return MaterialSymbolsHeartBroken(rest, key);
    case "empty":
      return MaterialSymbolsFavoriteOutlineRounded(rest, key);
    case "ecg":
      return MaterialSymbolsEcgHeartSharp(rest, key);
    case "filled":
      return MaterialSymbolsFavorite(rest, key);
  }
}

export function MaterialSymbolsEcgHeartSharp(
  props: QwikIntrinsicElements["svg"],
  key: string
) {
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
        fill="currentColor"
        d="M16.125 3q2.5 0 4.188 1.85T22 9.25q0 .45-.05.888t-.175.862h-6.25L13.85 8.45h-1.8l-1.35 4.3L9.525 11h-7.3q-.125-.425-.175-.863T2 9.275Q2 6.7 3.675 4.85T7.85 3q1.2 0 2.263.475T12 4.8q.8-.85 1.863-1.325T16.125 3Zm-4.15 18.95L3.7 13.625q-.15-.15-.275-.3T3.175 13H8.45l1.725 2.575h1.775l1.35-4.325L14.45 13h6.35l-.25.3l-.25.3l-8.325 8.35Z"
      ></path>
    </svg>
  );
}

export function MaterialSymbolsHeartBroken(
  props: QwikIntrinsicElements["svg"],
  key: string
) {
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
        fill="currentColor"
        d="M12.025 21.925q-3.35-3.375-5.338-5.45t-3.025-3.45q-1.037-1.375-1.35-2.35T2 8.5q0-2.3 1.6-3.9T7.5 3q1.125 0 2.175.412T11.55 4.6L10 10h3l-.85 8.375L15 9h-3l1.775-5.3q.625-.35 1.313-.525T16.5 3q2.3 0 3.9 1.6T22 8.5q0 1.2-.325 2.2T20.3 13.088q-1.05 1.387-3.025 3.45t-5.25 5.387Z"
      ></path>
    </svg>
  );
}

export function MaterialSymbolsFavorite(
  props: QwikIntrinsicElements["svg"],
  key: string
) {
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
        fill="currentColor"
        d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.388 2.25t-1.362 2.412q-.975 1.313-2.625 2.963T13.45 19.7L12 21Z"
      ></path>
    </svg>
  );
}

export function MaterialSymbolsFavoriteOutlineRounded(
  props: QwikIntrinsicElements["svg"],
  key: string
) {
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
        fill="currentColor"
        d="m10.65 19.8l-1.725-1.575q-2.65-2.425-4.788-4.813T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.538t2.5-.562q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.575.55-1.35.55t-1.35-.55Zm.4-13.05q-.725-1.025-1.55-1.563t-2-.537q-1.5 0-2.5 1t-1 2.5q0 1.3.925 2.763t2.213 2.837q1.287 1.375 2.65 2.575T12 18.3q.85-.775 2.213-1.975t2.65-2.575q1.287-1.375 2.212-2.837T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2 .537T12.95 6.75q-.175.25-.425.375T12 7.25q-.275 0-.525-.125t-.425-.375Zm.95 4.725Z"
      ></path>
    </svg>
  );
}
