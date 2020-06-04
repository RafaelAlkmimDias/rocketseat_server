import express from 'express';

const app = express();

app.get('/users',(request,response) => {
   console.log('Hello word'); 

   response.json([
       'Hello Word',
       'Teste',
       'Arroz'
    ]);
});

app.listen(3333);