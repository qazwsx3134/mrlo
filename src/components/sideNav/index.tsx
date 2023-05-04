import { component$, $, useSignal } from "@builder.io/qwik";

// import { appContext } from "~/routes/layout";
import Channels from "../channels";
import { ArrowLeftLine } from "../icon/arrowLeftLine";

import styles from "./sideNav.module.css";

export default component$(() => {
  // const context = useContext(appContext);
  const collapsed = useSignal(false);

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
        collapsed.value
          ? styles.containerMaxWidthSmall
          : styles.containerMaxWidthLarge,
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
          collapsed.value ? styles.jusitifyAround : styles.jusitifyBetween,
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
      <Channels collapsed={collapsed} />
    </div>
  );
});
