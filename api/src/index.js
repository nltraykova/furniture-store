import express from 'express';
import cors from 'cors';

import routes from './routes.js';

const app = express();

app.use(cors());
app.use(routes);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(3030, 
    () => console.log('Server is listening on http://localhost:3030...')
);

 