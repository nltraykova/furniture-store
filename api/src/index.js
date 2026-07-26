import express from 'express';
import cors from 'cors';

import routes from './routes.js';
import { authMiddleware } from './middleware/ath.middleware.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(authMiddleware);
app.use(routes);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(3030, 
    () => console.log('Server is listening on http://localhost:3030...')
);

 