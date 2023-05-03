import { QwikIntrinsicElements } from "@builder.io/qwik";

export function TwitchIcon(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props} key={key}><path fill="currentColor" d="M391.17 103.47h-38.63v109.7h38.63ZM285 103h-38.63v109.75H285ZM120.83 0L24.31 91.42v329.16h115.83V512l96.53-91.42h77.25L487.69 256V0Zm328.24 237.75l-77.22 73.12h-77.24l-67.6 64v-64h-86.87V36.58h308.93Z"></path></svg>
  )
}
