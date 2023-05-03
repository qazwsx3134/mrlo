import { component$, $, useStore } from "@builder.io/qwik";

// import { appContext } from "~/routes/layout";
import Channels from "./channels";
import { ArrowLeftLine } from "./icon/arrowLeftLine";

export default component$(() => {
  // const context = useContext(appContext);
  const collapsed = useStore({
    value: false,
  });

  const toggleCollapsed = $(() => {
    collapsed.value = !collapsed.value;
  });

  return (
    <div
      class={[
        "flex",
        "flex-col",
        "w-full",
        "grow",
        "bg-darkGray",
        "overflow-x-hidden",
        "overflow-y-auto",
        collapsed.value ? "max-w-[60px]" : "max-w-[240px]",
      ]}
      style={{
        height: "calc(100vh - 48px)",
      }}
    >
      <div
        class={[
          "flex",
          "items-center",
          "px-2",
          "py-3",
          collapsed.value ? "justify-around" : "justify-between",
        ]}
      >
        {!collapsed.value && <p class="text-lg font-semibold">為您特選</p>}
        <div
          class="px-1 py-2 rounded-md text-xs font-semibold cursor-pointer  hover:bg-buttonHover"
          onClick$={toggleCollapsed}
        >
          <ArrowLeftLine
            class={["text-lg", "stroke-3", collapsed.value ? "rotate-180" : ""]}
          />
        </div>
      </div>
      <Channels collapsed={collapsed.value} />
    </div>
  );
});
