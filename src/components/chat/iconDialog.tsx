import {
  $,
  component$,
  type Signal,
  useOnDocument,
  type PropFunction,
  type QwikMouseEvent,
} from "@builder.io/qwik";
import Emoji, { type EmojiType } from "../icon/emoji";
import { v4 as uuidv4 } from "uuid";

const emojiList: {
  name: string;
  emojis: EmojiType[];
}[] = [
  {
    name: "MrLo",
    emojis: ["loLaugh", "vanish", "swingHead"],
  },
];

interface Props {
  modalRef: Signal<HTMLDialogElement | undefined>;
  onIconClick$?: PropFunction<
    (
      event: QwikMouseEvent<HTMLButtonElement, MouseEvent>,
      element: HTMLButtonElement
    ) => void
  >;
}

export default component$<Props>((props) => {
  const modalRef = props.modalRef;

  // Detect clicks outside of the modal
  const onClickOutside = $((event: Event) => {
    const iconDialogOpen = document.querySelector("#iconDialogOpen");
    const clickOpen = iconDialogOpen?.contains(event.target as Node);

    if (clickOpen) {
      return;
    }
    if (modalRef.value && !modalRef.value.contains(event.target as Node)) {
      modalRef.value.close();
    }
  });

  useOnDocument("click", onClickOutside);

  return (
    <dialog
      ref={modalRef}
      class="absolute bottom-[88px] right-0 h-[350px] shadow-md shadow-gray-400 focus:outline-none rounded-md bg-gWhite py-1 px-1"
      style={{
        width: "calc(100% - 4px)",
      }}
    >
      <div class="m-1 bg-white">
        <div>
          {emojiList.map((customer) => (
            <>
              <div class="py-2 px-1 text-sm font-medium">{customer.name}</div>
              <div class="flex">
                {customer.emojis.map((emoji) => (
                  <div
                    key={uuidv4()}
                    class="hover:bg-buttonHover rounded-lg focus:outline-none"
                  >
                    <div class="h-10 w-10 inline-flex justify-center items-center">
                      <button
                        class="focus:outline-none"
                        onClick$={props.onIconClick$}
                      >
                        <Emoji emoji={emoji} class="h-7 w-7" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </dialog>
  );
});
