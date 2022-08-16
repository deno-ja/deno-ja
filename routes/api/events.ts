export interface ConnpassEvent {
  title: string;
  event_url: string;
  started_at?: string;
}

const timeout = 2000; // 2000ms

export async function getConnpassEvent(): Promise<ConnpassEvent[]> {
  let json: any;
  const controller = new AbortController();
  const timer = setTimeout(() => {
    controller.abort();
  }, timeout);
  try {
    json = await (await fetch(
      "https://connpass.com/api/v1/event/?series_id=7931",
      {
        signal: controller.signal,
      },
    ))
      .json();
  } catch (_) {
    return [];
  } finally {
    clearTimeout(timer);
  }
  return json.events;
}
