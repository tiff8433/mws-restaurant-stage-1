if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js', {scope: "/"})
    .then((registration) => {
        console.log('Registration successful, scope is:', registration.scope);
    })
    .catch((error) => {
        console.log('Service worker registration failed, error:', error);
    });
}