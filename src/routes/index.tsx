import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import InfoFooter from "~/components/infoFooter";

import styles from "./index.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="relative flex flex-col grow bg-lightGray">
      <div class="w-full h-[2000px] overflow-auto noScrollContainer">
        <div class="h-[400px] bg-red-200">a</div>
        <div class="h-[400px] bg-blue-200">b</div>
        <div class="h-[400px] bg-green-200">c</div>
        <div class="h-[400px] bg-yellow-200">d</div>
        <div class="h-[400px] bg-gray-200">e</div>
      </div>
      <InfoFooter />
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
