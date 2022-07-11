// server.js
const PORT = 3000;

export default {
    port: PORT,
    fetch: (request) => new Response("Welcome to Bun!")
};