interface Event {
  event_id: number;
  title: string;
  catch: string;
  started_at: string;
  ended_at: string;
  limit: number;
  event_type: string;
  accepted: number;
  waiting: number;
  updated_at: string;
  event_url: string;
  place: string;
  address: string;
}

export async function getConnpassEvent(): Promise<Event[]> {
  const json = await (await fetch("https://connpass.com/api/v1/event/?series_id=7931"))
    .json();
  return json.events;
}
