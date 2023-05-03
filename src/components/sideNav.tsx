import { component$, useSignal, $ } from "@builder.io/qwik";

// import { appContext } from "~/routes/layout";
import Channels from "./channels";
import { ArrowLeftLine } from "./icon/arrowLeftLine";

export default component$(() => {
  // const context = useContext(appContext);
  const collapsed = useSignal(false);

  const toggleCollapsed = $(() => {
    collapsed.value = !collapsed.value;
  });

  return (
    <nav
      class={`flex flex-col ${
        collapsed.value ? "max-w-[50px]" : "max-w-[240px]"
      } w-full grow bg-darkGray overflow-x-hidden overflow-y-auto`}
      style={{
        height: "calc(100vh - 48px)",
      }}
    >
      <div
        class={`flex items-center ${
          collapsed.value ? "justify-around" : "justify-between"
        } px-2 py-3 `}
      >
        {!collapsed.value && <p class="text-lg font-semibold">為您特選</p>}
        <div
          class="px-1 py-2 rounded-md text-xs font-semibold cursor-pointer  hover:bg-buttonHover"
          onClick$={toggleCollapsed}
        >
          <ArrowLeftLine class={`text-lg stroke-3 ${collapsed.value ? "rotate-180" : ""}`} />
        </div>
      </div>
      <Channels collapsed={collapsed.value} />
    </nav>
  );
});
