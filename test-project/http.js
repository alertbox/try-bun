// http.js
export default {
    port: 5000,
    fetch(request) {
        return new Response("Welcome to Bun!");
    },
};