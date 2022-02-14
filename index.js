// importar o express
const express = require ('express');

// Criar um servidor: app
const app = express();

//Criar uma rota "/" que vai enviar um arquivo views/index.html
app.get("/",(req,res)=>{
    res.sendFile()
})
//Rodar o servidor na  pagina 3000
app.listen(3000,()=>{console.log("Servidor rodando na porta 3000")})