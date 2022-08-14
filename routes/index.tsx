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
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <div>
        <h1 class={tw`text-4xl font-bold text-center`}>deno-ja</h1>
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
