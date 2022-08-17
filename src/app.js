const express = require('express');

const app = express();
const cors = require('cors');

//body parser

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.set('port', process.env.PORT | 4500);


app.get('/',(req,res) =>{
    res.send("Bienvenido a mi API creado con LNn");
});

app.use("/api/ventas",require('./routes/cliente'));
app.use("/api/clientes",require('./routes/venta'));
app.use("/api/areas",require('./routes/area'));
app.listen(app.get('port'), () =>{
    console.log('server on port ', app.get('port'));
});