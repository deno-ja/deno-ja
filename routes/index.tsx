/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";


const json = await (await fetch("https://connpass.com/api/v1/event/?series_id=7931")).json()

interface Event {
  event_id: number
  title: string
  catch: string
  started_at: string
  ended_at: string
  limit: number
  event_type: string
  accepted: number
  waiting: number
  updated_at: string
  event_url: string
  place: string
  address: string
}

const latest: Event = json.events[0]

console.log(
  latest.title,
  latest.event_url,
  latest.started_at
)

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1 class={tw`text-4xl font-bold text-center`}>deno-ja</h1>
      <div>
        <h2 class={tw`text-2xl font-bold text-center`}>{latest.title}</h2>
        <p class={tw`text-center`}>{latest.started_at}</p>
        <p class={tw`text-center`}>{latest.event_url}</p>
      </div>
    </div>
  );
}
