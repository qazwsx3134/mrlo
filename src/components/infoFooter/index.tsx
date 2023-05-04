import { $, component$ } from "@builder.io/qwik";
import { CertificateIcon } from "../icon/certificatIcon";
import InfoImage from "./infoImage";
import { GreetIcon } from "../icon/greetIcon";
import { HeartIcon } from "../icon/heartIcon";
import { StarIcon } from "../icon/starFilledIcon";
import useConfetti from "~/hooks/useConfetti";

export default component$(() => {
  return (
    <div class="flex w-full grow shrink-0 basis-28 bg-lightGray z-10 p-2">
      <InfoImage />
      <div class="flex w-full flex-col items-base justify-between">
        <div class="flex items-base justify-between w-full">
          <div class="flex items-center shrink-0">
            <span class="text-lg font-semibold text-gray-900">MrLo_tw</span>
            <span>
              <CertificateIcon class="text-orange-500 text-base ml-1" />
            </span>
          </div>
          <div class="flex grow shrink w-full justify-end gap-1">
            <button
              type="button"
              class="flex items-center justify-center px-1 py-2 rounded text-orange-500 hover:text-orange-700 hover:bg-buttonHover"
            >
              <GreetIcon class="text-2xl ml-1" />
              <span class="text-sm font-semibold">反應</span>
            </button>
            <button
              type="button"
              class="flex items-center justify-center px-1 py-2 rounded text-gray-900 bg-buttonHover hover:text-orange-500 hover:bg-gray-300"
            >
              <HeartIcon variant="empty" class="text-2xl ml-1" />
            </button>
            <button
              type="button"
              class="flex items-start justify-center px-2 py-2 rounded text-white bg-orange-500 hover:text-white hover:bg-orange-600"
              onClick$={useConfetti}
            >
              <StarIcon class="text-2xl ml-1" />
              <span class="text-base font-semibold">慶祝一下</span>
            </button>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
});
