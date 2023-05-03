import { PropFunction, component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./glowOnHoverButton.css?inline";

interface Props {
  onClick$?: PropFunction<() => void>;
}

export default component$<Props>((props) => {
  useStylesScoped$(styles);
  return (
    <button
      type="button"
      onClick$={props.onClick$}
      class="glow-on-hover w-56 h-14 rounded-xl before:rounded-xl after:rounded-xl"
    >
      Click me
    </button>
  );
});
