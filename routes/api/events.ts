export interface ConnpassEvent {
  title: string;
  event_url: string;
  started_at?: string;
}

export async function getConnpassEvent(): Promise<ConnpassEvent[]> {
  let json: any;
  try {
    json =
      await (await fetch("https://connpass.com/api/v1/event/?series_id=7931"))
        .json();
  } catch (_) {
    return [];
  }
  return json.events;
}
