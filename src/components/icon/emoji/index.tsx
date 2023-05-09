import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { transformToMrlo } from "~/utils/github";

const emojiPath = "/images/emojis";
const emojiMap = {
  loLaugh: "/mrlo/lo-laugh.webp",
  vanish: "/mrlo/vanish.gif",
  swingHead:
    "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_18703539b9244118a177638fdb8630b0/default/light/1.0",
};

export type EmojiType = keyof typeof emojiMap;

export default component$(
  (
    props: QwikIntrinsicElements["img"] & {
      emoji: EmojiType;
      key?: string;
    }
  ) => {
    const location = useLocation();
    const { emoji, ...rest } = props;
    // Check if emoji is a start with /mrlo

    const src = emojiMap[emoji].startsWith("/mrlo")
      ? transformToMrlo(location.url.origin, `${emojiPath}${emojiMap[emoji]}`)
      : emojiMap[emoji];
    return <img {...rest} key={props?.key} src={src} />;
  }
);
