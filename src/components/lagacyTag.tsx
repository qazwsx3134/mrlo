import { component$, Slot } from "@builder.io/qwik";

interface TagProps {
  size?: "sm" | "md" | "lg";
}

export default component$<TagProps>((props) => {
  const size = props.size ?? "md";
  const fontSize =
    size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-base";
  const padding =
    size === "sm"
      ? "py-0.5 px-1.5"
      : size === "md"
      ? "py-0.5 px-2"
      : "py-1 px-2.5";

  return (
    <span
      class={`leading-5 inline-flex items-center font-bold uppercase ${padding} rounded-full ${fontSize} bg-gray-300 text-gray-700 mr-1`}
    >
      <Slot name="children" />
    </span>
  );
});
