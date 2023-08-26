import { tw } from "twind";
import { ConnpassEvent, getConnpassEvent } from "../lib/events.ts";
import { getProjects } from "../lib/showcase.ts";
import { format } from "https://deno.land/std@0.152.0/datetime/mod.ts";
import { contents } from "../data/contents.ts";
import { Head } from "$fresh/src/runtime/head.ts";
import Walk from "../islands/Walk.tsx";
import Showcase from "../components/Showcase.tsx";

const latest: ConnpassEvent = (await getConnpassEvent())[0] ?? {
  title: "Denoばた会議 Monthly",
  event_url: "https://deno-ja.connpass.com/",
};

const projects = await getProjects();

const day = ["日", "月", "火", "水", "木", "金", "土"];

const toDateStr = (date: Date) => {
  return format(date, "yyyy-MM-dd") + `(${day[date.getDay()]})`;
};
const toTimeStr = new Intl.DateTimeFormat("ja", {
  timeZone: "Asia/Tokyo",
  timeStyle: "short",
});

const remainDate = (date: Date) => {
  const diff = date.getTime() - new Date().getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return days;
};

const remainStr = (date: Date) => {
  const days = remainDate(date);
  if (days < 0) {
    return "終了しました";
  } else if (days === 0) {
    return "今日";
  } else {
    return `あと${days}日`;
  }
};

function Introduction() {
  return (
    <div class="flex flex-col items-center mt-20">
      <img src="/denoja-logo.svg" class="w-80" alt="deno-jaのロゴ" />
      <p class="text-xl text-gray-700 bg-white bg-opacity-90 m-4">
        Deno Japan Users Group
      </p>

      <div class="mt-32 max-w-md text-gray-700 space-y-4 bg-white p-4 bg-opacity-90">
        <p>
          deno-jaは、Denoの日本ユーザによるオンラインコミュニティです。
          主にSlack上で情報共有や雑談などの交流を行なっています。
        </p>

        <p>
          また、月に一回「
          <a
            href="https://deno-ja.connpass.com/"
            class="font-bold text-center hover:text-underline"
          >
            Denoばた会議
          </a>
          」というオンラインイベントを行なっています。
          どなたでも参加できますので、気軽に覗いてみてください。
        </p>
      </div>

      <div class="mt-12 flex flex-col md:flex-row text-center gap-6">
        <a
          class="block w-48 px-6 py-3 no-underline bg-green-100 border-2 border-black rounded hover:bg-green-200 hover:underline shadow-md"
          href="https://zenn.dev/uki00a/books/effective-deno/viewer/what-is-deno"
        >
          Deno とは？
        </a>
        <a
          class="block w-48 px-6 py-3 no-underline bg-white border-2 border-black rounded hover:bg-gray-100 hover:underline shadow-md"
          href="https://scrapbox.io/deno-ja/Slack%E3%81%AE%E5%8F%82%E5%8A%A0%E6%96%B9%E6%B3%95"
        >
          Slack に参加する
        </a>
      </div>
    </div>
  );
}

function Denobata() {
  return (
    <div>
      {latest && (
        <div class="md:flex items-center">
          <div>
            <a href={latest.event_url} tabIndex={-1}>
              <img
                class="w-full"
                src="/denobata-title.png"
                alt="denoばた会議タイトルロゴ"
              />
            </a>
            <a href={latest.event_url}>
              <h2 class="text-xl font-bold text-center hover:text-underline">
                {latest.title}
              </h2>
            </a>
            {latest.started_at && (
              <div class="text-center mt-4">
                <span class="text-xl">
                  {toDateStr(new Date(latest.started_at))}
                </span>
                <span class="ml-2 text-green-600">
                  {remainStr(new Date(latest.started_at))}
                </span>
                <p class="text-gray-500 mx-2 text-center">
                  {toTimeStr.format(new Date(latest.started_at))}〜
                </p>
              </div>
            )}
            <div class="mt-4 text-center">
              <a
                class="inline-block px-16 py-3 no-underline border-2 border-black rounded hover:bg-gray-100 hover:underline shadow-md"
                href={latest.event_url}
              >
                参加登録
              </a>
            </div>
          </div>
          <div>
            <img
              class="w-full"
              src="/denobata-illust.png"
              alt="denoばた会議イメージ図"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function Contents() {
  return (
    <div class="bg-gray-100 px-8 py-16 mt-20">
      <h2 class="text-3xl text-center text-gray-400">
        Contents by deno-ja
      </h2>

      <div class="max-w-screen-md mx-auto space-y-10 mt-10">
        {contents.map((content) => (
          <div class="flex gap-4">
            <div
              class={tw`inline-block p-3 rounded-full h-12 w-12 ${content.class}`}
            >
              <content.icon />
            </div>
            <div>
              <div>
                <a
                  href={content.href}
                  class="font-bold hover:text-underline"
                >
                  {content.title}
                </a>{" "}
                by{" "}
                <a href={content.authorUrl} class="hover:text-underline">
                  {content.author}
                </a>
              </div>
              <div class="pt-2 text-gray-800">{content.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <html lang="ja">
      <Head>
        <title>deno-ja | Deno Japan Users Group</title>
      </Head>
      <body>
          <div class="relative overflow-hidden">
            <Walk />

            <div class="p-4 pb-16 mb-16 mx-auto max-w-screen-md space-y-32 relative">
              <Introduction />
            </div>
          </div>

          <div class="p-4 mx-auto max-w-screen-md space-y-32">
            <Denobata />
          </div>

          <Contents />

          <Showcase projects={projects} />

          <footer class="p-12 max-w-screen-md mx-auto text-center">
            <ul class="flex gap-4 justify-center">
              <li class="font-bold hover:text-underline">
                <a href="https://deno.land/">Deno公式</a>
              </li>

              <li class="font-bold hover:text-underline">
                <a href="https://github.com/deno-ja/deno-ja">Source</a>
              </li>
            </ul>

            <p class="mt-4">© Deno Japan Users Group some rights reserved.</p>
          </footer>
      </body>
    </html>
  );
}
