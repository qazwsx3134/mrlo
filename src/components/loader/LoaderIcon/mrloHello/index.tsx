import {
  component$,
  NoSerialize,
  noSerialize,
  useStore,
  useVisibleTask$,
  type Signal,
} from "@builder.io/qwik";
import gsap from "gsap";
// import GSDevTools from "~/hooks/useGSDevTools";

interface Props {
  onDone?: Signal<boolean>;
}

export default component$<Props>((props) => {
  const timeLineStore = useStore<{ timeLine: NoSerialize<gsap.core.Timeline> }>(
    {
      timeLine: undefined,
    }
  );

  // Init animation
  useVisibleTask$(async () => {
    // await GSDevTools();

    // const devtools = (globalThis as any).GSDevTools as any;
    // gsap.registerPlugin(devtools);
    // gsap.config();

    const loaderTimeline = gsap.timeline({ id: "loaderMrloTL", repeat: -1 });

    loaderTimeline.from("#loaderMrlo", {
      id: "hello-in",
      y: -100,
      opacity: 0,
      duration: 0.6,
      delay: 0.1,
      ease: "elastic.out(1, 0.3)",
    });

    loaderTimeline.to(
      "#loaderMrlo",
      {
        id: "hello-out",
        y: 100,
        opacity: 0,
        duration: 0.4,
        ease: "power4.in",
      },
      ">"
    );
    timeLineStore.timeLine = noSerialize(loaderTimeline);

    // devtools.create({
    //   id: "loaderMrloTL",
    //   animation: loaderTimeline,
    // });
  });

  useVisibleTask$(({ track }) => {
    track(() => props.onDone?.value);

    if (props.onDone?.value) {
      timeLineStore.timeLine?.revert();
    }
  });
  return (
    <div class="flex">
      <img id="loaderMrlo" src="/images/loader/hello.png" alt="MrLo" class="" />
    </div>
  );
});
