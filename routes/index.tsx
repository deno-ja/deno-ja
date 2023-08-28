import { tw } from "twind";
import { contents } from "@/data/contents.ts";
import { Head } from "$fresh/src/runtime/head.ts";
import Walk from "@/islands/Walk.tsx";
import Showcase from "@/components/Showcase.tsx";
import { getProjects } from "@/lib/showcase.ts";
import { Denobata } from "@/components/Denobata.tsx";
import { Introduction } from "@/components/Introduction.tsx";

const projects = await getProjects();

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

        <div class="p-4 mx-auto max-w-screen-md space-y-8 flex flex-col items-center my-24">
          <img
            src="/logo_denofest.svg"
            class="h-32 mx-auto"
            alt="Deno Fest presented by toranoana.deno"
          />
          <div class="flex flex-col items-center">
            <div class="text-2xl">
              2023.10.20 13:00
            </div>
            <div>
              TOKYO Akihabara
            </div>
            <a
              class="px-16 py-3 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600"
              href="https://deno-fest-2023.deno.dev/"
            >
              特設サイトへ
            </a>
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
