import { component$, Signal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { readableNumber } from "~/utils/math";
import styles from "./channel.module.css";

interface Props {
  collapsed?: Signal<boolean>;
}

export default component$<Props>((props) => {
  const channels = [
    {
      iconUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/bb7d82ae-bd16-4711-9e11-b5a4942fec01-profile_image-70x70.jpeg",
      name: "魔王哈爾奈斯 (harnaisxsumire) asdasdasd",
      game: "特別節目",
      online: true,
      viewers: 900,
      streamUrl: "https://www.twitch.tv/harnaisxsumire",
    },
    {
      iconUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/bb7d82ae-bd16-4711-9e11-b5a4942fec01-profile_image-70x70.jpeg",
      name: "魔王哈爾奈斯 (harnaisxsumire) asdasdasd",
      game: "特別節目",
      online: false,
      viewers: 90000,
      streamUrl: "https://www.twitch.tv/harnaisxsumire",
    },
    {
      iconUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/bb7d82ae-bd16-4711-9e11-b5a4942fec01-profile_image-70x70.jpeg",
      name: "魔王哈爾奈斯 (harnaisxsumire) asdasdasd",
      game: "特別節目",
      online: true,
      viewers: 9000,
      streamUrl: "https://www.twitch.tv/harnaisxsumire",
    },
    {
      iconUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/bb7d82ae-bd16-4711-9e11-b5a4942fec01-profile_image-70x70.jpeg",
      name: "魔王哈爾奈斯 (harnaisxsumire) asdasdasd",
      game: "特別節目",
      online: true,
      viewers: 900,
      streamUrl: "https://www.twitch.tv/harnaisxsumire",
    },
    {
      iconUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/bb7d82ae-bd16-4711-9e11-b5a4942fec01-profile_image-70x70.jpeg",
      name: "魔王哈爾奈斯 (harnaisxsumire) asdasdasd",
      game: "特別節目",
      online: false,
      viewers: 90000,
      streamUrl: "https://www.twitch.tv/harnaisxsumire",
    },
    {
      iconUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/bb7d82ae-bd16-4711-9e11-b5a4942fec01-profile_image-70x70.jpeg",
      name: "魔王哈爾奈斯 (harnaisxsumire) asdasdasd",
      game: "特別節目",
      online: true,
      viewers: 9000,
      streamUrl: "https://www.twitch.tv/harnaisxsumire",
    },
    {
      iconUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/bb7d82ae-bd16-4711-9e11-b5a4942fec01-profile_image-70x70.jpeg",
      name: "魔王哈爾奈斯 (harnaisxsumire) asdasdasd",
      game: "特別節目",
      online: true,
      viewers: 900,
      streamUrl: "https://www.twitch.tv/harnaisxsumire",
    },
    {
      iconUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/bb7d82ae-bd16-4711-9e11-b5a4942fec01-profile_image-70x70.jpeg",
      name: "魔王哈爾奈斯 (harnaisxsumire) asdasdasd",
      game: "特別節目",
      online: false,
      viewers: 90000,
      streamUrl: "https://www.twitch.tv/harnaisxsumire",
    },
    {
      iconUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/bb7d82ae-bd16-4711-9e11-b5a4942fec01-profile_image-70x70.jpeg",
      name: "魔王哈爾奈斯 (harnaisxsumire) asdasdasd",
      game: "特別節目",
      online: true,
      viewers: 9000,
      streamUrl: "https://www.twitch.tv/harnaisxsumire",
    },
    {
      iconUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/bb7d82ae-bd16-4711-9e11-b5a4942fec01-profile_image-70x70.jpeg",
      name: "魔王哈爾奈斯 (harnaisxsumire) asdasdasd",
      game: "特別節目",
      online: true,
      viewers: 900,
      streamUrl: "https://www.twitch.tv/harnaisxsumire",
    },
    {
      iconUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/bb7d82ae-bd16-4711-9e11-b5a4942fec01-profile_image-70x70.jpeg",
      name: "魔王哈爾奈斯 (harnaisxsumire) asdasdasd",
      game: "特別節目",
      online: false,
      viewers: 90000,
      streamUrl: "https://www.twitch.tv/harnaisxsumire",
    },
    {
      iconUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/bb7d82ae-bd16-4711-9e11-b5a4942fec01-profile_image-70x70.jpeg",
      name: "魔王哈爾奈斯 (harnaisxsumire) asdasdasd",
      game: "特別節目",
      online: true,
      viewers: 9000,
      streamUrl: "https://www.twitch.tv/harnaisxsumire",
    },
  ];
  return (
    <div role="group" class="flex flex-col">
      {!props.collapsed?.value && (
        <div class="text-sm font-semibold mx-2 mb-2">已追隨的頻道</div>
      )}
      <div class="flex flex-col">
        {channels.map((channel) => (
          <div
            key={`${channel.streamUrl}`}
            class="py-2 flex hover:bg-buttonHover"
          >
            <Link
              href={channel.streamUrl}
              class={[
                "no-underline",
                "flex",
                "items-center",
                "justify-start",
                "shrink",
                props.collapsed?.value
                  ? styles.maxWidth50px
                  : styles.maxWidth225px,
              ]}
            >
              {/* channel icon */}
              <div class="channel-icon flex shrink-0 w-[30px] h-[30px] ml-2">
                <figure class="relative block">
                  <img
                    src={channel.iconUrl}
                    alt={channel.name}
                    class="rounded-full w-full block"
                  />
                </figure>
              </div>
              {/* title and viewer count */}
              {!props.collapsed?.value && (
                <div class="flex justify-between shrink min-w-0">
                  <div class="pl-2 flex shrink w-full">
                    <div class="overflow-hidden">
                      <p class="flex flex-col ">
                        <span class="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-medium">
                          {channel.name}
                        </span>
                        <span class="text-xs font-light">{channel.game}</span>
                      </p>
                    </div>
                    <div class="min-w-[40px] flex shrink-0 mx-1 items-center justify-start">
                      {/* online status */}
                      {channel.online ? (
                        <>
                          <div
                            class={`bg-red-600 relative inline-block w-2 h-2 rounded-full`}
                          ></div>
                          <div class="flex items-center text-xs ml-1">
                            <span>{readableNumber(channel.viewers)}</span>
                          </div>
                        </>
                      ) : (
                        <div class="flex items-center text-xs ml-1 font-normal">
                          <span>離線</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
});
