import express from 'express';
import { json, urlencoded } from 'body-parser';
import { config } from './config';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { logger, morganOption } from './winston';
import xmlparser from 'express-xml-bodyparser';
import { productController } from './controllers/productController';


const Helmet = helmet as any;
const app = express();
app.use(Helmet());

// using bodyParser
app.use(urlencoded({ extended: true }));

// using bodyParser to parse JSON bodies into JS objects
app.use(json({ limit: '10mb' }));

// using XML body parser
app.use(xmlparser());

// enabling CORS for all requests
app.use(cors({ origin: true, credentials: true }));

// adding morgan to log HTTP requests
const format = ':remote-addr - ":method :url HTTP/:http-version" :status :response-time ms - :res[content-length] ":referrer" ":user-agent"';
app.use(morgan(format, morganOption));



// Definition controllers
productController.init(app);


const main = express().use(config.get('basePath') || '', app);

main.listen(config.get('port'), async () => {
    logger.info(`server started. Listening on port ${config.get('port')} in "${config.get('env')}" mode`);
});
/* cronService.startCronTransfer(); */
export default app;