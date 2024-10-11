import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        message : 'Pagina Principal'
    })
})

app.get('/productos', (req, res) => {
    res.json({
        message : 'Pagina  de Productos'
    })
})


app.listen(port, () => console.log(`App corriendo en el puerto ${port}`))