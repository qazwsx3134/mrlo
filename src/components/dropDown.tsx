import {
  $,
  type QRL,
  component$,
  useSignal,
} from "@builder.io/qwik";
import { Arrow } from "./starter/icons/arrow";

import type { MenuState } from "./menu";

interface Props {
  dropDownState: MenuState;
  selectedOnChange: QRL<(value: string) => void>;
  items: MenuState[];
}

export default component$<Props>((props) => {
  const isExpanded = useSignal(false);

  const toggleExpanded = $(() => {
    console.log("toggleExpanded");
    isExpanded.value = !isExpanded.value;
  });

  return (
    <div class="relative">
      <div class="flex flex-row text-primary bg-gWhite font-extrabold text-2xl  rounded items-center hover:bg-gray-50">
        <div class="flex flex-row items-center" onClick$={toggleExpanded}>
          <button
            type="button"
            class="inline-flex justify-center px-4 py-2"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded={isExpanded.value}
          >
            <span>{props.dropDownState}</span>
          </button>
          <div
            class={`w-4 h-4 ml-1 mt-1 ${
              isExpanded.value ? "-rotate-90" : "rotate-90"
            } transition-all duration-300 transform`}
          >
            <Arrow />
          </div>
        </div>
        {isExpanded.value && (
          <>
            <div
              class="origin-top-right absolute left-1 top-12 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-300"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}
            >
              <div class="py-1" role="none">
                {props.items.map((item) => (
                  <button
                    type="button"
                    key={item}
                    class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    onClick$={() => {
                      // props.selectedOnChange(item);
                      isExpanded.value = false;
                    }}
                    role="menuitem"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

    </div>
  );
});
