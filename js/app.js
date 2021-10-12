if(navigator.serviceWorker){
    navigator.serviceWorker.register("/sw.js");
}
if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
}
  /*
if ('Notification' in window) {
    if (window.Notification.permission === 'granted') {
      new window.Notification('Time is over!');
    }
  }

if(window.caches){
    caches.open("storage"); //open, si no existe lo crea
    caches.has("storage").then( r => console.log(r) ) //verifica si existe
    caches.delete("storage").then( console.log ) //elimina cache

    caches.open("storage").then(cache => {
        cache.add("fichero-dato") //agrega al cache
        cache.addAll([            //agrega en arreglo
            "fichero",
            "img/hola.jpg"
        ]).then(()=>{
            cache.delete("name-cache") //elimina cache
            cache.put("name-cache",new Response("hola."))    //actualiza data cache
        })
        cache.match("name-cache")      //busca el cache
            .then(res => {
                res.text().then(console.log);
                res.json().then(console.log);
            })
    })

    caches.keys().then(keys => { //retorna los keys de caches
        console.log(keys)
    })
}
*/