import { component$ } from "@builder.io/qwik";

interface Props {
  color?: "black" | "white";
}

export default component$<Props>((props) => {
  const color = props?.color === "white" ? "text-white" : "";
  return (
    <>
      <i class={`fas fa-arrow-left ${color}`}></i>
      <i class={`fas fa-slash rotate-[52deg] -ml-1 ${color}`}></i>
    </>
  );
});
