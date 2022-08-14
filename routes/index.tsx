/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { getConnpassEvent } from "./api/events.ts";
import { format } from "https://deno.land/std@0.152.0/datetime/mod.ts";
import * as Icons from "../components/Icons.tsx";

const latest = (await getConnpassEvent())[0];

const toDateStr = (date: Date) => {
  return format(date, "yyyy-MM-dd HH:mm");
};

const contents = [
  {
    title: "Connpass",
    icon: Icons.Academic,
    href: "https://connpass.com/",
    description: `Connpass`,
    author: "connpass",
    authorUrl: "https://connpass.com/",
  }
]



export default function Home() {
  return (
    <div>
      <div class={tw`p-4 mx-auto max-w-screen-md space-y-32`}>
        <div class={tw`flex flex-col items-center mt-20`}>
          <img src="/denoja-logo.svg" class={tw`w-80`} alt="deno-jaのロゴ" />
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
                  <a href={latest.event_url} tabIndex={-1}>
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
      </div>
      <div class={tw`bg-gray-100 p-4 mt-20`}>
        <h2 class={tw`text-xl font-bold text-center mt-10`}>
          Contents by deno-ja
        </h2>

        <div class={tw`p-4 max-w-screen-md mx-auto space-y-10 mt-10`}>
          <div class={tw`flex gap-4`}>
            <div
              class={tw`inline-block p-3 rounded-full bg-green-200 text-green-700`}
            >
              <Icons.Academic />
            </div>
            <div>
              <div>
                <a
                  href="https://zenn.dev/uki00a/books/effective-deno"
                  class={tw`font-bold hover:text-underline`}
                >
                  Effective Deno
                </a>{" "}
                by{" "}
                <a
                  href="https://twitter.com/uki00a"
                  class={tw`font-bold hover:text-underline`}
                >
                  uki00a
                </a>
              </div>
              <div>
                Denoを有効に活用するためのノウハウを一通り得られる包括的なドキュメントです。
              </div>
            </div>
          </div>

          <div>
            <div>
              <a href="https://uki00a.github.io/deno-weekly/">
                週刊Deno
              </a>{" "}
              by uki00a
            </div>
            <div>
              毎週日曜日にその週のDenoの最新情報を発信しています。
            </div>
          </div>

          <div>
            <div>
              <a href="https://scrapbox.io/deno-ja/">
                deno-ja Scrapbox
              </a>{" "}
              by deno-ja
            </div>
            <div>
              Denoに関してなんでもまとめているWiki的なページです。deno-jaコミュニティで管理されています。
            </div>
          </div>
        </div>
      </div>

      <footer class={tw`p-4 max-w-screen-md mx-auto`}>
        <p>
          © Deno Japan Users Group some rights reserved.
        </p>
        <p>
          Released under the MIT License.
        </p>
      </footer>
    </div>
  );
}
