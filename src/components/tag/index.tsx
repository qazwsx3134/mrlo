import { component$, Slot } from "@builder.io/qwik";

interface Props {
  color?: "red" | "blue" | "green" | "yellow" | "gray" | "lightGray";
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
}

export default component$<Props>((props) => {
  const { color = "red", rounded = "md" } = props;

  let colorClass = "";
  switch (color) {
    case "red":
      colorClass = "bg-red-600 hover:bg-red-700";
      break;
    case "blue":
      colorClass = "bg-blue-600 hover:bg-blue-700";
      break;
    case "green":
      colorClass = "bg-green-600 hover:bg-green-700";
      break;
    case "yellow":
      colorClass = "bg-yellow-600 hover:bg-yellow-700";
      break;
    case "gray":
      colorClass = "bg-gray-500 hover:bg-gray-600";
      break;
    case "lightGray":
      colorClass = "bg-gray-300 hover:bg-gray-400";
      break;
    default:
      colorClass = "bg-red-600 hover:bg-red-700";
      break;
  }
  let roundedClass = "";
  switch (rounded) {
    case "sm":
      roundedClass = "rounded-sm";
      break;
    case "md":
      roundedClass = "rounded-md";
      break;
    case "lg":
      roundedClass = "rounded-lg";
      break;
    case "xl":
      roundedClass = "rounded-xl";
      break;
    case "2xl":
      roundedClass = "rounded-2xl";
      break;
    case "3xl":
      roundedClass = "rounded-3xl";
      break;
    case "full":
      roundedClass = "rounded-full";
      break;
    default:
      roundedClass = "rounded-md";
      break;
  }

  return (
    <div class={["px-1", "py-[1px]", colorClass, roundedClass, "text-sm", "text-black", "font-normal", "tracking-wide"]}>
      <Slot />
    </div>
  );
});
