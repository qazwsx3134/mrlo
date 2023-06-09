import {
  component$,
  Slot,
  useStore,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { useContextProvider, createContextId } from "@builder.io/qwik";
import imagesLoaded from "imagesloaded";

import SquareBGLoader from "~/components/loader/background/squareBGLoader";
import Chat from "~/components/chat";
import Header from "~/components/header";
import SideNav from "~/components/sideNav";
import MrloHello from "~/components/loader/LoaderIcon/mrloHello";

interface AppContext {
  theme: "light" | "dark";
}

export const appContext = createContextId<AppContext>("app.context");

export default component$(() => {
  const context = useStore<AppContext>(
    {
      theme: "light",
    },
    { deep: true }
  );
  useContextProvider(appContext, context);

  // close cart modal function
  const onDone = useSignal(false);

  useVisibleTask$(() => {
    const imgLoad = imagesLoaded("#main", { background: true });
    imgLoad.on("done", () => {
      onDone.value = true;
    });
    imgLoad.on("fail", () => {
      onDone.value = true;
    });
    // imgLoad.on("progress", (instance, image) => {
    //   onDone.value = false;
    // })
  });

  return (
    <>
      <main id="main" class="flex flex-col h-full min-h-screen">
        {/* <SquareBGLoader onDone={onDone}>
          <MrloHello q:slot="icon" onDone={onDone} />
        </SquareBGLoader> */}
        <Header />
        <div
          id="mainContainer"
          class="fixed top-12 w-full flex flex-row justify-between"
          style={{
            height: "calc(100vh - 48px)",
          }}
        >
          {/* left */}
          <div id="sideNavContainer" class="flex basis-[60px]">
            <SideNav />
          </div>
          {/* middle */}
          <div class="flex grow bg-lightGray">
            <Slot />
          </div>

          {/* right */}
          <div
            id="chatContainer"
            class="flex basis-50 relative bg-white h-full"
          >
            <Chat />
          </div>
        </div>
      </main>
    </>
  );
});
