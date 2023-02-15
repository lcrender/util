import app from './server.js';
import {PORT} from  './config/config.js';
app.listen(PORT, () => {
    console.log('Server on port', PORT)
});