//const express = require('express');
//const routerApi = require('./routes/');
//const {
  //logErrors,
  //errorHandler,
 // boomErrorHandler,
//} = require('./middlewares/error.handler');
//const app = express();
//const port = 3000;
//app.use(
  //express.json({
    //extended: false, // permite codificar matrices y objetos enriquecidos en formato codificado en url
  //})
//);
//app.get('/', (req, res) => res.send('Ruta principal'));
//routerApi(app);
//app.use(logErrors);
//app.use(boomErrorHandler);
//app.use(errorHandler);
// eslint-disable-next-line no-console
//app.listen(port, () => console.log('Mi puerto', port));



const express = require('express');
const db = require('./db');
require('dotenv').config();
const cors = require('cors');
const routerApi = require('./routes/index');
const {
  errorHandler,
  logErrors,
  boomErrorHandler,
} = require('./middlewares/error.handler');
const { DBURL } = require('./const.json');
//HACEMOS LA CONEXIÓN
db(DBURL);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(
  express.json(
    { extended: false } // permite codificar matrices y objetos enriquecidos en formato codificado en url
  )
); //Selección de tipo de analisis de datos
//app.use(express.static('app/storage')); //Sacarlos Recursos estaticos de esta carpeta

routerApi(app);
app.use(logErrors); //El orden de los use es imPORTante
app.use(boomErrorHandler);
app.use(errorHandler); //Los middlewares de error van despues del routing

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Mi PORT' + PORT);
});
