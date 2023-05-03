import { component$ } from "@builder.io/qwik";
import { chatMessage } from ".";

interface Props {
  chatMessages: chatMessage[];
}

export default component$<Props>((props) => {
  if (props.chatMessages.length <= 0) {
    return null;
  }

  return (
    <>
      {props.chatMessages.map((chat) => (
        <div key={`${chat.time}${chat.name}`} class="px-5 py-1 inline-block">
          {chat.time && (
            <span class="mr-1 text-xs font-normal text-gray-700">
              {chat.time}
            </span>
          )}
          {chat.icons && chat.icons.length > 0 && (
            <span>
              {chat.icons?.map((icon) => (
                <span key={icon}>{icon}</span>
              ))}
            </span>
          )}
          <span
            class={`${
              chat?.color || "text-gray-800"
            } text-sm font-semibold mr-1`}
          >
            {chat.name}:
          </span>
          <span class="text-sm text-gray-700 whitespace-normal break-all inline-block">
            {chat.messages.map((message) => {
              // check if message is string or object
              if (typeof message === "string") {
                return (
                  <span key={message} class="inline-block">
                    {message}
                  </span>
                );
              }
              if (typeof message === "object") {
                return (
                  <span key={`${chat.time}${chat.name}${message.url}`}>
                    <img
                      src={message.url}
                      alt=""
                      class="inline-block w-7 h-7"
                    />
                  </span>
                );
              }

              return;
            })}
          </span>
        </div>
      ))}
    </>
  );
});
