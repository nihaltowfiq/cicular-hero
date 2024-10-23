export async function getBridgeVolume() {
  try {
    const res = await fetch('https://api.agglayerzone.com/v1/bridge/info', {
      method: 'GET',
    });
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error.message);
  }
}
