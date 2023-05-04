import { component$ } from "@builder.io/qwik";
import { CertificateIcon } from "../icon/certificatIcon";
import InfoImage from "./infoImage";

export default component$(() => {
  return (
    <div class="flex w-full grow shrink-0 basis-28 bg-lightGray z-10 p-2">
      <InfoImage />
      <div class="flex w-full flex-col items-start justify-between">
        <div class="flex items-start justify-between w-full">
          <div class="flex items-start">
            <span>MrLo</span>
            <span>
              <CertificateIcon class="text-purple text-xl" />
            </span>
          </div>
          <div>
            <span>反應</span>
            <span>反應</span>
            <span>反應</span>
            <span>反應</span>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
});
