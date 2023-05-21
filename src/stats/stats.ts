export interface StatsResponse {
  counts: CountRecord[];
  action_counts: ActionCount[];
}

export interface CountRecord {
  g: number;
  s: number;
  t: string;
}

export interface ActionCount {
  a: string;
  c: number;
}

export async function getStats(): Promise<StatsResponse> {
  const response = await fetch('https://stats.spacexlaunchbot.dev/');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: StatsResponse = await response.json();
  return data;
}
