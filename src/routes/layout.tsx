import { component$, Slot, useStore } from "@builder.io/qwik";

import { useContextProvider, createContextId } from "@builder.io/qwik";

import Chat from "~/components/chat";
import Header from "~/components/header";
import SideNav from "~/components/sideNav";

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

  return (
    <>
      <main class="flex flex-col h-full min-h-screen">
        <Header />
        <div class="fixed top-12 w-full flex flex-row justify-between">
          {/* left */}
          <div class="flex basis-[60px]">
            <SideNav />
          </div>
          {/* middle */}
          <div class="flex grow bg-lightGray">
            <Slot />
          </div>

          {/* right */}
          <div class="flex basis-0 relative bg-white h-full">
            <Chat />
          </div>
        </div>
      </main>
    </>
  );
});
