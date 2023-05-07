import {
  component$,
  useSignal,
  $,
  type QwikKeyboardEvent,
} from "@builder.io/qwik";
import InputIcon from "../icon/inputIcon";
import { SmileIcon } from "../icon/smileIcon";
import { TeddyBearIcon } from "../icon/teddyIcon";
import { ChatMessage, MessageType } from ".";
import { v4 as uuidv4 } from "uuid";

interface Props {
  inputText: {
    value: MessageType[];
  };
  chatList: {
    value: ChatMessage[];
  };
}
export default component$<Props>((props) => {
  const editorRef = useSignal<HTMLElement>();

  const onIconClick = $(() => {
    if (editorRef.value) {
      const id = uuidv4();
      editorRef.value.innerHTML += `<img id=${id} src="./images/lo-laugh.webp" alt="" class="h-8 w-8" />`;
      props.inputText.value = [
        ...props.inputText.value,
        {
          id,
          url: "./images/lo-laugh.webp",
        },
      ];
    }
  });

  const onKeyUp = $(
    (event: QwikKeyboardEvent<HTMLSpanElement>, element: HTMLSpanElement) => {
      // iterate over the children of the element
      // if the child is a text node, then we can just append it to the inputText
      // if the child is an element, then we need to check if it is an image or not

      props.inputText.value = [];
      element.childNodes.forEach((child) => {
        if (child instanceof Text) {
          if (child.textContent) {
            props.inputText.value = [
              ...props.inputText.value,
              child.textContent,
            ];
          }
        } else if (child instanceof HTMLImageElement) {
          props.inputText.value = [
            ...props.inputText.value,
            {
              id: child.id,
              url: child.src,
            },
          ];
        }
      });

      if (event.key === "Enter") {
        props.chatList.value = [
          ...props.chatList.value,
          {
            id: uuidv4(),
            name: "周大開",
            color: "text-gray-500",
            messages: props.inputText.value,
            time: "now",
          },
        ];
        props.inputText.value = [];
        if (editorRef.value) {
          editorRef.value.innerHTML = "";
        }
      }
    }
  );

  const onClickToChat = $(() => {
    if (props.inputText.value.length >= 1) {
      props.chatList.value = [
        ...props.chatList.value,
        {
          id: uuidv4(),
          name: "周大開",
          color: "text-gray-500",
          messages: props.inputText.value,
          time: "now",
        },
      ];
      props.inputText.value = [];
      if (editorRef.value) {
        editorRef.value.innerHTML = "";
      }
    }
  });
  return (
    <div class="relative w-full h-full flex flex-col items-center justify-center">
      <div class="flex w-full">
        <div class="flex-grow flex items-center bg-white rounded-md max-h-10 p-2 border border-gray-800 focus-within:border-orange-500 focus-within:border-[3px]">
          <div class="inputWrapper flex w-full ">
            <span
              ref={editorRef}
              contentEditable="true"
              onKeyUp$={onKeyUp}
              class="h-8 w-full flex grow items-center justify-start shrink pl-2 text-sm focus:outline-none"
            ></span>
          </div>
          <div onClick$={onIconClick}>
            <InputIcon size="md">
              <SmileIcon q:slot="icon" class="text-xl stroke-[5px]" />
            </InputIcon>
          </div>
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
          onClick$={onClickToChat}
        >
          聊天
        </button>
      </div>
    </div>
  );
});
