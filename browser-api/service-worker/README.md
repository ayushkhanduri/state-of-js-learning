# How to test this

1. Go to brower-api folder and run ```npm install```
2. ```npm run start:service-worker```
3. go to localhost:8080
4. Also run the server in the shared folder in the api-server folder , ```first npm install and then npm run start```
5. In the applications tabs you will see Service Worker
6. Click on it , you will see a service worker registered and running
7. You can also look at the cache, under cache storage
8. Click on Get API Data in the UI
9. The cache will add the api response to Cache storage
10. Go to network , Disable cache and run the app offline. You will see everything except css is cached
11. You can cache the css file as well , just remove it from the array in sw.js

# Todo More

Implement notifications using service worker
