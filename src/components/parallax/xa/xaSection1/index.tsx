import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div
      id="xaHero"
      class="relative max-w-[1920px] overflow-hidden pb-28 aspect-video w-full"
    >
      <div class="layer-bg xa-parallax absolute" data-depth="0.10">
        <img src="/images/work/xa/bg.webp" alt="" class="" />
      </div>
      <div
        class="layer-1 xa-parallax absolute z-10"
        data-depth="0.20"
        style={{
          top: "29%",
          left: "2.2%",
          width: "11%",
        }}
      >
        <img src="/images/work/xa/lantern.webp" alt="" class=" " />
      </div>
      <div class="layer-2 xa-parallax" data-depth="0.50"></div>
      <div class="layer-3 xa-parallax" data-depth="0.80"></div>
      <div class="layer-4 xa-parallax" data-depth="1.00"></div>
    </div>
  );
});
