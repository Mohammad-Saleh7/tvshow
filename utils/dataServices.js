export async function getData(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("can't fetch API");
  }
  const data = await res.json();
  return data;
}
