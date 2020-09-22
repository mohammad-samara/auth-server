require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./auth/router.js');
const extraRoutes = require('./extra-routes.js');
const morgan = require('morgan');
const app = express();

const notFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');


app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Website Files
app.use(express.static('./public'));
app.use(router);
app.use(extraRoutes);

// app.use('/', router);




app.use('*', notFoundHandler);

app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT || 4000;
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`),
    );
  },
  
};