import { Slot, component$ } from "@builder.io/qwik";

interface Props {
  size?: "sm" | "md" | "lg";
}

export default component$<Props>((props) => {
  const size = props.size || "lg";
  const sizeMap = {
    sm: "w-[28px] h-[28px] text-base",
    md: "w-[30px] h-[30px] text-lg",
    lg: "w-[32px] h-[32px] text-xl",
  };
  return (
    <div
      class={`${sizeMap[size]} flex items-center justify-center cursor-pointer hover:bg-buttonHover rounded-md`}
    >
      <Slot name="icon" />
    </div>
  );
});
