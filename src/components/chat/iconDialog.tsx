import {
  $,
  component$,
  type Signal,
  useOnDocument,
  PropFunction,
  QwikMouseEvent,
} from "@builder.io/qwik";

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
      class="absolute bottom-[88px] right-0 h-[350px] shadow-md shadow-gray-400 focus:outline-none rounded-md bg-gWhite py-2 px-2"
      style={{
        width: "calc(100% - 4px)",
      }}
    >
      <div class="m-1">
        <div>
          <div class="bg-gray-200 py-2 px-1 text-sm font-medium">MrLo</div>
          <div class="flex">
            <div class="px-[2px] hover:bg-buttonHover rounded-lg focus:outline-none">
              <div class="h-10 w-10 inline-flex justify-center items-center">
                <button
                  class="focus:outline-none"
                  onClick$={props.onIconClick$}
                >
                  <img
                    src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_18703539b9244118a177638fdb8630b0/default/light/1.0"
                    alt=""
                    class="h-7 w-7"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
});
