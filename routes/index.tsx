/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { getConnpassEvent } from "./api/events.ts";
import { format } from "https://deno.land/std@0.152.0/datetime/mod.ts";

const latest = (await getConnpassEvent())[0];

const toDateStr = (date: Date) => {
  return format(date, "yyyy-MM-dd HH:mm");
};

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md space-y-32`}>
      <div class={tw`flex flex-col items-center mt-20`}>
        <img src="/denoja-logo.svg" class={tw`w-80`} alt="" />
        <p class={tw`text-xl text-gray-700`}>
          Deno Japan Users Group
        </p>
      </div>
      <div class={tw`mt-12 mx-auto flex max-w-screen-sm text-center gap-6`}>
          <a
            class={tw`block flex-1 max-w- px-6 py-3 no-underline bg-green-100 border-2 border-black rounded hover:bg-green-200 hover:underline shadow-md`}
            href="https://zenn.dev/uki00a/books/effective-deno/viewer/what-is-deno"
          >
            Deno とは？
          </a>
          <a
            class={tw`block flex-1 px-6 py-3 no-underline bg-white border-2 border-black rounded hover:bg-gray-100 hover:underline shadow-md`}
            href="https://scrapbox.io/deno-ja/Slack%E3%81%AE%E5%8F%82%E5%8A%A0%E6%96%B9%E6%B3%95"
          >
            Slack に参加する
          </a>
        </div>

      <div>
        {latest &&
          (
            <div class={tw`flex items-center`}>
              <div class={tw``}>
                <a href={latest.event_url}>
                  <img
                    class={tw`w-full`}
                    src="/denobata-title.png"
                    alt="denoばた会議タイトルロゴ"
                  />
                </a>
                <a href={latest.event_url}>
                  <h2
                    class={tw`text-xl font-bold text-center hover:text-underline`}
                  >
                    {latest.title}
                  </h2>
                </a>
                <p class={tw`text-center`}>
                  {toDateStr(new Date(latest.started_at))}〜
                </p>
              </div>
              <div>
                <img
                  class={tw`w-full`}
                  src="/denobata-illust.png"
                  alt="denoばた会議イメージ図"
                />
              </div>
            </div>
          )}
      </div>

      <div>
      </div>
    </div>
  );
}
