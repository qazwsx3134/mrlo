import { component$, useSignal, $, useStore } from "@builder.io/qwik";

// import { appContext } from "~/routes/layout";
import { subtractFromNow } from "~/utils/dayjs";
import { ArrowLeftLine } from "../icon/arrowLeftLine";

import { GroupIcon } from "../icon/groupIcon";
import InputIcon from "../icon/inputIcon";
import { SmileIcon } from "../icon/smileIcon";
import { TeddyBearIcon } from "../icon/teddyIcon";
import Message from "./message";

export type chatMessage = {
  id?: string;
  name: string;
  messages: (
    | string
    | {
        url: string;
      }
  )[];
  color?: string;
  time?: string;
  icons?: string[];
};

export default component$(() => {
  // const context = useContext(appContext);
  const collapsed = useSignal(false);
  const chatList = useStore<chatMessage[]>(
    [
      {
        name: "MrLo",
        color: "text-orange-500",
        messages: [
          "Hello",
          {
            url: "./images/lo-laugh.webp",
          },
        ],
        time: subtractFromNow(3, "minute"),
      },
      {
        name: "MrLo",
        color: "text-orange-500",
        messages: [
          "world",
          {
            url: "./images/test.gif",
          },
        ],
        time: subtractFromNow(2, "minute"),
      },
    ],
    { deep: true }
  );

  const toggleCollapsed = $(() => {
    collapsed.value = !collapsed.value;
  });

  return (
    <>
      {collapsed.value ? (
        <div
          class="absolute right-2 top-3 w-8 h-8 flex items-center justify-center text-sm  cursor-pointer hover:bg-buttonHover rounded-md"
          onClick$={toggleCollapsed}
        >
          <ArrowLeftLine class="text-lg text-white" />
        </div>
      ) : (
        <aside class="relative flex flex-col min-h-screen min-w-[340px] w-full grow border-l border-gray-200 ">
          {/* TOP */}
          <div class="absolute z-10 w-full flex items-center justify-between px-2 py-2 border-b bg-white border-gray-200">
            <div
              class="px-1 py-2  rounded-md text-xs font-semibold cursor-pointer  hover:bg-buttonHover"
              onClick$={toggleCollapsed}
            >
              <ArrowLeftLine class="text-lg rotate-180" />
            </div>
            <div>
              <span class="text-xs font-medium">實況聊天室</span>
            </div>
            <div>
              <GroupIcon class="text-xl" />
            </div>
          </div>
          <section
            class="absolute flex left-0 top-12 w-full bg-white overflow-y-auto overflow-x-hidden"
            style={{
              height: "calc(100vh - 185px)",
            }}
          >
            {/* CHAT */}
            <div class="flex flex-col w-full h-full my-2">
              <Message chatMessages={chatList} />
            </div>
          </section>
          {/* INPUT CONTAINER*/}
          <div class="absolute left-0 bottom-12 h-[90px] w-full z-10 px-2 pb-2">
            {/* input */}
            <div class="relative w-full h-full flex flex-col items-center justify-center">
              <div class="flex w-full">
                <div class="flex-grow flex items-center bg-white rounded-md max-h-10 p-2 border border-gray-800 focus-within:border-orange-500 focus-within:border-[3px]">
                  <input
                    class="h-8 w-full grow shrink pl-2 text-[13px] focus:outline-none"
                    type="text"
                    name="search"
                    placeholder="傳送訊息"
                    autoComplete="off"
                    id=""
                  />
                  <InputIcon size="md">
                    <SmileIcon q:slot="icon" class="text-xl stroke-[5px]" />
                  </InputIcon>
                </div>
              </div>

              <div class="flex items-center justify-between w-full h-full pl-[6px] pt-2">
                <div class="flex items-center justify-between pr-2 rounded-md hover:bg-buttonHover cursor-pointer">
                  <InputIcon size="md">
                    <TeddyBearIcon q:slot="icon" />
                  </InputIcon>
                  <span class="text-gray-500 text-sm font-semibold">100萬</span>
                </div>
                <button
                  type="button"
                  class="py-2 px-2 bg-orange-500 hover:bg-orange-700 text-white font-semibold text-xs rounded-md"
                >
                  聊天
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}
    </>
  );
});
