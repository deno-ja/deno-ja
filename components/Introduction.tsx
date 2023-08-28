export function Introduction() {
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
