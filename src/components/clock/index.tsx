import { $, component$, useVisibleTask$, useSignal } from "@builder.io/qwik";

/**
 * Create a component that displays time
 */

export default component$(() => {
  const date = useSignal(new Date());

  const refreshTime = $(() => {
    date.value = new Date();
  });

  useVisibleTask$(() => {
    const timer = setInterval(refreshTime, 1000);
    return () => clearInterval(timer);
  });

  return (
    <span>
      {date.value.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })}
    </span>
  );
});
