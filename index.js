import express from 'express';
import routes from './routes/routes.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(routes);

app.listen(8080, () => {
    console.log("El Servidor esta funcionando en el puerto 8080")
});