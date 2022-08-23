const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('olá');
});

const PORT = 3333;
app.listen(PORT, () => console.log(`server is runing os Port ${PORT}`));
