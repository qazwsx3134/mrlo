# TODO

## 解決動態 image url 的問題

1. github 因為會自帶 subpath
   其他應該不會
   所以可能 build 的時候要檢查

2. qwik 的 props 裡面不能有 function(因為不能 serializable)也就是不能傳一個 component, JSX Element 在裡面
   思考用 Slot 的方式 或是 用一個 component 裡面有 switch 控制要 render 甚麼 component

3. 要想多個 span 裡面有 text 又有 img 要怎麼像 twitch 那樣換行

## Qwik Notice

1. build static 完後 因為目前的 css style sheet 沒有跟隨著 js 所以需要到 q-manifest.json + index.html 改 /mrlo/build
2. service-work.js 也要

### Static assets 的 url

要改 adapters/static/vite.config.ts static adapter 的 origin

### js function bundle

要加在 src/entry.ssr.tsx 加 baseUrl
