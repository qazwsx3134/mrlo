import { component$ } from "@builder.io/qwik";
import { v4 as uuidv4 } from "uuid";
import type { ChatMessage } from ".";
import Badge from "../icon/badge";
import Emoji from "../icon/emoji";

interface Props {
  chatMessages: ChatMessage[];
}

export default component$<Props>((props) => {
  if (props.chatMessages.length <= 0) {
    return null;
  }

  return (
    <>
      {props.chatMessages.map((chat) => (
        <div
          key={uuidv4()}
          class="px-5 py-1 flex justify-start items-center gap-1"
        >
          <div class="inline leading-7 tracking-wide">
            {chat.time && (
              <span class="mr-1 text-sm font-normal text-gray-700 inline-flex flex-grow-0 flex-shrink-0 items-center align-middle">
                {chat.time}
              </span>
            )}
            {chat.badges && chat.badges.length > 0 && (
              <span class="inline-flex mr-1 align-middle">
                {chat.badges?.map((badge) => (
                  <span key={uuidv4()}>
                    <Badge variant={badge} />
                  </span>
                ))}
              </span>
            )}
            <span
              class={`${
                chat?.color || "text-gray-800"
              } text-sm font-semibold mr-1 inline-block align-middle`}
            >
              {chat.name}:
            </span>
            <span class="text-sm text-gray-700 whitespace-normal inline break-all">
              {chat.messages.map((message) => {
                // check if message is string or object
                if (typeof message === "string") {
                  return (
                    <span key={uuidv4()} class="align-middle">
                      {message}
                    </span>
                  );
                }
                if (typeof message === "object") {
                  if ("emoji" in message) {
                    return (
                      <span key={message.id} class="">
                        <Emoji
                          emoji={message.emoji}
                          class="inline-block w-7 h-7 px-[1px]"
                        />
                      </span>
                    );
                  } else {
                    return (
                      <span key={message.id} class="">
                        <img
                          src={message.url}
                          alt=""
                          class="inline-block w-7 h-7 px-[1px] "
                          loading="lazy"
                        />
                      </span>
                    );
                  }
                }
              })}
            </span>
          </div>
        </div>
      ))}
    </>
  );
});
