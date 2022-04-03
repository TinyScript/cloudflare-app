import { handleRequest } from './handler'
import { scheduledEvent } from './schedule'

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})

addEventListener('scheduled', event => {
  console.log(1111111233)
  event.waitUntil(scheduledEvent(event.scheduledTime));
});
