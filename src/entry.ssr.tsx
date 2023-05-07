/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is render outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import {
  renderToStream,
  type RenderToStreamOptions,
} from "@builder.io/qwik/server";
import { manifest } from "@qwik-client-manifest";
import Root from "./root";
import dotenv from "dotenv";

dotenv.config();

// This is for add subpath to the base url when deploying to github pages
const baseUrl = process.env.REPOSITORY_NAME
  ? `/${process.env.REPOSITORY_NAME}/build/`
  : "/build";

export default function (opts: RenderToStreamOptions) {
  return renderToStream(<Root />, {
    manifest,
    ...opts,
    base: baseUrl,
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      lang: "en-us",
      ...opts.containerAttributes,
    },
  });
}
