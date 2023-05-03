import { QRL, component$ } from "@builder.io/qwik";

import DropDown from "./dropDown";


export enum MenuState {
  BadCustomer = "bad customer",
  Customer = "customer",
}

interface Props {
  menuState: MenuState;
  menuStateOnChange: QRL<(value: string) => void>;
}

export default component$<Props>((props) => {
  console.log(Object.values(MenuState));
  return (
    // Create a H1 element with the text "Hello World"
    <div class="flex flex-row text-primary bg-white font-extrabold text-2xl py-2 rounded items-center">
      <DropDown
        dropDownState={props.menuState}
        selectedOnChange={props.menuStateOnChange}
        items={[MenuState.BadCustomer, MenuState.Customer]}
      />
    </div>
  );
});
