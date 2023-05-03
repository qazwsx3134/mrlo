import {
  component$,
  type PropFunction,
  useSignal,
  useTask$,
} from "@builder.io/qwik";

interface Props {
  callback$: PropFunction<(value: any) => void>;
}

export default component$<Props>((props) => {
  const input = useSignal<string | undefined>(undefined);
  useTask$(async ({ track }) => {
    track(() => input.value);
    let ok = false;
    while (!ok) {
      await input.value;
      ok = true;
    }
  });

  return (
    <>
      <input
        type="number"
        value={input.value}
        onInput$={(event) =>
          (input.value = (event.target as HTMLInputElement).value)
        }
      />
      <button onClick$={() => props.callback$(input)}>Search</button>
      <div>Input: {input}</div>
    </>
  );
});
