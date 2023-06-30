import express from 'express';
import cors from "cors";

const app = express();
app.use(express.json());
const PORT =3000;

app.use(cors());
app.get("/ping",(req,res)=>{
    console.log("Alguien ha dado ping");
    res.setHeader("Contest-Type","application/json");
    res.send("Pong")
})
app.get("/hola/:nombre/:apellido",(req,res)=>{
    res.setHeader("Contest-Type","application/json");
    const nombre = req.params.nombre;
    const apellido =req.params.apellido;
    console.log("Alguien ha ingresado sus datos...");
    res.send({nombre: nombre,apellido: apellido});
})

app.listen(PORT,()=>{
    console.log("server running in port: "+PORT);
})

