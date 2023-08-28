import { ConnpassEvent, getConnpassEvent } from "@/lib/events.ts";
import { format } from "https://deno.land/std@0.152.0/datetime/mod.ts";

const latest: ConnpassEvent = (await getConnpassEvent())[0] ?? {
  title: "Denoばた会議 Monthly",
  event_url: "https://deno-ja.connpass.com/",
};

const day = ["日", "月", "火", "水", "木", "金", "土"];
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

const toDateStr = (date: Date) => {
  return format(date, "yyyy-MM-dd") + `(${day[date.getDay()]})`;
};
const toTimeStr = new Intl.DateTimeFormat("ja", {
  timeZone: "Asia/Tokyo",
  timeStyle: "short",
});

export function Denobata() {
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
