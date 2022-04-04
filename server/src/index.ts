import { handleRequest } from './handler'
import { scheduledEvent } from './schedule'

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})

addEventListener('scheduled', event => {
  event.waitUntil(scheduledEvent(event.scheduledTime));
});
