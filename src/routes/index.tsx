import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import InfoFooter from "~/components/infoFooter";
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
