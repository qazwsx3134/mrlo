import { component$, useSignal, $, useStore } from "@builder.io/qwik";
import { v4 as uuidv4 } from "uuid";

// import { appContext } from "~/routes/layout";
import { subtractFromNow } from "~/utils/dayjs";
import { ArrowLeftLine } from "../icon/arrowLeftLine";

import { GroupIcon } from "../icon/groupIcon";

import Message from "./message";
import ChatInput from "./chatInput";
import { JSX } from "@builder.io/qwik/jsx-runtime";
import Moderator from "../icon/moderator";
// import { useLocation } from "@builder.io/qwik-city";

export type MessageType = string | { id: string; url?: string };

export type ChatMessage = {
  id?: string;
  name: string;
  messages: MessageType[];
  color?: string;
  time?: string;
  icons?: JSX.Element[];
};

const defaultChatMessage: ChatMessage[] = [
  {
    name: "MrLo",
    color: "text-red-500",
    messages: [
      "Hello",
      {
        id: uuidv4(),
        url: `/images/emojis/mrlo/lo-laugh.webp`,
      },
    ],
    icons: [<Moderator />],
    time: subtractFromNow(3, "minute"),
  },
  {
    name: "MrLo",
    color: "text-red-500",
    messages: [
      "world",
      {
        id: uuidv4(),
        url: `/images/emojis/test/test.gif`,
      },
    ],
    icons: [<Moderator />],
    time: subtractFromNow(2, "minute"),
  },
  {
    name: "MrLo",
    color: "text-red-500",
    messages: [
      "worldasdasdasdasdasdasdasd",
      {
        id: uuidv4(),
        url: `/images/emojis/test/test.gif`,
      },
      {
        id: uuidv4(),
        url: `/images/emojis/test/test.gif`,
      },
    ],
    icons: [<Moderator />],
    time: subtractFromNow(2, "minute"),
  },
];

export default component$(() => {
  // const context = useContext(appContext);
  // const location = useLocation();

  const collapsed = useSignal(false);
  const inputText = useStore<{
    value: MessageType[];
  }>(
    {
      value: [],
    },
    { deep: true }
  );

  const chatList = useStore<{ value: ChatMessage[] }>(
    {
      value: defaultChatMessage,
    },
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
              <Message chatMessages={chatList.value} />
              {/* {inputText.value.map((item) => {
                console.log(item);
                if (typeof item === "string") {
                  return item;
                } else {
                  return <img src={item.url} alt="" class="h-8 w-8" />;
                }
              })} */}
            </div>
          </section>
          {/* INPUT CONTAINER*/}
          <div class="absolute left-0 bottom-12 h-[90px] w-full z-10 px-2 pb-2">
            {/* input */}
            <ChatInput inputText={inputText} chatList={chatList} />
          </div>
        </aside>
      )}
    </>
  );
});
