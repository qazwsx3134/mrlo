import { component$, useVisibleTask$ } from "@builder.io/qwik";

import { gsap } from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

export default component$(() => {

  useVisibleTask$(() => {
    gsap.registerPlugin(scrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        end: "+=3000 top",
        scrub: true,
        invalidateOnRefresh: true,
        markers: {
          startColor: "green",
          endColor: "red",
          fontSize: "14px",
        },
      },
    });
    gsap.utils.toArray(".xa-parallax").forEach((layer) => {
      const div = layer as HTMLDivElement;
      const depth = div.dataset.depth;
      console.log(depth);
      const movement = -(div.offsetHeight * parseFloat(depth || "0"));
      tl.to(div, { y: movement, ease: "none" }, 0);
    });
    gsap.fromTo(
      ".layer-1",
      {
        rotate: 30,
        duration: 3,
      },
      {
        rotate: -30,
        duration: 3,
        ease: "back.inOut",
        yoyo: true,
        repeat: -1,
      }
    );
  });
  return (
    <div
      id="xaHero"
      class="relative max-w-[1920px] overflow-hidden aspect-video w-full"
    >
      <div class="layer-bg xa-parallax absolute" data-depth="0.10">
        <img src="/images/work/xa/bg.webp" alt="" class="" />
      </div>
      <div
        class="layer-1 xa-parallax absolute z-10 origin-[45%_1%]"
        data-depth="0.50"
        style={{
          top: "29%",
          left: "2.2%",
          width: "11%",
        }}
      >
        <img src="/images/work/xa/lantern.webp" alt="" class=" " />
      </div>
      <div
        class="layer-2 xa-parallax absolute z-10"
        data-depth="0.35"
        style={{
          bottom: "8%",
          right: "37.8%",
          width: "21%",
        }}
      >
        <img src="/images/work/xa/sandshrew.webp" alt="" class="" />
      </div>
      <div
        class="layer-3 xa-parallax absolute z-10"
        data-depth="0.20"
        style={{
          bottom: "0%",
          right: "15%",
          width: "26.8%",
        }}
      >
        <img src="/images/work/xa/sekiro.webp" alt="" class="" />
      </div>
      <div
        class="layer-4 xa-parallax absolute z-10"
        data-depth="0.20"
        style={{
          bottom: "0%",
          right: "0%",
          width: "21.8%",
        }}
      >
        <img src="/images/work/xa/woman.webp" alt="" class="" />
      </div>
    </div>
  );
});
