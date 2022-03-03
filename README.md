# Example Node.js + Express API endpoint

> You need to have Node.js available in your machine for this to work

## How to

- Install the dependencies:

```
npm install
```

- Start the server:

```
npm start
```

- Try the following cURL request:

```
curl --location --request POST 'http://localhost:3000/status' \
--header 'Content-Type: application/json' \
--data-raw '{
"message": "Hello world"
}'
```

If it prints `{ message: 'Hello world' }` twice in the console, hooray!
