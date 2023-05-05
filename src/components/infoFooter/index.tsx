import { component$ } from "@builder.io/qwik";
import { CertificateIcon } from "../icon/certificatIcon";
import InfoImage from "./infoImage";
import { GreetIcon } from "../icon/greetIcon";
import { HeartIcon } from "../icon/heartIcon";
import { StarIcon } from "../icon/starFilledIcon";
import useConfetti from "~/hooks/useConfetti";
import Tag from "../tag";
import Clock from "~/components/clock";
import { PeoplePlusIcon } from "../icon/peoplePlus";

export default component$(() => {
  return (
    <div class="flex w-full grow shrink-0 basis-28 bg-lightGray z-10 p-2">
      <InfoImage />
      <div class="flex w-full flex-col items-base justify-start">
        <div class="flex items-base justify-between w-full">
          {/* 1 row Left */}
          <div class="flex items-center shrink-0">
            {/* Name */}
            <span class="text-lg font-semibold text-gray-900">MrLo_tw</span>
            {/* Certification */}
            <span>
              <CertificateIcon class="text-orange-500 text-base ml-1" />
            </span>
          </div>
          {/* 1 row Right */}
          <div class="flex grow shrink w-full justify-end gap-2">
            <button
              type="button"
              class="flex items-center justify-center px-1 py-[6px] rounded text-orange-500 hover:text-orange-700 hover:bg-buttonHover"
            >
              <GreetIcon class="text-2xl ml-1" />
              <span class="text-sm font-semibold">反應</span>
            </button>
            <button
              type="button"
              class="flex items-center justify-center px-1 py-[6px] rounded text-gray-900 bg-buttonHover hover:text-orange-500 hover:bg-gray-300"
            >
              <HeartIcon variant="empty" class="text-2xl ml-1" />
            </button>
            <button
              type="button"
              class="flex items-start justify-center px-2 py-[6px] rounded text-white bg-orange-500 hover:text-white hover:bg-orange-600"
              onClick$={useConfetti}
            >
              <StarIcon class="text-2xl ml-1" />
              <span class="text-base font-semibold">慶祝一下</span>
            </button>
          </div>
        </div>
        {/* 2 row */}
        <div class="flex items-base justify-between w-full">
          <div>
            <div class="font-semibold text-sm">
              【MrLo】我必須立馬畫圖 | 到年底前缺工一天都不行
            </div>
            <div class="flex mt-1 items-center justify-start">
              <div class="text-purple-600 mr-2">Test2</div>
              <div class="flex gap-1">
                <Tag color="lightGray">
                  <span>繪圖</span>
                </Tag>
                <Tag color="lightGray">
                  <span>熬夜</span>
                </Tag>
                <Tag color="lightGray">
                  <span>爆肝</span>
                </Tag>
                <Tag color="lightGray">
                  <span>打遊戲</span>
                </Tag>
              </div>
            </div>
          </div>
          <div class="flex p-1 mt-1 gap-2 justify-end items-start">
            <span>
              <PeoplePlusIcon class="text-red-700 text-2xl stroke-[4px]" />
            </span>
            <span class="text-lg text-red-700 flex items-center">999</span>
            <span class="text-lg text-gray-700 flex items-center">
              <Clock />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
