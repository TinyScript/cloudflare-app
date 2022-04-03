export async function scheduledEvent (scheduledTime: number): Promise<void> {
    Promise.resolve(REDIS.put('value', String(scheduledTime)));
}