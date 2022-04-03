export async function scheduledEvent (scheduledTime: number): Promise<void> {
    await REDIS.put('value', String(Math.floor(Math.random() * 10000000)));
}