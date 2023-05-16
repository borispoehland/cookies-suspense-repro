export async function fetchTimestamp() {
    const { datetime } = await fetch(
    'https://worldtimeapi.org/api/timezone/UTC'
  ).then((res) => res.json())
  return datetime
}