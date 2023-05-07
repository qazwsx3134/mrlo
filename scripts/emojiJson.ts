import * as fs from "fs";
import * as path from "path";
// Read all files in folder

const folderPath = "./public/images/emojis"; // 資料夾路徑
const imagesPath = "/images/emojis"; // image資料夾路徑
const jsonPath = "./src/json/emojis.json"; // output資料夾路徑

const folders = fs
  .readdirSync(folderPath, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

const emojis = folders.reduce((acc, folderName) => {
  const folderPath = path.join("./public/images/emojis", folderName);
  console.log("folderPath", folderPath);
  const files = fs
    .readdirSync(folderPath)
    .filter((fileName) => {
      const ext = path.extname(fileName).toLowerCase();
      return [".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(ext);
    })
    .map((fileName) => `${imagesPath}/${folderName}/${fileName}`);
  acc[folderName] = files;

  return acc;
}, {});

// 寫入 JSON 檔案
fs.writeFileSync("./src/json/emojis.json", JSON.stringify(emojis));
