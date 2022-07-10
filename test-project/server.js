// server.js
const PORT = 5000;

export default {
    port: PORT,
    fetch: (request) => new Response("Welcome to Bun!")
};