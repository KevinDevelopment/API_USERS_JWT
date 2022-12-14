const express = require('express');
const app = express();
const helmet = require('helmet');
const routes = require('./routes/routes')
require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(routes);

const PORT = 8087;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});