import { $, component$, type Signal, useOnDocument } from "@builder.io/qwik";

interface Props {
  modalRef: Signal<HTMLDialogElement | undefined>;
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
      class="absolute bottom-[88px] right-0 h-[350px] shadow-md shadow-gray-400 focus:outline-none rounded-md bg-white"
      style={{
        width: "calc(100% - 4px)",
      }}
    >
      TEST
    </dialog>
  );
});
