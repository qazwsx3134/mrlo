import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./eyeMove.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  return <span class="loader flex"></span>;
});
