import { component$ } from "@builder.io/qwik";
import Tag from "~/components/tag";

export default component$(() => {
  return (
    <div id="infoImage" class="pl-2 mr-2">
      <div class="w-[70px] h-[70px] relative flex items-center justify-center cursor-pointer">
        <img
          class={[
            "relative",
            "rounded-full",
            "w-16",
            "h-16",
            "z-10",
            "box-content",
            "border-2",
            "border-white",
            "outline",
            "outline-[3px]",
            "outline-orange-500",
            "hover:outline-4",
          ]}
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/f201e2b1-6afb-4efb-ae5a-a38e8b8860e8-profile_image-70x70.png"
          alt=""
          loading="lazy"
        />
        <div class="absolute z-20 -bottom-3 mx-1 py-[1px]">
          <Tag>
            <span
              class={["text-sm", "text-white", "font-medium", "tracking-wide"]}
            >
              LIVE
            </span>
          </Tag>
        </div>
      </div>
    </div>
  );
});
