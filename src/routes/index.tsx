import {
  component$,
  useSignal,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import InfoFooter from "~/components/infoFooter";

import styles from "./index.css?inline";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import GSDevTools from "~/hooks/useGSDevTools";

export default component$(() => {
  useStylesScoped$(styles);
  const containerRef = useSignal<HTMLDivElement>();

  useVisibleTask$(async ({ cleanup }) => {
    await GSDevTools();

    const devtools = (globalThis as any).GSDevTools as any;
    gsap.registerPlugin(devtools, ScrollTrigger);

    ScrollTrigger.defaults({
      scroller: containerRef.value,
    });

    const panels = gsap.utils.toArray(".panel");

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel as gsap.DOMTarget,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#p1",
        start: "top 80%",
        end: "top 20%",
        markers: {
          startColor: "green",
          endColor: "red",
          fontSize: "14px",
        },
      },
    });

    tl.to("#p1", {
      x: 900,
      rotation: 360,
      duration: 1,
    });

    devtools.create({
      id: "section1Timeline",
      animation: tl,
    });
  });
  return (
    <div class="relative flex flex-col grow bg-lightGray">
      <div
        id="container"
        ref={containerRef}
        class="w-full h-[2000px] overflow-auto noScrollContainer"
      >
        <div id="section1" class="h-screen bg-black panel"></div>
        <div id="section2" class="h-screen bg-blue-200 panel">
          <img src="/images/work/1/1.webp" alt="" class="h-48" id="p1" />
        </div>

        <div class="h-screen bg-green-200 panel">c</div>
        <div class="h-screen bg-yellow-200 panel">d</div>
        <div class="h-screen bg-gray-200 panel">e</div>
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
