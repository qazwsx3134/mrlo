import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
// import { appContext } from "~/routes/layout";
import { CrownIcon } from "./icon/crownIcon";
import { InboxIcon } from "./icon/inboxIcon";
import { MessageBoxIcon } from "./icon/messageBox";
import { TwitchIcon } from "./icon/twichIcon";
import HeaderInput from "./input/headerInput";

export default component$(() => {
  // const context = useContext(appContext);

  return (
    <header class="fixed w-full z-40">
      <nav class="z-50 h-12 block bg-gray-100 shadow-sm ">
        <div class="flex flex-nowrap h-full bg-white">
          {/* Left */}
          <div class="text-3xl grow-[1] shrink-[2] w-full flex items-stretch justify-start">
            <div class="flex items-center">
              <Link href="/">
                <div class="p-2 inline-flex">
                  <TwitchIcon class="text-orange-500" />
                </div>
              </Link>

              <button
                type="button"
                class="lg:p-3 md:p-1 mx-1 hover:text-orange-500"
              >
                <p class="text-lg font-semibold">追隨中</p>
              </button>
              <button
                type="button"
                class="lg:p-3 md:p-1 mx-1 hover:text-orange-500"
              >
                <p class="text-lg font-semibold">瀏覽</p>
              </button>
            </div>
          </div>
          {/* Middle */}
          <div class="grow-[2] shrink-[1] w-full flex items-center justify-center">
            <HeaderInput />
          </div>
          {/* Right */}
          <div class="grow-[1] shrink-[2] w-full flex items-stretch justify-end">
            <div class="flex items-center">
              <button
                type="button"
                class="p-1 my-1 mx-1 rounded-md hover:bg-buttonHover"
              >
                <CrownIcon class="text-2xl stroke-2" />
              </button>
              <button
                type="button"
                class="p-1 my-1 mx-1 rounded-md hover:bg-buttonHover"
              >
                <InboxIcon class="text-2xl stroke-2" />
              </button>
              <button
                type="button"
                class="p-1 my-1 mx-1 rounded-md hover:bg-buttonHover"
              >
                <MessageBoxIcon class="text-2xl" />
              </button>
              <button
                type="button"
                class="py-2 px-3 bg-gray-200 hover:bg-buttonHover text-black flex items-center font-medium text-sm rounded-md mr-2"
              >
                <i class="fas fa-trophy mr-1"></i>
                <p>購買周邊</p>
              </button>
              <button
                type="button"
                class="py-2 px-3 bg-orange-500 hover:bg-orange-700 text-white font-medium text-sm rounded-md mr-2"
              >
                註冊
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
});
