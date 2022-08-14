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