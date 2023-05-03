import { QwikIntrinsicElements } from "@builder.io/qwik";

export function ArrowLeftLine(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15" {...props} key={key}><path fill="currentColor" fillRule="evenodd" d="M13 1h1v13h-1V1ZM2.707 8l3.147 3.146l-.708.708L.793 7.5l4.353-4.354l.708.708L2.707 7H12v1H2.707Z" clipRule="evenodd"></path></svg>
  )
}
