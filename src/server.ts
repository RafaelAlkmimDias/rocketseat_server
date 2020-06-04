import express from 'express';

const app = express();

app.get('/users',(request,response) => {
   console.log('Hello word'); 

   response.send('Hello Word');
});

app.listen(3333);