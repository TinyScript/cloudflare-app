export async function scheduledEvent (scheduledTime: number): Promise<void> {
    await REDIS.put('value', '1111'+String(Math.floor(Math.random() * 10000000)));
}