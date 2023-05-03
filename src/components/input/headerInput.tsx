import { component$ } from "@builder.io/qwik";
import { MagnifyIcon } from "../icon/magnifyIcon";

export default component$(() => {
  return (
    <div class="relative mx-5 max-w-md w-full h-full flex items-center justify-center p-1">
      <div class="max-w-md w-full h-full rounded-md hover:shadow-md hover:shadow-slate-500">
        <div class="flex w-full h-full p-1 rounded-md">
          <div class="flex-grow ">
            <input
              class="h-full w-full pl-2 border border-gray-800 rounded-l-lg hover:border-gray-600 hover:border-2"
              type="text"
              name="search"
              placeholder="搜尋"
              id=""
            />
          </div>

          <div class="text-lg p-2 flex items-center bg-gray-200 hover:bg-gray-300 rounded-r-lg">
            <MagnifyIcon />
          </div>
        </div>
      </div>
    </div>
  );
});
