if('ServiceWorker' in navigator){
    navigator.ServiceWorker.register('/sw.js')
    .then((reg)=> console.log('service worker register',reg))
    .catch((err)=> console.log('service worker not registered',err));
}