import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="relative flex flex-col grow bg-lightGray">
      <div
        class="bg-black w-full"
        style={{
          height: "calc(100vh - 140px)",
        }}
      >
        cc
      </div>
      <div class="w-full grow shrink-0 basis-28 bg-purple z-10"></div>
    </div>
  );
});

// Need to use i18n
export const head: DocumentHead = {
  title: "MrLo",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
