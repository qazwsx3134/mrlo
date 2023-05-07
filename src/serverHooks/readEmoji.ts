import { server$ } from "@builder.io/qwik-city";
import * as fs from "fs";
// Read all files in folder

export const readEmoji = server$(() => {
  const folderPath = "./public/images/emojis"; // 資料夾路徑
  // 讀取資料夾下所有檔案
  const files = fs.readdirSync(folderPath);

  // Create emoji json file

  const emojiJson = files.map((file) => {
    const emoji = file;
    return emoji;
  });

  console.log(emojiJson);
  return emojiJson;
});
