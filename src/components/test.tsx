import { component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const show = useSignal(false);
  return (
    <div>
      <button onClick$={() => (show.value = !show.value)}>Toggle</button>
      {show.value && <div>Only show when it's visible</div>}
    </div>
  );
});
