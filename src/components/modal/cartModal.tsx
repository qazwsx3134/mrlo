import { component$, type PropFunction } from "@builder.io/qwik";

interface Props {
  onClose$?: PropFunction<() => void>;
}

export default component$<Props>((props) => {
  return (
    <div class="absolute top-0 right-0 w-full h-screen bg-gWhite z-50 flex flex-col gap-4 p-4">
      <div class="flex items-center justify-between pb-4 border-b text-4xl">
        <h1>Cart</h1>
        <i
          class="fa-regular fa-circle-xmark cursor-pointer"
          onClick$={props.onClose$}
        ></i>
      </div>
    </div>
  );
});
