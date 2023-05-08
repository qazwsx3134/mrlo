# TODO

## 解決動態 image url 的問題

github 因為會自帶 subpath
其他應該不會
所以可能 build 的時候要檢查

## Qwik Notice

1. build static 完後 因為目前的css style sheet沒有跟隨著js所以需要到q-manifest.json + index.html 改 /mrlo/build
2. service-work.js 也要

### Static assets的url

要改 adapters/static/vite.config.ts static adapter 的 origin

### js function bundle

要加在 src/entry.ssr.tsx 加baseUrl