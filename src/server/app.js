import express from 'express'

const app = express();

app.get('/', (req, res) => res.send('hello Dave!'));

app.listen(8000, () => console.log('Example Dave'));